from .models import Category, Compensation, ValidatedStudent, Payment
from django.contrib import admin
from rest_framework.authtoken.admin import TokenAdmin


admin.site.register(Category)
admin.site.register(Compensation)
admin.site.register(ValidatedStudent)
admin.site.register(Payment)


TokenAdmin.raw_id_fields = ['user']
