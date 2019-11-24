from django.urls import path
from .views import CategoriesView

app_name = "info"

urlpatterns = [
    path('categories/', CategoriesView.as_view()),
]