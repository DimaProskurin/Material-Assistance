from django.shortcuts import redirect
from rest_framework.authtoken.models import Token
from .constants import SITE_ADDRESS


def profile_view(request):
    response = redirect(SITE_ADDRESS)
    Token.objects.filter(user=request.user).delete()
    token = Token.objects.get_or_create(user=request.user)
    response.set_cookie('money_api_token', token)
    return response


def logout_view(request):
    response = redirect(SITE_ADDRESS)
    response.delete_cookie('money_api_token')
    return response
