from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import Vacancy, Application
from .serializers import ApplicationSerializer, VacancySerializer
from .services import ask_ollama_to_screen