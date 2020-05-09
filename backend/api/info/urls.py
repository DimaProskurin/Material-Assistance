from django.urls import path
from .views import CategoriesView, CompensationsView, HistoryView, StudentView

app_name = "info"

urlpatterns = [
    path('categories/', CategoriesView.as_view()),
    path('compensations/', CompensationsView.as_view()),
    path('history/', HistoryView.as_view()),
    path('student/', StudentView.as_view())
]
