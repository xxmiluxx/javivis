function carruselOpticaEsp(){
    carruselHtml = `
    <div class="container">
        <div id="miCarrusel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#miCarrusel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#miCarrusel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="row mb-3">
                        <div class="col-12">
                            <h3 class="text-center text-white">Óptica Geométrica</h3>
                            <p class="text-center text-white">
                                La óptica geométrica es la rama de la óptica que se ocupa del estudio de la luz como rayos. 
                                Se enfoca en el comportamiento de la luz en situaciones donde las longitudes de onda son mucho más pequeñas 
                                que los objetos que encuentra. Esta disciplina se basa en principios como la reflexión y la refracción,
                                y se utiliza en el diseño de lentes, espejos y sistemas ópticos en dispositivos como cámaras y microscopios.
                            </p>
                        </div>
                    </div>
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
                </div>
                <div class="carousel-item">
                    <div class="row mb-3">
                        <div class="col-12">
                            <h3 class="text-center text-white">Óptica Física</h3>
                            <p class="text-center text-white">
                                La óptica física es la parte de la óptica que estudia la naturaleza de la luz y su comportamiento a nivel ondulatorio. 
                                Esta rama se centra en fenómenos como la interferencia, la difracción y la polarización. A diferencia de la óptica geométrica, 
                                que trata la luz como rayos, la óptica física considera la luz como una onda y utiliza teorías matemáticas para explicar su comportamiento. 
                                Es fundamental en aplicaciones como la fibra óptica y la espectroscopía.
                            </p>
                        </div>
                    </div>
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
    </div>
    `;
}

function carruselAeronauticaEsp(){
    carruselHtml = `
    <div class="container">
        <div id="miCarrusel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#miCarrusel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#miCarrusel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="row mb-3">
                        <div class="col-12">
                            <h3 class="text-center text-white">Industria Aeroespacial Mexicana</h3>
                            <p class="text-center text-white">
                                La ingeniería aeroespacial es una disciplina que combina la ingeniería aeronáutica y la ingeniería espacial. 
                                Se enfoca en el diseño, desarrollo y producción de aeronaves, naves espaciales y sistemas asociados. 
                                Esta rama de la ingeniería aborda desafíos complejos relacionados con la aerodinámica, la propulsión y los materiales, 
                                y juega un papel crucial en la exploración espacial, la defensa y la aviación comercial.
                            </p>
                        </div>
                    </div>
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
                </div>
                <div class="carousel-item">
                    <div class="row mb-3">
                        <div class="col-12">
                            <h3 class="text-center text-white">Aeronáutica Militar Mexicana</h3>
                            <p class="text-center text-white">
                                La aeronáutica militar se refiere al uso de aeronaves para operaciones militares, incluyendo combate, 
                                transporte de tropas y logística. Esta área abarca el diseño y desarrollo de aviones y drones militares, 
                                así como el entrenamiento de personal en tácticas de vuelo y mantenimiento. La aeronáutica militar es 
                                fundamental para la defensa de un país y se centra en la innovación tecnológica y la mejora de la eficacia 
                                en el campo de batalla.
                            </p>
                        </div>
                    </div>
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
    </div>
    `;
}

