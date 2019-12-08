from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=64)
    url = models.CharField(max_length=64, default='')
    description = models.TextField(max_length=1024)
    image = models.FileField(upload_to='categories_img/')


class Compensation(models.Model):
    name = models.CharField(max_length=64)
    url = models.CharField(max_length=64, default='')
    money = models.TextField(max_length=1024)
    requirements = models.TextField(max_length=2048, blank=True)
    additional_info = models.TextField(max_length=2048, blank=True)
    once_a_term = models.BooleanField(default=False)
    category = models.ForeignKey('Category', related_name='compensation', on_delete=models.CASCADE)
    category_url = models.CharField(max_length=64, default='')


class WhiteListEmail(models.Model):
    email = models.EmailField()
