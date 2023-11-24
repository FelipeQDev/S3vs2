from django.db import models

# Create your models here.
''' Modelado de BD de Restframework '''
class Datos(models.Model):
    nombre = models.CharField(max_length=200)
    descripcion = models.TextField(blank=True)

    def __str__(self):
        return self.nombre
        
''' Aqui se crea la tabla Archivos con sus Filas, muy importante que el campo archivo, como parametro tiene que pasarsele despues de upload_to el 'media/', para así poder crear la carpeta en el Bucket de S3 '''
class Archivos(models.Model):
    nombre = models.CharField(max_length=100)
    archivo = models.FileField(upload_to='media/')

    def __str__(self):
        return self.nombre
        