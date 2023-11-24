from rest_framework import viewsets
from .serializer import ArchivosSerializer, DatosSerializer
from .models import Archivos, Datos
# Create your views here.

''' Obtencion de los datos del Backend junto con la Deserealizacion de los datos con Serialzier '''
class ArchivosViews(viewsets.ModelViewSet):
    queryset = Archivos.objects.all()
    serializer_class = ArchivosSerializer
    
    def perform_create(self, serializer):
        serializer.save(archivo=self.request.data.get('archivo'))
        


class DatosViews(viewsets.ModelViewSet):
    queryset = Datos.objects.all()
    serializer_class = DatosSerializer
