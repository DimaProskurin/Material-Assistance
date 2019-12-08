from .models import Category, Compensation, WhiteListEmail
from django.contrib import admin
from rest_framework.authtoken.admin import TokenAdmin


admin.site.register(Category)
admin.site.register(Compensation)
admin.site.register(WhiteListEmail)

TokenAdmin.raw_id_fields = ['user']