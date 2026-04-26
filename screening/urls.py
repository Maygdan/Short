from django.urls import path
from .views import ApplyView, DashboardView

urlpatterns = [
    path('apply/', ApplyView.as_view()),
    path('dashboard/', DashboardView.as_view()),
]