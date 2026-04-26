from django.db import models

from django.db import models
from django.conf import settings

class Vacancy(models.Model):
    title = models.CharField(max_length=255, verbose_name="Название")
    description = models.TextField(verbose_name="Требования (для AI)")
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Application(models.Model):
    vacancy = models.ForeignKey(Vacancy, on_delete=models.CASCADE, related_name='apps')
    full_name = models.CharField(max_length=255)
    resume_text = models.TextField() # То, что прислал кандидат
    
    # Результаты от Ollama
    ai_score = models.IntegerField(default=0)
    ai_feedback = models.TextField(blank=True)
    status = models.CharField(max_length=20, default='new') # new, rejected, interview

    class Meta:
        ordering = ['-ai_score'] # Сортировка: лучшие сверху
