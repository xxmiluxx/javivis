from django.http import JsonResponse
from django.shortcuts import render
from django.contrib.auth import login as login_django
from django.contrib.auth import authenticate
from django.shortcuts import redirect
import json


def index(request):
    return render(request,"index.html")

def content(request):
    if request.method == "POST":
        data = json.loads(request.body)
        titulo = data.get('titulo')  
        imagen = data.get('imagen')  
        descripcion = data.get('descripcion')
        temas_investigacion = data.get('temasInvestigacion')
        logros = data.get('logros')
        trabajo_futuro = data.get('trabajoFuturo')

        request.session.clear()  

        request.session['titulo'] = titulo
        request.session['imagenCargada'] = imagen
        request.session['descripcion'] = descripcion
        request.session['temasInvestigacion'] = temas_investigacion
        request.session['logros'] = logros
        request.session['trabajoFuturo'] = trabajo_futuro

        return redirect('content')
    
    titulo = request.session.get('titulo', '')
    imagen = request.session.get('imagenCargada', '')
    descripcion = request.session.get('descripcion', '')
    temas_investigacion = request.session.get('temasInvestigacion', '')
    logros = request.session.get('logros', '')
    trabajo_futuro = request.session.get('trabajoFuturo', '')

    return render(request, "content.html", {
        'titulo': titulo,
        'imagenCargada': imagen,
        'descripcion': descripcion,
        'temasInvestigacion': temas_investigacion,
        'logros': logros,
        'trabajoFuturo': trabajo_futuro
    })

def login(request):
    if request.method =='POST':
        username= request.POST.get('username')
        password= request.POST.get('password')
        user= authenticate(username=username,password=password)
        if user:
            login_django(request,user)
            print("usuario valido")
            return redirect('index')
        else:
            print("usuario no valido")
        print(username,password)
    return render(request,'Especialidades/login.html',{})

def cambiar_idioma(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        idioma = data.get('idioma')
        
        if idioma:
            request.session['idioma'] = idioma  # Guardar el idioma en la sesión
            return JsonResponse({'message': 'Idioma actualizado', 'idioma': idioma})
        
    return JsonResponse({'error': 'Petición inválida'}, status=400)
