from django.urls import path
from .views import ApplyView, DashboardView

urlpatterns = [
    path('apply/', ApplyView.as_view()),
    path('dashboard/', DashboardView.as_view()),
]

from django.urls import path
from . import views

urlpatterns = [
    path('upload_vacancy_pdf/', views.upload_vacancy_pdf, name='upload_pdf'),
    path('analyze/', views.analyze, name='analyze'),
    path('chat/', views.chat_interview, name='chat'),
    "ffgfgfg",
]