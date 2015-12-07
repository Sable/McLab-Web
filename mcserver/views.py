from django.conf import settings
from django.core import urlresolvers
from django.core.servers.basehttp import FileWrapper
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_GET, require_POST
from django.http import HttpResponse, HttpResponseBadRequest, JsonResponse, Http404
import json
import shutil
import subprocess
from zipfile import ZipFile
import os
import uuid

# Credit: http://stackoverflow.com/questions/431684/how-do-i-cd-in-python
# TODO: Move this to separate file
class cd:
    """Context manager for changing the current working directory"""
    def __init__(self, newPath):
        self.newPath = os.path.expanduser(newPath)

    def __enter__(self):
        self.savedPath = os.getcwd()
        os.chdir(self.newPath)

    def __exit__(self, etype, value, traceback):
        os.chdir(self.savedPath)


@require_GET
def index(request, sessionid=None):
    if not sessionid:
        return HttpResponseBadRequest('Need sessionid')
    return render(request, 'index.html')


@csrf_exempt
@require_POST
def upload(request, sessionid=None):
    if not sessionid:
        return HttpResponseBadRequest('Need sessionid')
    try:
        _, upload = request.FILES.popitem()
    except:
        return HttpResponseBadRequest('No file uplaoded.')

    # This is very unpythonic. pls fix
    try:
        handle_uploaded_file(upload[0], sessionid)
        return HttpResponse('')
    except Exception as e:
        print e
        return HttpResponseBadRequest('Bad upload')  # so informative wow

def store_uploaded_file(f, store_path, sessionid):
    if not os.path.exists(os.path.dirname(store_path)):
        os.makedirs(os.path.dirname(store_path))
    with open(store_path, 'wb+') as destination:
        for chunk in f.chunks():
            destination.write(chunk)

def handle_uploaded_file(f, sessionid):
    zip_file_name = 'zipped_upload'
    zip_subpath = os.path.join(sessionid, zip_file_name)
    zip_path = os.path.join(settings.MEDIA_ROOT, zip_subpath)
    store_uploaded_file(f, zip_path, sessionid)

    extract_subpath = os.path.join(sessionid, settings.USER_FILE_ROOT)
    extract_path = os.path.join(settings.MEDIA_ROOT, extract_subpath)

    # This will raise errors if not a valid zipfile.
    # We should probably inspect the error and show a meaningful error msg
    with ZipFile(zip_path) as zf:
        zf.extractall(path=extract_path)


def build_directory(walk_iterator, fileroot):
    # There are a couple hacks here to not return the files autocreated by OSX.
    path, dir_list, files = walk_iterator.next()
    dir_list[:] = filter(lambda x: x != "__MACOSX", dir_list)
    directories = [build_directory(walk_iterator, fileroot) for d in dir_list]

    return {
        "path": os.path.relpath(path, os.path.dirname(fileroot)),
        "directories": directories,
        "files": filter(lambda x: x != ".DS_Store", files),
    }

@require_GET
def filetree(request, sessionid=None):
    if not sessionid:
        return HttpResponseBadRequest('Need sessionid')

    fileroot_rel = os.path.join(sessionid, settings.USER_FILE_ROOT)
    fileroot = os.path.join(settings.MEDIA_ROOT, fileroot_rel)
    if not os.path.exists(fileroot):
        return JsonResponse({})

    return JsonResponse(build_directory(os.walk(fileroot), fileroot))

@require_GET
def readfile(request, sessionid=None, filepath=""):
    fileroot_rel = os.path.join(sessionid, settings.USER_FILE_ROOT)
    fileroot = os.path.join(settings.MEDIA_ROOT, fileroot_rel)
    abs_path = os.path.join(fileroot, os.path.normpath(filepath))

    if not os.path.exists(abs_path):
        raise Http404("File does not exist")

    with open(abs_path, 'rb') as f:
        return HttpResponse(f.read())

@require_GET
def serve_gen(request, sessionid=None, filepath=""):
    if not sessionid:
        return HttpResponseBadRequest('Need sessionid')

    fileroot = os.path.join(settings.MEDIA_ROOT, sessionid, 'gen')
    abs_path = os.path.join(fileroot, os.path.normpath(filepath))
    with open(abs_path, 'rb') as f:
        response = HttpResponse(FileWrapper(f), content_type='application/zip')
        response['Content-Disposition'] = 'attachment; filename={0}'.format(os.path.basename(filepath))

    return response

