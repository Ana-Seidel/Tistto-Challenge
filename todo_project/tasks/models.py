from django.db import models


class Users(models.Model):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    password = models.CharField(max_length=255)  # Em produção, você deve usar um hash de senha
    description = models.TextField(blank=True)

    def __str__(self):
        return f"{self.name} {self.last_name}"