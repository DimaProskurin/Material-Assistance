from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Category, Compensation
from .serializers import CategorySerializer


class CategoriesView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        return Response({"categories": CategorySerializer(categories, many=True).data})