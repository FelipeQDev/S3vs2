from rest_framework import serializers
from .models import Archivos, Datos

class ArchivosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Archivos
        fields = '__all__'

class DatosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Datos
        fields = '__all__'