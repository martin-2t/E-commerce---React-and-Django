from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Producto
from .serializers import ProductoSerializer

# Create your views here.
@api_view(['GET'])
def productos_destacados(request):
    productos = Producto.objects.filter(activo=True, destacado=True).order_by('-creado')[:9]

    serializer = ProductoSerializer(productos, many=True)
    return Response(serializer.data)
