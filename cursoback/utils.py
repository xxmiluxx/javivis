import json
from google.cloud import translate_v2 as translate
from django.http import JsonResponse

# Inicializar el cliente de la API
translate_client = translate.Client()

def translate_text(request):
    if request.method == "POST":
        data = json.loads(request.body)
        text = data.get('text')
        target_language = data.get('target_language', 'en')  # Idioma destino, por defecto inglés

        # Llamar a la API de Google Translate para traducir el texto
        translation = translate_client.translate(text, target_language=target_language)

        return JsonResponse({'translated_text': translation['translatedText']})
    return JsonResponse({'error': 'Invalid request'}, status=400)