def extract_kinds(json_subtree, output_dict):
    if type(json_subtree) == dict:
        if json_subtree.has_key('kind'):
            # hit!
            record = {
                'name': json_subtree['name']['name'],
                'position': {
                    # ace editor rows are zero indexed
                    'startRow': json_subtree['name']['position']['start']['line'] - 1,
                    'startColumn': json_subtree['name']['position']['start']['column'] - 1,
                    'endRow': json_subtree['name']['position']['end']['line'] - 1,
                    'endColumn': json_subtree['name']['position']['end']['column'],  # Becaues of how ace range works
                },
            }

            if not output_dict.has_key(json_subtree['kind']):
                output_dict[json_subtree['kind']] = []

            output_dict[json_subtree['kind']].append(record)
        else:
            for v in json_subtree.itervalues():
                extract_kinds(v, output_dict)
    elif type(json_subtree) == list:
        for item in json_subtree:
            extract_kinds(item, output_dict)


def build_fortran_arg_string(arg):
    return "{0}&{1}*{2}&{3}".format(
        arg['mlClass'],
        arg['numRows'],
        arg['numCols'],
        arg['realComplex'],
    )


@require_GET
def kind_analysis(request, sessionid=None, filepath=""):
    fileroot_rel = os.path.join(sessionid, settings.USER_FILE_ROOT)
    fileroot = os.path.join(settings.MEDIA_ROOT, fileroot_rel)
    abs_path = os.path.join(fileroot, os.path.normpath(filepath))

    if not os.path.exists(abs_path):
        raise Http404("File does not exist: Cannot run kind analysis.")

    mclab_output = subprocess.check_output(
        ['java', '-jar', settings.MCLAB_CORE_JAR_PATH, '--json', abs_path]
    )

    try:
        mclab_json = json.loads(mclab_output)
    except ValueError:
        json_err = json.dumps({
            "msg": "Mclab-core failed to do kind analysis on this file. " + \
                 "Is this a valid matlab file?"
        })
        return HttpResponseBadRequest(json_err)

    output_dict = {}
    extract_kinds(mclab_json, output_dict)


    # return HttpResponse(mclab_output)
    return JsonResponse(output_dict)

@csrf_exempt
@require_POST
def compile_to_fortran(request, sessionid):
    # FIXME: Too many magic strings here
    post_dict = json.loads(request.body);
    main_file = post_dict.get('mainFile', '')
    arg_string = build_fortran_arg_string(post_dict.get('arg'))
    print main_file

    # FIXME: too much copy pasta
    fileroot_rel = os.path.join(sessionid, settings.USER_FILE_ROOT)
    fileroot = os.path.join(settings.MEDIA_ROOT, fileroot_rel)
    abs_path = os.path.join(fileroot, os.path.normpath(main_file))

    print abs_path
    # arg_string = ["-arg " +
    with open(os.devnull, 'w') as devnull:
        subprocess.check_output([
            'java', '-jar', settings.MC2FOR_PATH,
            abs_path, '-args', arg_string, '-codegen',
        ], stderr=devnull)

    gen_root = os.path.join(settings.MEDIA_ROOT, sessionid, 'gen')
    compiled_fortran_dir = os.path.join(gen_root, 'fortran_code')
    if (os.path.exists(compiled_fortran_dir)):
        shutil.rmtree(compiled_fortran_dir)
    os.makedirs(compiled_fortran_dir)
    print gen_root
    # TODO: Make these work for more than one level
    filelist = filter(
        lambda x: x[-4:] == ".f95",
        os.listdir(os.path.dirname(abs_path))
    )

    filelist = [os.path.join(os.path.dirname(abs_path), f) for f in filelist]

    for f in filelist:
        shutil.move(f, compiled_fortran_dir)
    archive_name = "fortran-package-{0}".format(uuid.uuid4())

    with cd(gen_root):
        final_name = shutil.make_archive(archive_name, 'zip', '.', 'fortran_code')

    print 'gen_root', gen_root
    print final_name
    return JsonResponse({"package_path": urlresolvers.reverse('serve_gen', args=[sessionid, os.path.basename(final_name)])})