function carruselEspacioEsp(){
    carruselHtml = `
    <div id="miCarrusel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#miCarrusel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                                <div class="row mb-3">
                        <div class="col-12">
                            <h3 class="text-center text-white">Astrofísica</h3>
                            <p class="text-center text-white">
                                La astrofísica es la rama de la astronomía que aplica principios físicos para entender el universo. 
                                Se centra en el estudio de cuerpos celestes, como estrellas, planetas y galaxias, y busca comprender 
                                fenómenos como la gravedad, la radiación y la evolución del cosmos. La astrofísica combina teorías científicas 
                                con observaciones astronómicas para desentrañar los misterios del universo, desde la formación de estrellas 
                                hasta la naturaleza de los agujeros negros.
                            </p>
                        </div>
                    </div>
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
function carruselOpticaEn(){
    carruselHtml = `
    <div class="container">
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="row mb-3">
                        <div class="col-12">
                            <h3 class="text-center text-white">Geometric Optics</h3>
                            <p class="text-center text-white">
                                Geometric optics is the branch of optics that deals with the study of light as rays. 
                                It focuses on the behavior of light in situations where the wavelengths are much smaller 
                                than the objects it encounters. This discipline is based on principles such as reflection and refraction,
                                and is used in the design of lenses, mirrors, and optical systems in devices like cameras and microscopes.
                            </p>
                        </div>
                    </div>
                    <a href="${urls.content}" 
                    onclick="guardarDatos(
                        'Geometric Optics', 
                        'OptGeo.png', 
                        'Geometric optics is the branch of optics that deals with the study of light as rays. It focuses on the behavior of light in situations where the wavelengths are much smaller than the objects it encounters. This discipline is based on principles such as reflection and refraction, and is used in the design of lenses, mirrors, and optical systems in devices like cameras and microscopes.', 
                        'Customized lenses: Development of lenses with specific optical properties for applications such as vision correction and photography.', 
                        'Mexico has participated in the design and construction of large telescopes, such as the Gran Telescopio Milimétrico (GTM).', 
                        'Quantum optics: Exploration of the interfaces between classical and quantum optics for the development of new technologies.'
                    )">
                        <img src="../static/images/OptGeo.png" class="d-block w-100" alt="Geometric Optics">
                    </a>
                </div>
                <div class="carousel-item">
                    <div class="row mb-3">
                        <div class="col-12">
                            <h3 class="text-center text-white">Physical Optics</h3>
                            <p class="text-center text-white">
                                Physical optics is the part of optics that studies the nature of light and its behavior at the wave level. 
                                This branch focuses on phenomena such as interference, diffraction, and polarization. Unlike geometric optics, 
                                which treats light as rays, physical optics considers light as a wave and uses mathematical theories to explain its behavior. 
                                It is fundamental in applications such as optical fibers and spectroscopy.
                            </p>
                        </div>
                    </div>
                    <a href="${urls.content}" 
                    onclick="guardarDatos(
                        'Physical Optics', 
                        'OptFis.jpg', 
                        'Physical optics is the part of optics that studies the nature of light and its behavior at the wave level. This branch focuses on phenomena such as interference, diffraction, and polarization. Unlike geometric optics, which treats light as rays, physical optics considers light as a wave and uses mathematical theories to explain its behavior. It is fundamental in applications such as optical fibers and spectroscopy.', 
                        'Photonic materials: Development of materials with controlled optical properties at the nanoscale for applications in communications, sensors, and optoelectronic devices.', 
                        'Development of high-power lasers: Mexico has managed to develop high-power lasers for applications in industry, medicine, and research.', 
                        'Quantum optics in complex systems: Study of the interaction between light and complex systems such as molecules, nanostructured materials, and cold atoms.'
                    )">
                        <img src="../static/images/OptFis.jpg" class="d-block w-100" alt="Advanced Optics">
                    </a>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    `;
}

function carruselAeronauticaEn(){
    carruselHtml = `
    <div class="container">
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="row mb-3">
                        <div class="col-12">
                            <h3 class="text-center text-white">Mexican Aerospace Industry</h3>
                            <p class="text-center text-white">
                                Aerospace engineering is a discipline that combines aeronautical engineering and space engineering. 
                                It focuses on the design, development, and production of aircraft, spacecraft, and associated systems. 
                                This branch of engineering addresses complex challenges related to aerodynamics, propulsion, and materials, 
                                and plays a crucial role in space exploration, defense, and commercial aviation.
                            </p>
                        </div>
                    </div>
                    <a href="${urls.content}" 
                    onclick="guardarDatos(
                        'Mexican Aerospace Industry', 
                        'aeroEspa.jpeg', 
                        'The Mexican aerospace industry has experienced significant growth in recent decades, positioning itself as a key player in the region. It is notable for its participation in the manufacture of components for aircraft, satellites, and rockets, as well as in the development of space technologies. The country has a solid industrial base and a skilled workforce, making it an attractive destination for foreign investment.', 
                        'Manufacture of aeronautical components: Production of parts and components for commercial and military aircraft.',
                        'Satellite development: Design and construction of satellites for telecommunications, Earth observation, and scientific applications.',
                        'Participation in international space missions: Collaboration with international space agencies on space exploration projects.'
                    )">
                        <img src="../static/images/aeroEspa.jpeg" class="d-block w-100" alt="Mexican Aerospace Industry">
                    </a>
                </div>
                <div class="carousel-item">
                    <div class="row mb-3">
                        <div class="col-12">
                            <h3 class="text-center text-white">Mexican Military Aviation</h3>
                            <p class="text-center text-white">
                                Military aviation refers to the use of aircraft for military operations, including combat, 
                                troop transport, and logistics. This area encompasses the design and development of military aircraft and drones, 
                                as well as the training of personnel in flight tactics and maintenance. Military aviation is 
                                fundamental to a country's defense and focuses on technological innovation and improving effectiveness 
                                in the battlefield.
                            </p>
                        </div>
                    </div>
                    <a href="${urls.content}" 
                    onclick="guardarDatos(
                        'Mexican Military Aviation', 
                        'aeromil.jpeg', 
                        'Mexican military aviation has played a fundamental role in the defense and national security of the country. With a history dating back to the Mexican Revolution, the Mexican Air Force has evolved to become a modern and well-equipped force, capable of carrying out various missions, from air defense to humanitarian support.', 
                        'History of the Mexican Air Force: From its origins to the present.',
                        'Military aircraft: Description of the main types of aircraft used by the Mexican Air Force, such as fighters, bombers, helicopters, and transport aircraft.',
                        'Missions and operations: Examples of military missions and humanitarian operations carried out by the Mexican Air Force.'
                    )">
                        <img src="../static/images/aeromil.jpeg" class="d-block w-100" alt="Mexican Military Aviation">
                    </a>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    `;
}

function carruselEspacioEn(){
    carruselHtml = `
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="row mb-3">
                    <div class="col-12">
                        <h3 class="text-center text-white">Astrophysics</h3>
                        <p class="text-center text-white">
                            Astrophysics is the branch of astronomy that applies physical principles to understand the universe. 
                            It focuses on the study of celestial bodies, such as stars, planets, and galaxies, and seeks to understand 
                            phenomena like gravity, radiation, and the evolution of the cosmos. Astrophysics combines scientific theories 
                            with astronomical observations to unravel the mysteries of the universe, from the formation of stars 
                            to the nature of black holes.
                        </p>
                    </div>
                </div>
                <a href="${urls.content}" 
                onclick="guardarDatos(
                    'Mexican Astrophysics', 
                    'astrof.jpeg', 
                    'Mexican astrophysics has experienced significant growth in recent decades, with important contributions to international research. Mexican astronomers study a wide variety of celestial objects and phenomena, from stars and planets to galaxies and black holes.', 
                    'Research areas: Description of the main research areas in astrophysics in Mexico, such as stellar astrophysics, galactic astrophysics, cosmology, and high-energy astrophysics.',
                    'Observatories and telescopes: Presentation of the main observatories and telescopes located in Mexico, as well as their importance for astronomical research.',
                    'Notable researchers: Mention of some of the most recognized Mexican astronomers and their contributions to science.'
                )">
                <img src="../static/images/astrof.jpeg" class="d-block w-100" alt="Mexican Astrophysics">
                </a>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    `;
}
