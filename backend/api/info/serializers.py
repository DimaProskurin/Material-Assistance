from rest_framework import serializers


class CategorySerializer(serializers.Serializer):
    name = serializers.CharField(max_length=64)
    description = serializers.CharField(max_length=1024)
    url = serializers.CharField(max_length=64)
    image = serializers.FileField()