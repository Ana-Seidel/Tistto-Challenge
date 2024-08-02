from tasks.views import UserRegister
from django.urls import path
from django.contrib import admin

urlpatterns = [
    path('api/register/', UserRegister.as_view(), name='register'),
    path('admin/', admin.site.urls),
]
