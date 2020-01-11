from rest_framework import serializers
from .models import Payment


class CategorySerializer(serializers.Serializer):
    name = serializers.CharField(max_length=64)
    description = serializers.CharField(max_length=1024)
    url = serializers.CharField(max_length=64)
    image = serializers.FileField()


class CompensationSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=64)
    money = serializers.CharField(max_length=1024)
    url = serializers.CharField(max_length=64)
    requirements = serializers.CharField(max_length=2048)
    additional_info = serializers.CharField(max_length=2048)
    once_a_term = serializers.BooleanField(default=False)
    category_url = serializers.CharField(max_length=64)


class PaymentSerializer(serializers.Serializer):
    money = serializers.IntegerField()
    compensation_id = serializers.SlugRelatedField(read_only=True, slug_field='name')
    date = serializers.DateField()

    class Meta:
        model = Payment
        fields = "__all__"


class StudentSerializer(serializers.Serializer):
    email = serializers.EmailField()
    name = serializers.CharField()
    surname = serializers.CharField()
    middlename = serializers.CharField()
    group = serializers.CharField()
