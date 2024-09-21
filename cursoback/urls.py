
from django.contrib import admin
from django.urls import path
from . import views



urlpatterns = [
   path('',views.index, name='index'),
   path('admin/', admin.site.urls),
    path('misUsuarios/login',views.login, name='login'),
    path('errores/error',views.error, name='error'),
    path('login2/',views.login2, name='login2'),
    path('espacio/',views.espacio, name='espacio'),
]
