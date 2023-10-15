from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from app import views


router = routers.DefaultRouter()
router.register(r'archivos/', views.ArchivosViews, 'archivos')
router.register(r'datos/', views.DatosViews, 'datos')


# GET, POST, PUT, DELETE y documentacion
urlpatterns = [
    path('api/v1/',include(router.urls)),
    path("docs/", include_docs_urls(title="API"))
]
