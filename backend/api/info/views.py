from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Category, Compensation
from .serializers import CategorySerializer, CompensationSerializer
from rest_framework.authtoken.models import Token
import re


class CategoriesView(APIView):
    def get(self, request):
        tokenTuple = request.COOKIES.get('money_api_token')
        matches = re.search(r'(<Token: (\S*)>)', tokenTuple)
        token = matches.groups(0)[1]
        user = Token.objects.filter(key=token).last().user

        params = dict(request.query_params)
        if 'url' in params:
            response = Category.objects.filter(url__in=params['url'])
        else:
            response = Category.objects.all()
        return Response({"categories": CategorySerializer(response, many=True).data})


class CompensationsView(APIView):
    def get(self, request):
        token = request.COOKIES.get('money_api_token')
        params = dict(request.query_params)
        if 'category_url' in params:
            categories = Category.objects.filter(url__in=params['category_url'])
            response = Compensation.objects.filter(category__in=categories)
        else:
            response = Compensation.objects.all()

        return Response({"compensations": CompensationSerializer(response, many=True).data})
