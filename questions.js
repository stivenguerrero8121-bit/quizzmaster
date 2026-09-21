const QUESTIONS = [
  {
    id: 1,
    pregunta: "¿Cuál es el planeta más grande del sistema solar?",
    categoria: "Ciencia",
    dificultad: "Fácil",
    opciones: ["Marte", "Júpiter", "Saturno", "Neptuno"],
    respuestaCorrecta: "Júpiter",
    explicacion: "Júpiter es el planeta de mayor tamaño del sistema solar y es un gigante gaseoso."
  },
  {
    id: 2,
    pregunta: "¿Qué órgano bombea la sangre por el cuerpo humano?",
    categoria: "Ciencia",
    dificultad: "Fácil",
    opciones: ["Pulmón", "Hígado", "Corazón", "Riñón"],
    respuestaCorrecta: "Corazón",
    explicacion: "El corazón funciona como una bomba muscular que impulsa la sangre por la circulación."
  },
  {
    id: 3,
    pregunta: "¿Qué gas necesitan las plantas para realizar la fotosíntesis?",
    categoria: "Ciencia",
    dificultad: "Fácil",
    opciones: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Helio"],
    respuestaCorrecta: "Dióxido de carbono",
    explicacion: "Las plantas utilizan dióxido de carbono, agua y luz para producir materia orgánica mediante la fotosíntesis."
  },
  {
    id: 4,
    pregunta: "¿Cuál es la unidad básica de la vida?",
    categoria: "Ciencia",
    dificultad: "Fácil",
    opciones: ["Átomo", "Célula", "Tejido", "Órgano"],
    respuestaCorrecta: "Célula",
    explicacion: "La célula es la unidad estructural y funcional básica de los seres vivos."
  },
  {
    id: 5,
    pregunta: "¿Qué fuerza mantiene a los planetas en órbita alrededor del Sol?",
    categoria: "Ciencia",
    dificultad: "Media",
    opciones: ["Fricción", "Electricidad", "Gravedad", "Magnetismo"],
    respuestaCorrecta: "Gravedad",
    explicacion: "La gravedad del Sol mantiene a los planetas ligados a sus órbitas."
  },
  {
    id: 6,
    pregunta: "¿En qué año llegó Cristóbal Colón a América?",
    categoria: "Historia",
    dificultad: "Fácil",
    opciones: ["1492", "1519", "1453", "1607"],
    respuestaCorrecta: "1492",
    explicacion: "El primer viaje de Colón llegó al Caribe en 1492."
  },
  {
    id: 7,
    pregunta: "¿Cuál fue una de las principales ciudades del Imperio romano?",
    categoria: "Historia",
    dificultad: "Fácil",
    opciones: ["Roma", "Oslo", "Lima", "Tokio"],
    respuestaCorrecta: "Roma",
    explicacion: "Roma fue el centro político y cultural del Imperio romano durante gran parte de su historia."
  },
  {
    id: 8,
    pregunta: "¿Qué civilización construyó Machu Picchu?",
    categoria: "Historia",
    dificultad: "Fácil",
    opciones: ["Maya", "Inca", "Egipcia", "Vikinga"],
    respuestaCorrecta: "Inca",
    explicacion: "Machu Picchu fue construido por la civilización inca en los Andes del actual Perú."
  },
  {
    id: 9,
    pregunta: "¿Qué documento inglés de 1215 limitó el poder del rey Juan?",
    categoria: "Historia",
    dificultad: "Media",
    opciones: ["Magna Carta", "Código Napoleónico", "Tratado de Versalles", "Constitución de Cádiz"],
    respuestaCorrecta: "Magna Carta",
    explicacion: "La Magna Carta fue sellada en 1215 y estableció importantes límites al poder monárquico."
  },
  {
    id: 10,
    pregunta: "¿Qué evento marcó el inicio tradicional de la Edad Moderna?",
    categoria: "Historia",
    dificultad: "Media",
    opciones: ["La caída de Constantinopla", "La Revolución francesa", "La llegada a la Luna", "La Primera Guerra Mundial"],
    respuestaCorrecta: "La caída de Constantinopla",
    explicacion: "En la periodización tradicional, la caída de Constantinopla en 1453 se usa como una fecha de transición hacia la Edad Moderna."
  },
  {
    id: 11,
    pregunta: "¿Cuál es el país más grande del mundo por superficie?",
    categoria: "Geografía",
    dificultad: "Fácil",
    opciones: ["Canadá", "China", "Rusia", "Brasil"],
    respuestaCorrecta: "Rusia",
    explicacion: "Rusia es el país con mayor superficie territorial del mundo."
  },
  {
    id: 12,
    pregunta: "¿Cuál es la capital de Australia?",
    categoria: "Geografía",
    dificultad: "Media",
    opciones: ["Sídney", "Canberra", "Melbourne", "Perth"],
    respuestaCorrecta: "Canberra",
    explicacion: "Canberra es la capital de Australia; Sídney y Melbourne son ciudades más grandes y conocidas."
  },
  {
    id: 13,
    pregunta: "¿En qué continente está el desierto del Sahara?",
    categoria: "Geografía",
    dificultad: "Fácil",
    opciones: ["Asia", "África", "Europa", "Oceanía"],
    respuestaCorrecta: "África",
    explicacion: "El Sahara se extiende por gran parte del norte de África."
  },
  {
    id: 14,
    pregunta: "¿Cuál es el océano más grande?",
    categoria: "Geografía",
    dificultad: "Fácil",
    opciones: ["Atlántico", "Índico", "Pacífico", "Ártico"],
    respuestaCorrecta: "Pacífico",
    explicacion: "El océano Pacífico es el más extenso de la Tierra."
  },
  {
    id: 15,
    pregunta: "¿Qué cordillera atraviesa gran parte del occidente de Sudamérica?",
    categoria: "Geografía",
    dificultad: "Fácil",
    opciones: ["Alpes", "Andes", "Himalaya", "Cárpatos"],
    respuestaCorrecta: "Andes",
    explicacion: "La cordillera de los Andes recorre el borde occidental de Sudamérica."
  },
  {
    id: 16,
    pregunta: "¿Cuántos jugadores tiene un equipo de fútbol en el campo al comenzar un partido?",
    categoria: "Deportes",
    dificultad: "Fácil",
    opciones: ["9", "10", "11", "12"],
    respuestaCorrecta: "11",
    explicacion: "Un equipo de fútbol asociación juega con 11 jugadores en el terreno de juego."
  },
  {
    id: 17,
    pregunta: "¿En qué deporte se utiliza un aro y un balón naranja?",
    categoria: "Deportes",
    dificultad: "Fácil",
    opciones: ["Baloncesto", "Béisbol", "Tenis", "Rugby"],
    respuestaCorrecta: "Baloncesto",
    explicacion: "El baloncesto se juega lanzando un balón hacia un aro elevado."
  },
  {
    id: 18,
    pregunta: "¿Qué país es conocido por haber ganado numerosos Mundiales de fútbol?",
    categoria: "Deportes",
    dificultad: "Fácil",
    opciones: ["Brasil", "Canadá", "India", "Noruega"],
    respuestaCorrecta: "Brasil",
    explicacion: "Brasil es la selección con más títulos de la Copa Mundial masculina de la FIFA."
  },
  {
    id: 19,
    pregunta: "¿En qué deporte se compite en una pista de 100 metros?",
    categoria: "Deportes",
    dificultad: "Fácil",
    opciones: ["Atletismo", "Natación", "Ciclismo", "Esgrima"],
    respuestaCorrecta: "Atletismo",
    explicacion: "Los 100 metros lisos son una de las pruebas más conocidas del atletismo."
  },
  {
    id: 20,
    pregunta: "¿Cuántos puntos vale un triple en baloncesto?",
    categoria: "Deportes",
    dificultad: "Fácil",
    opciones: ["1", "2", "3", "4"],
    respuestaCorrecta: "3",
    explicacion: "Un lanzamiento convertido desde fuera de la línea de tres puntos vale tres puntos."
  },
  {
    id: 21,
    pregunta: "¿Qué instrumento tiene normalmente 88 teclas?",
    categoria: "Música",
    dificultad: "Fácil",
    opciones: ["Violín", "Piano", "Flauta", "Trompeta"],
    respuestaCorrecta: "Piano",
    explicacion: "Un piano moderno estándar suele tener 88 teclas."
  },
  {
    id: 22,
    pregunta: "¿Cuál de estos es un género musical?",
    categoria: "Música",
    dificultad: "Fácil",
    opciones: ["Salsa", "Granito", "Átomo", "Satélite"],
    respuestaCorrecta: "Salsa",
    explicacion: "La salsa es un género musical y de baile desarrollado a partir de diversas tradiciones caribeñas y latinoamericanas."
  },
  {
    id: 23,
    pregunta: "¿Qué familia de instrumentos incluye al violín?",
    categoria: "Música",
    dificultad: "Fácil",
    opciones: ["Cuerda", "Viento metal", "Percusión", "Electrónica"],
    respuestaCorrecta: "Cuerda",
    explicacion: "El violín produce sonido mediante cuerdas que vibran y pertenece a la familia de cuerda frotada."
  },
  {
    id: 24,
    pregunta: "¿Qué símbolo indica tradicionalmente una pausa total en una partitura?",
    categoria: "Música",
    dificultad: "Difícil",
    opciones: ["Silencio", "Clave de sol", "Sostenido", "Ligadura"],
    respuestaCorrecta: "Silencio",
    explicacion: "Los silencios representan momentos en los que no se emite sonido."
  },
  {
    id: 25,
    pregunta: "¿Cuántas notas naturales hay en una escala diatónica mayor?",
    categoria: "Música",
    dificultad: "Media",
    opciones: ["5", "6", "7", "8"],
    respuestaCorrecta: "7",
    explicacion: "Una escala mayor diatónica contiene siete notas diferentes antes de repetir la primera en la octava."
  },
  {
    id: 26,
    pregunta: "¿Qué profesión dirige una película?",
    categoria: "Cine y televisión",
    dificultad: "Fácil",
    opciones: ["Director", "Guionista exclusivamente", "Productor de sonido", "Proyeccionista"],
    respuestaCorrecta: "Director",
    explicacion: "El director supervisa la puesta en escena y la realización artística de una película."
  },
  {
    id: 27,
    pregunta: "¿Cómo se llama el texto que contiene los diálogos y acciones de una película?",
    categoria: "Cine y televisión",
    dificultad: "Fácil",
    opciones: ["Guion", "Crítica", "Crédito", "Cartelera"],
    respuestaCorrecta: "Guion",
    explicacion: "El guion contiene diálogos, acciones y otras indicaciones necesarias para producir la obra audiovisual."
  },
  {
    id: 28,
    pregunta: "¿Qué premio se entrega en los Premios Óscar?",
    categoria: "Cine y televisión",
    dificultad: "Fácil",
    opciones: ["Una estatuilla", "Una medalla olímpica", "Una copa de fútbol", "Un disco de oro"],
    respuestaCorrecta: "Una estatuilla",
    explicacion: "La Academia de Artes y Ciencias Cinematográficas entrega una estatuilla conocida como Oscar."
  },
  {
    id: 29,
    pregunta: "¿Qué significa normalmente la palabra 'escena' en una producción audiovisual?",
    categoria: "Cine y televisión",
    dificultad: "Media",
    opciones: ["Una unidad de acción en un lugar o tiempo determinados", "El equipo de sonido", "El cartel de la película", "La banda sonora completa"],
    respuestaCorrecta: "Una unidad de acción en un lugar o tiempo determinados",
    explicacion: "Una escena suele agrupar una acción que transcurre en un mismo espacio o contexto temporal."
  },
  {
    id: 30,
    pregunta: "¿Qué elemento se utiliza para registrar las imágenes durante el rodaje?",
    categoria: "Cine y televisión",
    dificultad: "Fácil",
    opciones: ["Cámara", "Micrófono", "Altavoz", "Proyector"],
    respuestaCorrecta: "Cámara",
    explicacion: "La cámara registra las imágenes que luego forman parte de la obra audiovisual."
  },
  {
    id: 31,
    pregunta: "¿Qué significa CPU?",
    categoria: "Tecnología",
    dificultad: "Fácil",
    opciones: ["Unidad central de procesamiento", "Unidad de control de pantalla", "Programa central universal", "Código principal de usuario"],
    respuestaCorrecta: "Unidad central de procesamiento",
    explicacion: "CPU significa Central Processing Unit y es el procesador que ejecuta instrucciones en un dispositivo."
  },
  {
    id: 32,
    pregunta: "¿Qué dispositivo se utiliza para mover el puntero en una computadora?",
    categoria: "Tecnología",
    dificultad: "Fácil",
    opciones: ["Mouse", "Monitor", "Router", "Impresora"],
    respuestaCorrecta: "Mouse",
    explicacion: "El mouse o ratón permite controlar el puntero y realizar acciones sobre la interfaz."
  },
  {
    id: 33,
    pregunta: "¿Qué lenguaje se utiliza principalmente para estructurar páginas web?",
    categoria: "Tecnología",
    dificultad: "Fácil",
    opciones: ["HTML", "MP3", "JPEG", "PDF"],
    respuestaCorrecta: "HTML",
    explicacion: "HTML define la estructura y el contenido de una página web."
  },
  {
    id: 34,
    pregunta: "¿Qué componente permite mostrar imágenes y texto en una computadora?",
    categoria: "Tecnología",
    dificultad: "Fácil",
    opciones: ["Monitor", "Teclado", "Router", "Disco duro"],
    respuestaCorrecta: "Monitor",
    explicacion: "El monitor es el dispositivo de salida que muestra visualmente información del computador."
  },
  {
    id: 35,
    pregunta: "¿Qué tecnología permite conectar dispositivos cercanos de forma inalámbrica?",
    categoria: "Tecnología",
    dificultad: "Fácil",
    opciones: ["Bluetooth", "HDMI", "USB", "Ethernet"],
    respuestaCorrecta: "Bluetooth",
    explicacion: "Bluetooth permite la comunicación inalámbrica de corto alcance entre dispositivos compatibles."
  },
  {
    id: 36,
    pregunta: "¿Cuántos lados tiene un hexágono?",
    categoria: "Cultura general",
    dificultad: "Fácil",
    opciones: ["5", "6", "7", "8"],
    respuestaCorrecta: "6",
    explicacion: "El prefijo 'hexa-' indica seis, por lo que un hexágono tiene seis lados."
  },
  {
    id: 37,
    pregunta: "¿Cuál es el idioma con más hablantes nativos en el mundo?",
    categoria: "Cultura general",
    dificultad: "Media",
    opciones: ["Español", "Inglés", "Chino mandarín", "Francés"],
    respuestaCorrecta: "Chino mandarín",
    explicacion: "El chino mandarín cuenta con la mayor cantidad de hablantes nativos como primera lengua."
  },
  {
    id: 38,
    pregunta: "¿Cuántos días tiene un año bisiesto?",
    categoria: "Cultura general",
    dificultad: "Fácil",
    opciones: ["364", "365", "366", "367"],
    respuestaCorrecta: "366",
    explicacion: "Un año bisiesto añade un día al calendario y tiene 366 días."
  },
  {
    id: 39,
    pregunta: "¿Qué metal es líquido a temperatura ambiente?",
    categoria: "Cultura general",
    dificultad: "Media",
    opciones: ["Hierro", "Mercurio", "Cobre", "Aluminio"],
    respuestaCorrecta: "Mercurio",
    explicacion: "El mercurio es un metal que se encuentra en estado líquido a temperatura ambiente."
  },
  {
    id: 40,
    pregunta: "¿Qué planeta es conocido como el planeta rojo?",
    categoria: "Cultura general",
    dificultad: "Fácil",
    opciones: ["Venus", "Marte", "Urano", "Mercurio"],
    respuestaCorrecta: "Marte",
    explicacion: "Marte presenta un aspecto rojizo debido principalmente a minerales de hierro oxidados en su superficie."
  },
  {
    id: 41,
    pregunta: "¿A qué temperatura hierve el agua aproximadamente al nivel del mar?",
    categoria: "Ciencia",
    dificultad: "Fácil",
    opciones: ["50 °C", "75 °C", "100 °C", "150 °C"],
    respuestaCorrecta: "100 °C",
    explicacion: "Al nivel del mar y bajo condiciones normales de presión, el agua hierve aproximadamente a 100 °C."
  },
  {
    id: 42,
    pregunta: "¿Qué forma tiene la molécula de ADN en su estructura clásica?",
    categoria: "Ciencia",
    dificultad: "Fácil",
    opciones: ["Doble hélice", "Anillo simple", "Línea recta", "Triángulo"],
    respuestaCorrecta: "Doble hélice",
    explicacion: "La estructura clásica del ADN es una doble hélice formada por dos cadenas complementarias."
  },
  {
    id: 43,
    pregunta: "¿Cuál es el planeta más cercano al Sol?",
    categoria: "Ciencia",
    dificultad: "Fácil",
    opciones: ["Venus", "Mercurio", "Marte", "Tierra"],
    respuestaCorrecta: "Mercurio",
    explicacion: "Mercurio es el primer planeta del sistema solar y el más cercano al Sol."
  },
  {
    id: 44,
    pregunta: "¿Cuál es el valor de pH de una sustancia neutra a temperatura ambiente?",
    categoria: "Ciencia",
    dificultad: "Fácil",
    opciones: ["0", "5", "7", "14"],
    respuestaCorrecta: "7",
    explicacion: "En la escala habitual de pH, una sustancia neutra tiene un pH de 7."
  },
  {
    id: 45,
    pregunta: "¿Cuál es el mamífero más grande del planeta?",
    categoria: "Ciencia",
    dificultad: "Fácil",
    opciones: ["Elefante africano", "Ballena azul", "Jirafa", "Orca"],
    respuestaCorrecta: "Ballena azul",
    explicacion: "La ballena azul es el animal conocido de mayor tamaño y es un mamífero marino."
  },
  {
    id: 46,
    pregunta: "¿Qué proceso produce la energía del Sol?",
    categoria: "Ciencia",
    dificultad: "Media",
    opciones: ["Fisión nuclear", "Fusión nuclear", "Combustión", "Evaporación"],
    respuestaCorrecta: "Fusión nuclear",
    explicacion: "En el interior del Sol ocurre fusión nuclear, principalmente de hidrógeno para formar helio."
  },
  {
    id: 47,
    pregunta: "¿Qué necesita el sonido para propagarse?",
    categoria: "Ciencia",
    dificultad: "Fácil",
    opciones: ["Un medio material", "Luz solar", "Un campo magnético", "Vacío absoluto"],
    respuestaCorrecta: "Un medio material",
    explicacion: "El sonido es una onda mecánica y necesita un medio material para propagarse."
  },
  {
    id: 48,
    pregunta: "¿Qué proteína de los glóbulos rojos transporta gran parte del oxígeno?",
    categoria: "Ciencia",
    dificultad: "Media",
    opciones: ["Insulina", "Hemoglobina", "Colágeno", "Queratina"],
    respuestaCorrecta: "Hemoglobina",
    explicacion: "La hemoglobina se encuentra en los glóbulos rojos y se une al oxígeno para transportarlo."
  },
  {
    id: 49,
    pregunta: "¿Cuál es el satélite natural de la Tierra?",
    categoria: "Ciencia",
    dificultad: "Fácil",
    opciones: ["Europa", "Titán", "La Luna", "Fobos"],
    respuestaCorrecta: "La Luna",
    explicacion: "La Luna es el único satélite natural permanente de la Tierra."
  },
  {
    id: 50,
    pregunta: "¿Cuál es la fórmula química del agua?",
    categoria: "Ciencia",
    dificultad: "Fácil",
    opciones: ["CO₂", "H₂O", "O₂", "NaCl"],
    respuestaCorrecta: "H₂O",
    explicacion: "Una molécula de agua está formada por dos átomos de hidrógeno y uno de oxígeno."
  },
  {
    id: 51,
    pregunta: "¿Qué civilización construyó las pirámides de Guiza?",
    categoria: "Historia",
    dificultad: "Fácil",
    opciones: ["Romana", "Egipcia", "Maya", "Griega"],
    respuestaCorrecta: "Egipcia",
    explicacion: "Las pirámides de Guiza fueron construidas en el antiguo Egipto, durante el Reino Antiguo."
  },
  {
    id: 52,
    pregunta: "¿Dónde comenzó el Renacimiento europeo?",
    categoria: "Historia",
    dificultad: "Media",
    opciones: ["Italia", "Rusia", "Canadá", "India"],
    respuestaCorrecta: "Italia",
    explicacion: "El Renacimiento surgió en varias ciudades de Italia antes de extenderse por Europa."
  },
  {
    id: 53,
    pregunta: "¿En qué año cayó el Muro de Berlín?",
    categoria: "Historia",
    dificultad: "Fácil",
    opciones: ["1979", "1989", "1999", "1969"],
    respuestaCorrecta: "1989",
    explicacion: "El Muro de Berlín cayó en noviembre de 1989, un acontecimiento clave del final de la Guerra Fría."
  },
  {
    id: 54,
    pregunta: "¿En qué año se proclamó la Declaración de Independencia de Estados Unidos?",
    categoria: "Historia",
    dificultad: "Media",
    opciones: ["1776", "1789", "1810", "1492"],
    respuestaCorrecta: "1776",
    explicacion: "La Declaración de Independencia fue adoptada el 4 de julio de 1776."
  },
  {
    id: 55,
    pregunta: "¿Entre qué años ocurrió la Primera Guerra Mundial?",
    categoria: "Historia",
    dificultad: "Media",
    opciones: ["1900-1905", "1914-1918", "1939-1945", "1920-1924"],
    respuestaCorrecta: "1914-1918",
    explicacion: "La Primera Guerra Mundial se desarrolló principalmente entre 1914 y 1918."
  },
  {
    id: 56,
    pregunta: "¿En qué año comenzó la Revolución francesa?",
    categoria: "Historia",
    dificultad: "Fácil",
    opciones: ["1688", "1789", "1815", "1848"],
    respuestaCorrecta: "1789",
    explicacion: "La Revolución francesa comenzó en 1789 y produjo importantes cambios políticos y sociales."
  },
  {
    id: 57,
    pregunta: "¿Quién es tradicionalmente asociado con la imprenta de tipos móviles en Europa?",
    categoria: "Historia",
    dificultad: "Media",
    opciones: ["Johannes Gutenberg", "Marco Polo", "Galileo Galilei", "Leonardo da Vinci"],
    respuestaCorrecta: "Johannes Gutenberg",
    explicacion: "Johannes Gutenberg está tradicionalmente asociado con la difusión de la imprenta de tipos móviles en Europa durante el siglo XV."
  },
  {
    id: 58,
    pregunta: "¿Qué ciudad fue conocida durante siglos como Constantinopla?",
    categoria: "Historia",
    dificultad: "Fácil",
    opciones: ["Estambul", "Atenas", "Venecia", "Madrid"],
    respuestaCorrecta: "Estambul",
    explicacion: "Constantinopla es el antiguo nombre de la ciudad que hoy conocemos como Estambul."
  },
  {
    id: 59,
    pregunta: "¿En qué año Nelson Mandela asumió la presidencia de Sudáfrica?",
    categoria: "Historia",
    dificultad: "Media",
    opciones: ["1984", "1990", "1994", "2000"],
    respuestaCorrecta: "1994",
    explicacion: "Nelson Mandela asumió la presidencia de Sudáfrica en 1994, tras las primeras elecciones nacionales democráticas del país."
  },
  {
    id: 60,
    pregunta: "¿En qué año tuvo lugar la batalla de Waterloo?",
    categoria: "Historia",
    dificultad: "Media",
    opciones: ["1815", "1804", "1821", "1789"],
    respuestaCorrecta: "1815",
    explicacion: "La batalla de Waterloo ocurrió en 1815 y terminó con la derrota de Napoleón Bonaparte."
  },
  {
    id: 61,
    pregunta: "¿Cuál es la capital de Japón?",
    categoria: "Geografía",
    dificultad: "Fácil",
    opciones: ["Kioto", "Osaka", "Tokio", "Hiroshima"],
    respuestaCorrecta: "Tokio",
    explicacion: "Tokio es la capital de Japón."
  },
  {
    id: 62,
    pregunta: "¿Cuál es la montaña más alta sobre el nivel del mar?",
    categoria: "Geografía",
    dificultad: "Fácil",
    opciones: ["Aconcagua", "Everest", "Kilimanjaro", "Mont Blanc"],
    respuestaCorrecta: "Everest",
    explicacion: "El monte Everest alcanza la mayor elevación sobre el nivel del mar, aproximadamente 8.849 metros."
  },
  {
    id: 63,
    pregunta: "¿Cuál es el continente habitado de menor superficie?",
    categoria: "Geografía",
    dificultad: "Media",
    opciones: ["Europa", "Oceanía", "África", "Antártida"],
    respuestaCorrecta: "Oceanía",
    explicacion: "Oceanía es el continente habitado de menor extensión, aunque las clasificaciones continentales pueden variar según el criterio utilizado."
  },
  {
    id: 64,
    pregunta: "¿Qué línea imaginaria divide la Tierra en hemisferio norte y sur?",
    categoria: "Geografía",
    dificultad: "Fácil",
    opciones: ["Trópico de Cáncer", "Ecuador", "Meridiano de Greenwich", "Trópico de Capricornio"],
    respuestaCorrecta: "Ecuador",
    explicacion: "El ecuador es la línea de latitud 0° que separa los hemisferios norte y sur."
  },
  {
    id: 65,
    pregunta: "¿Qué canal une el océano Atlántico y el océano Pacífico?",
    categoria: "Geografía",
    dificultad: "Fácil",
    opciones: ["Canal de Suez", "Canal de Panamá", "Canal de Kiel", "Canal de Corinto"],
    respuestaCorrecta: "Canal de Panamá",
    explicacion: "El Canal de Panamá conecta el Atlántico y el Pacífico a través del istmo de Panamá."
  },
  {
    id: 66,
    pregunta: "¿En qué dos países se encuentra el lago Titicaca?",
    categoria: "Geografía",
    dificultad: "Media",
    opciones: ["Chile y Argentina", "Perú y Bolivia", "Ecuador y Perú", "Bolivia y Brasil"],
    respuestaCorrecta: "Perú y Bolivia",
    explicacion: "El lago Titicaca se encuentra en la frontera entre Perú y Bolivia."
  },
  {
    id: 67,
    pregunta: "¿Cuál es la capital de Argentina?",
    categoria: "Geografía",
    dificultad: "Fácil",
    opciones: ["Córdoba", "Rosario", "Buenos Aires", "Mendoza"],
    respuestaCorrecta: "Buenos Aires",
    explicacion: "Buenos Aires es la capital y principal centro político de Argentina."
  },
  {
    id: 68,
    pregunta: "¿Qué país está formado por miles de islas y tiene a Tokio como capital?",
    categoria: "Geografía",
    dificultad: "Fácil",
    opciones: ["Japón", "Grecia", "Filipinas", "Indonesia"],
    respuestaCorrecta: "Japón",
    explicacion: "Japón es un archipiélago del este de Asia y su capital es Tokio."
  },
  {
    id: 69,
    pregunta: "¿Entre qué tres grandes regiones se extiende el mar Mediterráneo?",
    categoria: "Geografía",
    dificultad: "Media",
    opciones: ["Europa, África y Asia", "Asia, Oceanía y América", "Europa, América y África", "África, Antártida y Asia"],
    respuestaCorrecta: "Europa, África y Asia",
    explicacion: "El Mediterráneo se sitúa entre Europa al norte, África al sur y Asia al este."
  },
  {
    id: 70,
    pregunta: "¿Cuál es la capital de Ecuador?",
    categoria: "Geografía",
    dificultad: "Fácil",
    opciones: ["Guayaquil", "Quito", "Cuenca", "Loja"],
    respuestaCorrecta: "Quito",
    explicacion: "Quito es la capital de Ecuador y se encuentra en la cordillera de los Andes."
  },
  {
    id: 71,
    pregunta: "¿En qué superficie se juega tradicionalmente Wimbledon?",
    categoria: "Deportes",
    dificultad: "Fácil",
    opciones: ["Arcilla", "Césped", "Madera", "Hielo"],
    respuestaCorrecta: "Césped",
    explicacion: "Wimbledon es conocido por disputarse sobre pistas de césped."
  },
  {
    id: 72,
    pregunta: "¿Cuántos jugadores de un equipo están en la cancha al mismo tiempo en baloncesto?",
    categoria: "Deportes",
    dificultad: "Fácil",
    opciones: ["4", "5", "6", "7"],
    respuestaCorrecta: "5",
    explicacion: "Cada equipo de baloncesto tiene cinco jugadores en la cancha durante el juego."
  },
  {
    id: 73,
    pregunta: "¿Qué distancia tiene oficialmente un maratón?",
    categoria: "Deportes",
    dificultad: "Media",
    opciones: ["40 km", "41,195 km", "42,195 km", "45 km"],
    respuestaCorrecta: "42,195 km",
    explicacion: "La distancia oficial de un maratón es de 42,195 kilómetros."
  },
  {
    id: 74,
    pregunta: "¿En qué deporte destaca el Tour de Francia?",
    categoria: "Deportes",
    dificultad: "Fácil",
    opciones: ["Ciclismo", "Atletismo", "Natación", "Automovilismo"],
    respuestaCorrecta: "Ciclismo",
    explicacion: "El Tour de Francia es una de las carreras por etapas más importantes del ciclismo."
  },
  {
    id: 75,
    pregunta: "¿Cuántas bases hay en un campo de béisbol?",
    categoria: "Deportes",
    dificultad: "Fácil",
    opciones: ["3", "4", "5", "6"],
    respuestaCorrecta: "4",
    explicacion: "El diamante de béisbol tiene cuatro bases: primera, segunda, tercera y home."
  },
  {
    id: 76,
    pregunta: "¿Cuántos jugadores de cada equipo están en la cancha en voleibol?",
    categoria: "Deportes",
    dificultad: "Fácil",
    opciones: ["5", "6", "7", "8"],
    respuestaCorrecta: "6",
    explicacion: "En el voleibol de pista, cada equipo juega con seis jugadores en la cancha."
  },
  {
    id: 77,
    pregunta: "¿Cómo se llama el golpe inicial con el que empieza un punto en tenis?",
    categoria: "Deportes",
    dificultad: "Fácil",
    opciones: ["Saque", "Remate", "Bloqueo", "Pase"],
    respuestaCorrecta: "Saque",
    explicacion: "En tenis, cada punto comienza con el saque de uno de los jugadores."
  },
  {
    id: 78,
    pregunta: "¿Qué otro nombre recibe el tenis de mesa?",
    categoria: "Deportes",
    dificultad: "Fácil",
    opciones: ["Ping-pong", "Squash", "Bádminton", "Waterpolo"],
    respuestaCorrecta: "Ping-pong",
    explicacion: "Tenis de mesa y ping-pong son nombres utilizados para referirse a este deporte."
  },
  {
    id: 79,
    pregunta: "¿En qué deporte se utiliza un ring?",
    categoria: "Deportes",
    dificultad: "Fácil",
    opciones: ["Boxeo", "Golf", "Ciclismo", "Natación"],
    respuestaCorrecta: "Boxeo",
    explicacion: "El boxeo se practica en un cuadrilátero conocido comúnmente como ring."
  },
  {
    id: 80,
    pregunta: "En ajedrez, ¿cuántas casillas tiene el tablero?",
    categoria: "Deportes",
    dificultad: "Fácil",
    opciones: ["32", "48", "64", "81"],
    respuestaCorrecta: "64",
    explicacion: "El tablero de ajedrez tiene 8 filas por 8 columnas, para un total de 64 casillas."
  },
  {
    id: 81,
    pregunta: "¿Quién compuso la Quinta Sinfonía?",
    categoria: "Música",
    dificultad: "Fácil",
    opciones: ["Beethoven", "Mozart", "Bach", "Vivaldi"],
    respuestaCorrecta: "Beethoven",
    explicacion: "La Quinta Sinfonía es una de las obras más conocidas de Ludwig van Beethoven."
  },
  {
    id: 82,
    pregunta: "¿Qué unidad se utiliza para medir la frecuencia del sonido?",
    categoria: "Música",
    dificultad: "Media",
    opciones: ["Voltio", "Hercio", "Vatio", "Metro"],
    respuestaCorrecta: "Hercio",
    explicacion: "La frecuencia se mide en hercios (Hz), que indican ciclos por segundo."
  },
  {
    id: 83,
    pregunta: "¿Cuántas cuerdas tiene normalmente una guitarra clásica?",
    categoria: "Música",
    dificultad: "Fácil",
    opciones: ["4", "5", "6", "7"],
    respuestaCorrecta: "6",
    explicacion: "La guitarra clásica estándar tiene seis cuerdas."
  },
  {
    id: 84,
    pregunta: "¿Qué clave se utiliza con frecuencia para escribir melodías agudas?",
    categoria: "Música",
    dificultad: "Fácil",
    opciones: ["Clave de sol", "Clave de fa exclusivamente", "Clave de percusión", "Clave neutra"],
    respuestaCorrecta: "Clave de sol",
    explicacion: "La clave de sol se usa habitualmente para registrar notas de registro agudo."
  },
  {
    id: 85,
    pregunta: "¿En qué país se desarrolló gran parte de la historia temprana del jazz?",
    categoria: "Música",
    dificultad: "Media",
    opciones: ["Estados Unidos", "España", "India", "Noruega"],
    respuestaCorrecta: "Estados Unidos",
    explicacion: "El jazz se desarrolló principalmente en Estados Unidos, especialmente en comunidades afroamericanas del sur."
  },
  {
    id: 86,
    pregunta: "¿Qué indica normalmente el término musical 'allegro'?",
    categoria: "Música",
    dificultad: "Media",
    opciones: ["Rápido o animado", "Muy lento", "Sin sonido", "Sólo percusión"],
    respuestaCorrecta: "Rápido o animado",
    explicacion: "Allegro es una indicación de tempo que suele señalar una interpretación rápida o animada."
  },
  {
    id: 87,
    pregunta: "¿A qué familia pertenecen los tambores?",
    categoria: "Música",
    dificultad: "Fácil",
    opciones: ["Cuerdas", "Percusión", "Viento madera", "Viento metal"],
    respuestaCorrecta: "Percusión",
    explicacion: "Los tambores producen sonido al ser golpeados y pertenecen a la familia de percusión."
  },
  {
    id: 88,
    pregunta: "¿Cuántas notas separadas por grados diatónicos hay en una octava de una escala mayor?",
    categoria: "Música",
    dificultad: "Media",
    opciones: ["5", "6", "7", "12"],
    respuestaCorrecta: "7",
    explicacion: "Una escala mayor contiene siete notas diatónicas antes de repetir la primera en la octava."
  },
  {
    id: 89,
    pregunta: "¿Qué género combina actuación teatral con música y canto?",
    categoria: "Música",
    dificultad: "Fácil",
    opciones: ["Ópera", "Documental", "Ensayo", "Podcast"],
    respuestaCorrecta: "Ópera",
    explicacion: "La ópera integra música, canto, actuación y una puesta en escena teatral."
  },
  {
    id: 90,
    pregunta: "¿Qué ritmo y género colombiano es conocido por su origen en la región Caribe?",
    categoria: "Música",
    dificultad: "Fácil",
    opciones: ["Cumbia", "Polca", "Fado", "Flamenco"],
    respuestaCorrecta: "Cumbia",
    explicacion: "La cumbia es una tradición musical y de danza muy asociada a la región Caribe de Colombia."
  },
  {
    id: 91,
    pregunta: "¿Quién dirigió la película Avatar de 2009?",
    categoria: "Cine y televisión",
    dificultad: "Fácil",
    opciones: ["James Cameron", "Steven Spielberg", "Christopher Nolan", "Peter Jackson"],
    respuestaCorrecta: "James Cameron",
    explicacion: "James Cameron dirigió Avatar, estrenada en 2009."
  },
  {
    id: 92,
    pregunta: "¿Qué técnica consiste en crear la ilusión de movimiento mostrando imágenes consecutivas?",
    categoria: "Cine y televisión",
    dificultad: "Fácil",
    opciones: ["Animación", "Doblaje", "Subtitulado", "Proyección"],
    respuestaCorrecta: "Animación",
    explicacion: "La animación crea movimiento aparente mediante una secuencia de imágenes mostradas rápidamente."
  },
  {
    id: 93,
    pregunta: "¿Qué área de una película se ocupa especialmente de cámara, encuadre y luz?",
    categoria: "Cine y televisión",
    dificultad: "Media",
    opciones: ["Cinematografía", "Vestuario", "Maquillaje", "Distribución"],
    respuestaCorrecta: "Cinematografía",
    explicacion: "La cinematografía comprende decisiones visuales relacionadas con cámara, iluminación y composición de la imagen."
  },
  {
    id: 94,
    pregunta: "¿Qué tipo de película busca principalmente presentar hechos o situaciones reales?",
    categoria: "Cine y televisión",
    dificultad: "Fácil",
    opciones: ["Documental", "Musical", "Fantasía", "Animación abstracta"],
    respuestaCorrecta: "Documental",
    explicacion: "El documental trabaja principalmente con hechos, personas o situaciones de la realidad."
  },
  {
    id: 95,
    pregunta: "¿Cómo se llama una película que continúa la historia de otra anterior?",
    categoria: "Cine y televisión",
    dificultad: "Fácil",
    opciones: ["Secuela", "Precuela", "Remake", "Cortometraje"],
    respuestaCorrecta: "Secuela",
    explicacion: "Una secuela continúa una historia previamente presentada en otra obra."
  },
  {
    id: 96,
    pregunta: "¿Qué es un tráiler en cine?",
    categoria: "Cine y televisión",
    dificultad: "Fácil",
    opciones: ["Un adelanto promocional", "El final de una película", "La música completa", "El guion definitivo"],
    respuestaCorrecta: "Un adelanto promocional",
    explicacion: "Un tráiler es un video promocional que presenta imágenes y elementos de una película."
  },
  {
    id: 97,
    pregunta: "¿Qué elemento muestra por escrito el diálogo traducido de una película?",
    categoria: "Cine y televisión",
    dificultad: "Fácil",
    opciones: ["Subtítulos", "Créditos", "Fotogramas", "Efectos especiales"],
    respuestaCorrecta: "Subtítulos",
    explicacion: "Los subtítulos presentan por escrito los diálogos y otros elementos del audio, a menudo traducidos."
  },
  {
    id: 98,
    pregunta: "¿Cómo se llama la música creada o seleccionada para acompañar una película?",
    categoria: "Cine y televisión",
    dificultad: "Fácil",
    opciones: ["Banda sonora", "Storyboard", "Guion técnico", "Montaje"],
    respuestaCorrecta: "Banda sonora",
    explicacion: "La banda sonora reúne música y, según el contexto, otros componentes sonoros de una obra audiovisual."
  },
  {
    id: 99,
    pregunta: "¿En qué país se celebra el Festival de Cine de Cannes?",
    categoria: "Cine y televisión",
    dificultad: "Fácil",
    opciones: ["Francia", "Italia", "México", "Canadá"],
    respuestaCorrecta: "Francia",
    explicacion: "El Festival de Cannes se celebra en la ciudad francesa de Cannes."
  },
  {
    id: 100,
    pregunta: "¿Qué proceso reúne y ordena las tomas para formar la película final?",
    categoria: "Cine y televisión",
    dificultad: "Media",
    opciones: ["Montaje o edición", "Casting", "Rodaje", "Proyección"],
    respuestaCorrecta: "Montaje o edición",
    explicacion: "El montaje organiza las tomas y sonidos para construir la versión final de la obra audiovisual."
  },
  {
    id: 101,
    pregunta: "¿Qué significa URL en informática?",
    categoria: "Tecnología",
    dificultad: "Fácil",
    opciones: ["Localizador Uniforme de Recursos", "Lenguaje Universal de Redes", "Unidad de Registro Local", "Ruta Universal de Lenguajes"],
    respuestaCorrecta: "Localizador Uniforme de Recursos",
    explicacion: "URL corresponde a Uniform Resource Locator y se utiliza para identificar recursos en una red, especialmente en la web."
  },
  {
    id: 102,
    pregunta: "¿Qué tipo de memoria pierde su contenido al apagar el computador?",
    categoria: "Tecnología",
    dificultad: "Fácil",
    opciones: ["RAM", "SSD", "ROM", "DVD"],
    respuestaCorrecta: "RAM",
    explicacion: "La RAM es memoria volátil: normalmente pierde su contenido cuando se corta la energía."
  },
  {
    id: 103,
    pregunta: "¿Qué ventaja característica tiene un SSD frente a un disco duro mecánico?",
    categoria: "Tecnología",
    dificultad: "Media",
    opciones: ["No usa partes móviles", "Necesita tinta", "Funciona sólo sin electricidad", "Es un tipo de monitor"],
    respuestaCorrecta: "No usa partes móviles",
    explicacion: "Un SSD almacena datos en memoria flash y no utiliza platos giratorios ni cabezales mecánicos."
  },
  {
    id: 104,
    pregunta: "¿Qué tecnología permite conectar dispositivos a una red de forma inalámbrica?",
    categoria: "Tecnología",
    dificultad: "Fácil",
    opciones: ["Wi-Fi", "VGA", "HDMI", "SATA"],
    respuestaCorrecta: "Wi-Fi",
    explicacion: "Wi-Fi es una tecnología utilizada para conectar dispositivos a redes mediante comunicación inalámbrica."
  },
  {
    id: 105,
    pregunta: "¿Qué tipo de código puede escanearse con la cámara de un teléfono para abrir información digital?",
    categoria: "Tecnología",
    dificultad: "Fácil",
    opciones: ["Código QR", "Código postal", "Código Morse", "Código RGB"],
    respuestaCorrecta: "Código QR",
    explicacion: "Un código QR almacena información que puede ser interpretada por un dispositivo con cámara y software compatible."
  },
  {
    id: 106,
    pregunta: "¿Qué hace principalmente un sistema operativo?",
    categoria: "Tecnología",
    dificultad: "Media",
    opciones: ["Administra recursos y permite usar programas", "Sólo reproduce música", "Sólo conecta auriculares", "Sólo imprime documentos"],
    respuestaCorrecta: "Administra recursos y permite usar programas",
    explicacion: "El sistema operativo administra hardware y software y proporciona servicios básicos para ejecutar aplicaciones."
  },
  {
    id: 107,
    pregunta: "¿Qué conexión es muy común para cargar y transferir datos en teléfonos y computadores?",
    categoria: "Tecnología",
    dificultad: "Fácil",
    opciones: ["USB", "HDMI exclusivamente", "VGA exclusivamente", "PS/2"],
    respuestaCorrecta: "USB",
    explicacion: "USB se utiliza ampliamente para transferir datos y proporcionar energía a dispositivos."
  },
  {
    id: 108,
    pregunta: "¿Qué describe mejor la computación en la nube?",
    categoria: "Tecnología",
    dificultad: "Media",
    opciones: ["Uso de recursos informáticos remotos a través de redes", "Guardar todo sólo en papel", "Apagar automáticamente el PC", "Usar una computadora sin procesador"],
    respuestaCorrecta: "Uso de recursos informáticos remotos a través de redes",
    explicacion: "La computación en la nube permite utilizar almacenamiento, procesamiento y otros servicios mediante infraestructura remota."
  },
  {
    id: 109,
    pregunta: "¿Qué lenguaje se usa principalmente para describir los estilos visuales de una página web?",
    categoria: "Tecnología",
    dificultad: "Fácil",
    opciones: ["CSS", "SQL", "Python", "XML"],
    respuestaCorrecta: "CSS",
    explicacion: "CSS (Cascading Style Sheets) se utiliza para definir presentación, diseño y estilos de documentos web."
  },
  {
    id: 110,
    pregunta: "¿Cuál de estos es un lenguaje de programación utilizado en la web?",
    categoria: "Tecnología",
    dificultad: "Fácil",
    opciones: ["JavaScript", "JPEG", "PNG", "MP4"],
    respuestaCorrecta: "JavaScript",
    explicacion: "JavaScript es un lenguaje de programación ampliamente utilizado para crear interactividad en páginas y aplicaciones web."
  },
  {
    id: 111,
    pregunta: "¿Cuántos anillos aparecen en el símbolo olímpico?",
    categoria: "Cultura general",
    dificultad: "Fácil",
    opciones: ["4", "5", "6", "7"],
    respuestaCorrecta: "5",
    explicacion: "El símbolo olímpico está formado por cinco anillos entrelazados."
  },
  {
    id: 112,
    pregunta: "¿Cuántos colores se suelen identificar tradicionalmente en un arcoíris?",
    categoria: "Cultura general",
    dificultad: "Fácil",
    opciones: ["5", "6", "7", "8"],
    respuestaCorrecta: "7",
    explicacion: "Tradicionalmente se describen siete colores visibles en el arcoíris."
  },
  {
    id: 113,
    pregunta: "¿Cuántas horas tiene un día completo?",
    categoria: "Cultura general",
    dificultad: "Fácil",
    opciones: ["12", "18", "24", "48"],
    respuestaCorrecta: "24",
    explicacion: "Un día civil se organiza convencionalmente en 24 horas."
  },
  {
    id: 114,
    pregunta: "¿Quién escribió Don Quijote de la Mancha?",
    categoria: "Cultura general",
    dificultad: "Fácil",
    opciones: ["Miguel de Cervantes", "Gabriel García Márquez", "Julio Cortázar", "Pablo Neruda"],
    respuestaCorrecta: "Miguel de Cervantes",
    explicacion: "Don Quijote de la Mancha fue escrito por el español Miguel de Cervantes."
  },
  {
    id: 115,
    pregunta: "¿Cuál es el símbolo químico del oro?",
    categoria: "Cultura general",
    dificultad: "Fácil",
    opciones: ["Ag", "Au", "Fe", "O"],
    respuestaCorrecta: "Au",
    explicacion: "Au es el símbolo químico del oro, derivado de su nombre latino aurum."
  },
  {
    id: 116,
    pregunta: "¿Cuántas casillas tiene un tablero de ajedrez?",
    categoria: "Cultura general",
    dificultad: "Fácil",
    opciones: ["32", "48", "64", "100"],
    respuestaCorrecta: "64",
    explicacion: "Un tablero de ajedrez está compuesto por 64 casillas, organizadas en 8 por 8."
  },
  {
    id: 117,
    pregunta: "¿Cuál es una aproximación habitual del número pi?",
    categoria: "Cultura general",
    dificultad: "Fácil",
    opciones: ["2,14", "3,14", "4,13", "5,31"],
    respuestaCorrecta: "3,14",
    explicacion: "Pi es aproximadamente 3,14159, por lo que 3,14 es una aproximación común."
  },
  {
    id: 118,
    pregunta: "¿Cuántos colores primarios se usan en el modelo de luz RGB?",
    categoria: "Cultura general",
    dificultad: "Fácil",
    opciones: ["2", "3", "4", "6"],
    respuestaCorrecta: "3",
    explicacion: "RGB combina rojo, verde y azul para representar colores mediante luz."
  },
  {
    id: 119,
    pregunta: "¿Cuántos sentidos humanos se enseñan tradicionalmente en la clasificación más conocida?",
    categoria: "Cultura general",
    dificultad: "Fácil",
    opciones: ["3", "4", "5", "7"],
    respuestaCorrecta: "5",
    explicacion: "La clasificación tradicional habla de cinco sentidos: vista, oído, olfato, gusto y tacto."
  },
  {
    id: 120,
    pregunta: "¿Cuál es el continente donde se encuentra la mayor parte del territorio de Egipto?",
    categoria: "Cultura general",
    dificultad: "Fácil",
    opciones: ["Europa", "Asia", "África", "Oceanía"],
    respuestaCorrecta: "África",
    explicacion: "La mayor parte del territorio egipcio se encuentra en África, aunque la península del Sinaí está en Asia."
  }
];

window.QUIZZMASTER_QUESTIONS = QUESTIONS;
