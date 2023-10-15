from django.db import models

# Create your models here.
class Datos(models.Model):
    nombre = models.CharField(max_length=200)
    descripcion = models.TextField(blank=True)

    def __str__(self):
        return self.nombre
        

class Archivos(models.Model):
    nombre = models.CharField(max_length=100)
    archivo = models.FileField(upload_to='media/')

    def __str__(self):
        return self.nombre
        