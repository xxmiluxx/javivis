function crearCarrusel(seccion) {
    const mainContent = document.getElementById('main-content');
    let carruselHtml = '';
    if (seccion === 'optica') {
        carruselHtml = `
            <div id="miCarrusel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#miCarrusel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#miCarrusel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <a href="${urls.content}" 
                        onclick="guardarDatos(
                            'Óptica Geométrica', 
                            'OptGeo.png', 
                            'La óptica geométrica es la rama de la óptica que se ocupa del estudio de la luz como rayos. Se enfoca en el comportamiento de la luz en situaciones donde las longitudes de onda son mucho más pequeñas que los objetos que encuentra. Esta disciplina se basa en principios como la reflexión y la refracción, y se utiliza en el diseño de lentes, espejos y sistemas ópticos en dispositivos como cámaras y microscopios.', 
                            'Lentes personalizadas: Desarrollo de lentes con propiedades ópticas específicas para aplicaciones como la corrección visual y la fotografía.', 
                            'México ha participado en el diseño y construcción de telescopios de gran tamaño, como el Gran Telescopio Milimétrico (GTM).', 
                            'Óptica cuántica: Exploración de las interfaces entre la óptica clásica y la cuántica para el desarrollo de nuevas tecnologías.'
                        )">
                            <img src="../static/images/OptGeo.png" class="d-block w-100" alt="Óptica Geométrica">
                        </a>
                        <div class="carousel-caption d-none d-md-block">
                            <p>
                            La óptica geométrica es la rama de la óptica que se ocupa del estudio de la luz como rayos. 
                            Se enfoca en el comportamiento de la luz en situaciones donde las longitudes de onda son mucho más pequeñas 
                            que los objetos que encuentra. Esta disciplina se basa en principios como la reflexión y la refracción,
                            y se utiliza en el diseño de lentes, espejos y sistemas ópticos en dispositivos como cámaras y microscopios.
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <a href="${urls.content}" 
                        onclick="guardarDatos(
                            'Óptica Física', 
                            'OptFis.jpg', 
                            'La óptica física es la parte de la óptica que estudia la naturaleza de la luz y su comportamiento a nivel ondulatorio. Esta rama se centra en fenómenos como la interferencia, la difracción y la polarización. A diferencia de la óptica geométrica, que trata la luz como rayos, la óptica física considera la luz como una onda y utiliza teorías matemáticas para explicar su comportamiento. Es fundamental en aplicaciones como la fibra óptica y la espectroscopía.', 
                            'Materiales fotónicos: Desarrollo de materiales con propiedades ópticas controladas a nivel nanométrico para aplicaciones en comunicaciones, sensores y dispositivos optoelectrónicos.', 
                            'Desarrollo de láseres de alta potencia: México ha logrado desarrollar láseres de alta potencia para aplicaciones en la industria, la medicina y la investigación.', 
                            'Óptica cuántica en sistemas complejos: Estudio de la interacción entre la luz y sistemas complejos como moléculas, materiales nanoestructurados y átomos fríos.'
                        )">
                            <img src="../static/images/OptFis.jpg" class="d-block w-100" alt="Óptica Avanzada">
                        </a>
                        <div class="carousel-caption d-none d-md-block">
                            <p>
                            La óptica física es la parte de la óptica que estudia la naturaleza de la luz y su comportamiento a nivel ondulatorio. 
                            Esta rama se centra en fenómenos como la interferencia, la difracción y la polarización. A diferencia de la óptica geométrica, 
                            que trata la luz como rayos, la óptica física considera la luz como una onda y utiliza teorías matemáticas para explicar su comportamiento. 
                            Es fundamental en aplicaciones como la fibra óptica y la espectroscopía.
                            </p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#miCarrusel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Anterior</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#miCarrusel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Siguiente</span>
                </button>
            </div>
        `;
    } else if (seccion === 'aeronautica') {
        carruselHtml = `
            <div id="miCarrusel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#miCarrusel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#miCarrusel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <a href="${urls.content}" 
                        onclick="guardarDatos(
                            'Industria Aeroespacial Mexicana', 
                            'aeroEspa.jpeg', 
                            'La industria aeroespacial mexicana ha experimentado un crecimiento significativo en las últimas décadas, posicionándose como un actor clave en la región. Destaca por su participación en la fabricación de componentes para aeronaves, satélites y cohetes, así como en el desarrollo de tecnologías espaciales. El país cuenta con una base industrial sólida y una mano de obra calificada, lo que la convierte en un destino atractivo para las inversiones extranjeras.', 
                            'Fabricación de componentes aeronáuticos: Producción de partes y componentes para aviones comerciales y militares.',
                            'Desarrollo de satélites: Diseño y construcción de satélites para telecomunicaciones, observación de la Tierra y aplicaciones científicas.',
                            'Participación en misiones espaciales internacionales: Colaboración con agencias espaciales internacionales en proyectos de exploración espacial.'
                        )">
                        <img src="../static/images/aeroEspa.jpeg" class="d-block w-100" alt="Industria Aeroespacial Mexicana">
                        </a>
                        <div class="carousel-caption d-none d-md-block">
                            <p>
                            La ingeniería aeroespacial es una disciplina que combina la ingeniería aeronáutica y la ingeniería espacial. 
                            Se enfoca en el diseño, desarrollo y producción de aeronaves, naves espaciales y sistemas asociados. 
                            Esta rama de la ingeniería aborda desafíos complejos relacionados con la aerodinámica, la propulsión y los materiales, 
                            y juega un papel crucial en la exploración espacial, la defensa y la aviación comercial.
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <a href="${urls.content}" 
                        onclick="guardarDatos(
                            'Aeronáutica Militar Mexicana', 
                            'aeromil.jpeg', 
                            'La aeronáutica militar mexicana ha desempeñado un papel fundamental en la defensa y seguridad nacional del país. Con una historia que se remonta a la Revolución Mexicana, la Fuerza Aérea Mexicana ha evolucionado para convertirse en una fuerza moderna y bien equipada, capaz de realizar diversas misiones, desde la defensa aérea hasta el apoyo humanitario.', 
                            'Historia de la Fuerza Aérea Mexicana: Desde sus orígenes hasta la actualidad.',
                            'Aviones militares: Descripción de los principales tipos de aviones utilizados por la Fuerza Aérea Mexicana, como cazas, bombarderos, helicópteros y aviones de transporte.',
                            'Misiones y operaciones: Ejemplos de misiones militares y operaciones humanitarias realizadas por la Fuerza Aérea Mexicana.'
                        )">
                        <img src="../static/images/aeromil.jpeg" class="d-block w-100" alt="Aeronáutica Militar Mexicana">
                        </a>
                        <div class="carousel-caption d-none d-md-block">
                            <p>
                            La aeronáutica militar se refiere al uso de aeronaves para operaciones militares, incluyendo combate, 
                            transporte de tropas y logística. Esta área abarca el diseño y desarrollo de aviones y drones militares, 
                            así como el entrenamiento de personal en tácticas de vuelo y mantenimiento. La aeronáutica militar es 
                            fundamental para la defensa de un país y se centra en la innovación tecnológica y la mejora de la eficacia 
                            en el campo de batalla.
                            </p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#miCarrusel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Anterior</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#miCarrusel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Siguiente</span>
                </button>
            </div>
        `;
    } else if (seccion === 'espacio') {
        carruselHtml = `
            <div id="miCarrusel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#miCarrusel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <a href="${urls.content}" 
                        onclick="guardarDatos(
                            'Astrofísica Mexicana', 
                            'astrof.jpeg', 
                            'La astrofísica mexicana ha experimentado un notable crecimiento en las últimas décadas, con importantes contribuciones a la investigación internacional. Los astrónomos mexicanos estudian una amplia variedad de objetos y fenómenos celestes, desde estrellas y planetas hasta galaxias y agujeros negros.', 
                            'Áreas de investigación: Descripción de las principales áreas de investigación en astrofísica en México, como astrofísica estelar, astrofísica galáctica, cosmología y astrofísica de altas energías.',
                            'Observatorios y telescopios: Presentación de los principales observatorios y telescopios ubicados en México, así como su importancia para la investigación astronómica.',
                            'Investigadores destacados: Mención de algunos de los astrónomos mexicanos más reconocidos y sus contribuciones a la ciencia.'
                        )">
                        <img src="../static/images/astrof.jpeg" class="d-block w-100" alt="Astrofísica Mexicana">
                        </a>
                        <div class="carousel-caption d-none d-md-block">
                            <p>
                            La astrofísica es la rama de la astronomía que aplica principios físicos para entender el universo. 
                            Se centra en el estudio de cuerpos celestes, como estrellas, planetas y galaxias, y busca comprender 
                            fenómenos como la gravedad, la radiación y la evolución del cosmos. La astrofísica combina teorías científicas 
                            con observaciones astronómicas para desentrañar los misterios del universo, desde la formación de estrellas 
                            hasta la naturaleza de los agujeros negros.
                            </p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#miCarrusel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Anterior</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#miCarrusel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Siguiente</span>
                </button>
            </div>
        `;
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
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

