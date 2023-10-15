from rest_framework import viewsets
from .serializer import ArchivosSerializer, DatosSerializer
from .models import Archivos, Datos
# Create your views here.

class ArchivosViews(viewsets.ModelViewSet):
    serializer_class = ArchivosSerializer
    queryset = Archivos.objects.all()


class DatosViews(viewsets.ModelViewSet):
    serializer_class = DatosSerializer
    queryset = Datos.objects.all()
