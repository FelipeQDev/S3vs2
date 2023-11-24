from django.contrib import admin
from .models import Datos, Archivos
# Register your models here.

''' Registra tus tablas de tu Backend para poder manipularlas desde tu sitio /admin/ previamente creado con los comandos de Django '''
admin.site.register(Datos)
admin.site.register(Archivos)
