from django.db import models

# Create your models here.
from django.db import models

class Producto(models.Model):
    titulo = models.CharField(max_length=200)
    descripcion = models.TextField(blank=True)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.PositiveIntegerField(default=0)
    imagen = models.ImageField(upload_to='productos/')
    activo = models.BooleanField(default=True)
    creado = models.DateTimeField(auto_now_add=True)
    destacado = models.BooleanField(default=False) 

    def __str__(self):
        return self.titulo
