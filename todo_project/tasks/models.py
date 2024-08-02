from django.db import models


class Users(models.Model):
    email = models.EmailField(unique=True)
    nome = models.CharField(max_length=255)
    sobrenome = models.CharField(max_length=255)
    password = models.CharField(max_length=255)  
    descricao = models.TextField(blank=True)

    def __str__(self):
        return f"{self.name} {self.last_name}"