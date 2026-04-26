from django.db import models

from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    ROLE_CHOICES = (
        ('recruiter', 'Рекрутер'),
        ('candidate', 'Кандидат'),
    )
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='candidate')
    phone = models.CharField(max_length=20, blank=True, null=True)
    company = models.CharField(max_length=100, default='X5 Tech')
