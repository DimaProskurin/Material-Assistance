from .models import Category, Compensation
from django.contrib import admin
from rest_framework.authtoken.admin import TokenAdmin



admin.site.register(Category)
admin.site.register(Compensation)

TokenAdmin.raw_id_fields = ['user']