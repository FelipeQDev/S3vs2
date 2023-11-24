from rest_framework import serializers
from .models import Archivos, Datos

''' Metodo para deserealizar para convertir datos complejos y para que django rest los represente en archivos JSON'''
class ArchivosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Archivos
        fields = '__all__'

class DatosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Datos
        fields = '__all__'