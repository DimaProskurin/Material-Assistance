import re


def get_token_from_request(request):
    token_tuple = request.COOKIES.get('money_api_token')
    matches = re.search(r'(<Token: (\S*)>)', token_tuple)
    token = matches.groups(0)[1]
    return token
