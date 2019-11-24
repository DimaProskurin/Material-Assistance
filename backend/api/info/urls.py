from django.urls import path
from .views import CategoriesView, CompensationsView

app_name = "info"

urlpatterns = [
    path('categories/', CategoriesView.as_view()),
    path('compensations/', CompensationsView.as_view())
]