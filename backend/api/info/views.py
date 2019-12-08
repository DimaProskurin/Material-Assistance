from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Category, Compensation, WhiteListEmail
from .serializers import CategorySerializer, CompensationSerializer
from rest_framework.authtoken.models import Token
from .utils import get_token_from_request


def verdict(request):
    try:
        token = get_token_from_request(request)
    except Exception:
        return "auth error"

    try:
        user = Token.objects.filter(key=token).last().user
    except AttributeError:
        return "auth error"

    if len(WhiteListEmail.objects.filter(email=user.email)) == 0:
        return "whitelist error"

    return "ok"


class CategoriesView(APIView):
    def get(self, request):
        result = verdict(request)
        if result != "ok":
            return Response(result)

        params = dict(request.query_params)
        if 'url' in params:
            response = Category.objects.filter(url__in=params['url'])
        else:
            response = Category.objects.all()
        return Response({"categories": CategorySerializer(response, many=True).data})


class CompensationsView(APIView):
    def get(self, request):
        result = verdict(request)
        if result != "ok":
            return Response(result)

        params = dict(request.query_params)
        if 'category_url' in params:
            categories = Category.objects.filter(url__in=params['category_url'])
            response = Compensation.objects.filter(category__in=categories)
        else:
            response = Compensation.objects.all()

        return Response({"compensations": CompensationSerializer(response, many=True).data})
