from django.urls import path
from .views import ApplicationView

app_name = "application"

urlpatterns = [
    path('application/', ApplicationView.as_view()),
]
