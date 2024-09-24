document.addEventListener('DOMContentLoaded', function () {
    const btnEng = document.getElementById('btn-eng');
    const btnEsp = document.getElementById('btn-esp');

    const labelUsuario = document.getElementById('label-usuario');
    const labelContrasena = document.getElementById('label-contrasena');
    const submitBtn = document.getElementById('submit-btn');
    const registerText = document.getElementById('register-text');
    const registerLink = document.getElementById('register-link');

    const textosEsp = {
        usuario: "Usuario",
        contrasena: "Contraseña",
        iniciarSesion: "Iniciar sesión",
        eresNuevo: "¿Eres nuevo?",
        registrateAqui: "Regístrate aquí"
    };

    const textosEng = {
        usuario: "Username",
        contrasena: "Password",
        iniciarSesion: "Login",
        eresNuevo: "New here?",
        registrateAqui: "Sign up here"
    };

    function cambiarIdioma(idioma) {
        fetch('/cambiar_idioma/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')  // Asegúrate de incluir el token CSRF
            },
            body: JSON.stringify({ idioma: idioma })
        }).then(response => {
            if (response.ok) {
                response.json().then(data => {
                    if (idioma === 'es') {
                        labelUsuario.textContent = textosEsp.usuario;
                        labelContrasena.textContent = textosEsp.contrasena;
                        submitBtn.textContent = textosEsp.iniciarSesion;
                        registerText.textContent = textosEsp.eresNuevo;
                        registerLink.textContent = textosEsp.registrateAqui;
                        btnEsp.classList.add('active');
                        btnEng.classList.remove('active');
                    } else if (idioma === 'en') {
                        labelUsuario.textContent = textosEng.usuario;
                        labelContrasena.textContent = textosEng.contrasena;
                        submitBtn.textContent = textosEng.iniciarSesion;
                        registerText.textContent = textosEng.eresNuevo;
                        registerLink.textContent = textosEng.registrateAqui;
                        btnEng.classList.add('active');
                        btnEsp.classList.remove('active');
                    }
                });
            }
        });
    }

    btnEng.addEventListener('click', function () {
        cambiarIdioma('en');
    });

    btnEsp.addEventListener('click', function () {
        cambiarIdioma('es');
    });

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
});
