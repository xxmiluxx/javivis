from django.contrib import admin
from django.urls import path
from . import views



urlpatterns = [
    path('login/', views.login, name="login"),
    path('', views.index, name="index"),
    path('content/', views.content, name="content"),
    path('admin/', admin.site.urls),
    path('cambiar_idioma/', views.cambiar_idioma, name='cambiar_idioma'),
]
