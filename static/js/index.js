let carruselHtml = '';

function crearCarrusel(seccion) {
    const mainContent = document.getElementById('main-content');
    if (seccion === 'optica') {
        if (idioma === 'es') {
            carruselOpticaEsp();
        }
        else if (idioma === 'en') {
            carruselOpticaEn();
        }
    } else if (seccion === 'aeronautica') {
        if (idioma === 'es') {
            carruselAeronauticaEsp();
        }
        else if (idioma === 'en') {
            carruselAeronauticaEn();
        }
    } else if (seccion === 'espacio') {
        if (idioma === 'es') {
            carruselEspacioEsp();
        }
        else if (idioma === 'en') {
            carruselEspacioEn();
        }
    }
    mainContent.innerHTML = carruselHtml;
}
function guardarDatos(titulo, nombreImagen, descripcion, temasInvestigacion, logros, trabajoFuturo) {
    const data = {
        titulo: titulo,
        imagen: nombreImagen,
        descripcion: descripcion,
        temasInvestigacion: temasInvestigacion,
        logros: logros,
        trabajoFuturo: trabajoFuturo
    };
    fetch(urls.content, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie('csrftoken')
        },
        body: JSON.stringify(data)
    })
        .then(response => response.ok ? response.json() : Promise.reject('Error'))
        .then(data => console.log('Respuesta del servidor:', data))
        .catch(error => console.error('Error:', error));
}
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
