from django.conf import settings
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_GET, require_POST
from django.http import HttpResponse, HttpResponseBadRequest, JsonResponse
from zipfile import ZipFile
import os


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
    path, dir_list, files = walk_iterator.next()
    directories = [build_directory(walk_iterator, fileroot) for d in dir_list]
    return {
        "path": os.path.relpath(path, os.path.dirname(fileroot)),
        "directories": directories,
        "files": files,
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
        return HttpResponseBadRequest("File does not exist")

    with open(abs_path, 'rb') as f:
        return HttpResponse(f.read())


