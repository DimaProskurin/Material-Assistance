"""api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf.urls.static import static
from django.conf.urls import url

from .settings import MEDIA_ROOT, MEDIA_URL
from django.shortcuts import redirect
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.views import APIView
from django.views.generic import TemplateView
from .constants import siteAddress


def profile_view(request):
    response = redirect(siteAddress)
    Token.objects.filter(user=request.user).delete()
    token = Token.objects.get_or_create(user=request.user)
    response.set_cookie('money_api_token', token)
    return response


class GetToken(APIView):
    def get(self, request):
        token = request.COOKIES['money_api_token']
        return Response({"money_api_token": token})


def logout_view(request):
    response = redirect(siteAddress)
    response.delete_cookie('money_api_token')
    return response


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('info.urls')),
    url(r'^accounts/', include('allauth.urls')),
    url(r'^accounts/profile/', profile_view),
    path('token/', GetToken.as_view()),
    path('api/', include('application.urls')),
    path('logout/', logout_view)
]

urlpatterns += static(MEDIA_URL, document_root=MEDIA_ROOT)
# urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]
