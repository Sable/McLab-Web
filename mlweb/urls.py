"""mlweb URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin
from django.shortcuts import redirect
from mcserver import views
import uuid

def redirect_to_session(*args, **kwargs):
    new_uuid = str(uuid.uuid4())
    return redirect('/session/{0}/'.format(new_uuid))


# Be careful about reordering these
urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', redirect_to_session, name='index'),
    url(r'^session/(?P<sessionid>[\w-]*?)/$', views.index, name='index_sessioned'),
    url(r'^session/(?P<sessionid>[\w-]*?)/upload/$', views.upload, name='upload'),
    url(r'^session/(?P<sessionid>[\w-]*?)/filetree/$', views.filetree, name='filetree'),
    url(r'^session/(?P<sessionid>[\w-]*?)/readfile/(?P<filepath>.*?)$',
        views.readfile, name='readfile'),
]

