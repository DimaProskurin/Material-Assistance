import re
from .models import ValidatedStudent
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User


def get_token_from_request(request):
    token_tuple = request.COOKIES.get('money_api_token')
    matches = re.search(r'(<Token: (\S*)>)', token_tuple)
    token = matches.groups(0)[1]
    return token


def get_student_from_request(request):
    current_token = get_token_from_request(request)
    current_user = Token.objects.filter(key=current_token).last().user
    current_email = User.objects.filter(username=current_user).last().email
    return ValidatedStudent.objects.filter(email=current_email).last()
