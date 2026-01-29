from django.urls import path
from . import views

urlpatterns = [
    path('api/productos/destacados/', views.productos_destacados),
]
