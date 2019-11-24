from rest_framework import serializers


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
