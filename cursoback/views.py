from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth import login as login_django
from django.contrib.auth import authenticate
from django.shortcuts import redirect




def index (request):
    #return HttpResponse('texto')
    return render(request,'index.html',{
        
        'titulo':'pagina1',
        
        'lista1':[
            {'diccionario':'Libro python', 'Precio':500,'unidadesdisponibles':True},
            {'diccionario':'Libro mongo', 'Precio':200,'unidadesdisponibles':False},
            {'diccionario':'Libro c', 'Precio':10,'unidadesdisponibles':True},
        ]
    })
def error(request):
    return render(request,'errores/error.html',{
        
    })
    
def login(request):
    print(request)
    if request.method=='POST':
            username=request.POST.get('username')
            password=request.POST.get('password')
            user=authenticate(username=username,password=password)
            if user:
                login_django(request,user)
                return redirect('index')
            else:
            
                return redirect('error')
    
    return render(request,'misUsuarios/login.html',{
        
  })
def login2(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)
        if user:
            login_django(request, user)
            return redirect('espacio')
        else:
            return redirect('error')

    return render(request, 'login2.html')
def espacio(request):
    
    return render(request,'espacio.html',{
        
    })
    




