# Derailed Trade
> ###### Documento de diseño de videojuego - Versión 15/09/2021 (Hito 0)
[Esquematren]:/Proyecto-PVLI/blob/main/esquemita%20pal%20gdd.png "IMG - esquema"
[fondo]:/Proyecto-PVLI/blob/main/BACKGROUND%20(1)-4.png.png "IMG - fondo"
[Personaje]:/Proyecto-PVLI/blob/main/New%20Piskel-1.png%20(3).png "IMG - senior"
[objeto]:/Proyecto-PVLI/blob/main/New%20Piskel-1.png%20(4).png "IMG - tetera"
[Diagrama]:/Proyecto-PVLI/blob/main/diagrama.png "IMG - diagramaestados"
[BocetoUI]:/Proyecto-PVLI/blob/main/interfaz_diagrama.png "IMG - bocetoUi"
## 1. Resumen ##

- **Géneros**: Misterio, novela gráfica, puzzles

- **Modos**: 1 Jugador.
- **Público objetivo**: Jugadores casuales mayores de 12 años.
- **Plataformas**: PC Windows.
- **Hitos**:
  
  + _Propuesta del concepto_: 23-09-2021 / 03-10-2021
  + _Pre-producción_: 25-10-2021 / 31-10-2021
  + _Producción_: 22-11-2021 / 28-10-2021
  + _Lanzamiento_: 20-12-2021 / 26-12-2021
  
## 2. Aspectos generales ##

- ### 2.1. Relato breve y parcial de una partida típica ###

La partida comenzará con el jugador familiarizándose con el entorno, los controles y algunos personajes antes de que se revele el suceso que desencadenará toda la historia: un asesinato. El jugador deberá reunir todas las pistas posibles e interrogar a los pasajeros sin levantar sospechas, antes de que el tren llegue a la próxima parada. Si el jugador consigue identificar al asesino, este será detenido por la policía; por otro lado, si las acciones del jugador levantan sospechas en el resto de personajes superando un límite establecido, será acusado por los pasajeros y perderá la partida.

## 3. Menús y modos de juego ##

- ### 3.1. Interfaz y control ###
- HUD:
  + En la parte inferior de la pantalla estará el cuadro de diálogo.
  + En la esquina inferior izquierda, al lado del cuadro del diálogo, habrá una imagen de la cara del personaje que está hablando.
  + Debajo del cuadro de diálogo habrá un diagrama del pulso de la persona a la que estás interrogando.
  + En la esquina superior izquierda, estará el botón del menú de la partida con ajustes varios.
  + Arriba, centrada, estará la barra de sospecha, que indica cuánto las acciones del personaje están haciendo sospechar a otros pasajeros.
  + En la esquina inferior derecha estará la libreta de detective, que incuirá apuntes de algunas pruebas, objetos y datos que vaya consiguiendo el jugador.
  
  ![](https://github.com/EvSanz/Proyecto-PVLI/blob/main/interfaz_diagrama.png)

## 4. Jugabilidad ##

- ### 4.1. Mecánicas ###

+ _Movimiento:_ El jugador podrá mover al protagonista de un lado a otro de cada vagón a una velocidad constante para interactuar con personajes o abrir puertas que lleven a otro vagón o den acceso a las habitaciones.

+ _Point and click:_ En ciertas salas, como las habitaciones de los demás personajes del juego o la cocina, el jugador no será capaz de moverse, sin embargo tendrá que hacer uso del movimiento del ratón para inspeccionar y/o recoger ciertos elementos de éstas habitaciones, los cuales abrirán nuevas opciones de diálogo que ayuden a resolver el caso.

+ _Diálogos:_ Cuando el jugador se acerque a un NPC y pulse la tecla de interactuar, el la parte inferior de la pantalla aparecerán una imagen del NPC elegido; el cuadro de diálogo con el texto; debajo de éste una línea similar a los signos vitales, que el jugador podrá usar para determinar el humor del NPC interrogado; y un cuaderno en el cual se podrán anotar ciertas palabras clave dichas por los personajes que podrán impactar futuras conversaciones. 
Durante la gran mayoría de las conversaciones, el jugador tendrá que responder al NPC  utilizando una lista de opciones para decirle, las cuales impactarán en la historia de distintas maneras tanto para bien como para mal.

+ _Barra de sospecha:_ Si a la hora de elegir la opción de diálogo se elige una que pueda levantar sospechas al resto de personajes (por ejemplo, mencionando directamente algún objeto encontrado en una habitación privada), la barra de sospecha se llenará. Si ésta llega a llenarse, los demás personajes estarán convencidos de que el asesino es el protagonista, lo cual conllevará a una partida perdida.

- ### 4.2. Dinámica ###

+ _Objetivo:_ El objetivo del juego consiste en descubrir quién es el asesino o asesina antes de alcanzar la última estación. Para ello, el jugador tendrá que buscar las pruebas que haya repartidas por los diferentes vagones de tren e interrogar a los numerosos pasajeros que viajan con el detective (Es decir, el avatar del jugador) 

+ _Dificultad:_ La dificultad del juego radica en asociar las diferentes pistas para poder desvelar la identidad del asesino, además de ser capaz de mantener un nivel de sospecha bajo para no ser acusado por el resto de pasajeros y de interrogar de forma efectiva a los sospechosos, quienes podrán ocultar información crucial en el caso de realizar las preguntas incorrectas.   

- ### 4.3. Estética ###

El juego estará compuesto de sprites realizados en pixelart con una resolución 32x32 y tomará inspiración de las películas de la primera mitad del siglo XX, replicando el aspecto del cine en blanco y negro con sprites dibujados en una escala de grises que se usarán para todos los elementos del juego menos el fondo. Al tratarse de un juego de misterio, los NPCs serán fáciles de identificar entre ellos(portando vestimentas diferentes y cambiando su composición corporal), al igual que los objetos con los que podremos interactuar que tendran unos pocos píxeles animados para emular un brillo  o el aspecto propio de cada vagón que estará amueblado de una forma correspondiente a su rol en el tren. Para poder diferenciarse bien el fondo usará una paleta tintada en azul distinta a la que usan el resto de sprites. Cada sala se mostrará por completo en la pantalla de juego, permaneciendo la cámara estática y pudiendo ver el jugador a todos los personajes u objetos que haya en él nada más entrar en el vagón.

Fondo con gradiente azulado:
![](https://github.com/EvSanz/Proyecto-PVLI/blob/main/BACKGROUND%20(1)-4.png.png) 

Personaje con paleta de grises:
![](https://github.com/EvSanz/Proyecto-PVLI/blob/main/New%20Piskel-1.png%20(3).png)

Objeto con brillos para destacar:
![](https://github.com/EvSanz/Proyecto-PVLI/blob/main/New%20Piskel-1.png%20(4).png)


## 5. Contenido ##

- ### 5.1. Historia ###

**ADVERTENCIA SPOILERS**

Norma Anthony y Molly Morton entablan una conversación a solas, y Norma, aparentemente de broma, menciona que quiere matar a Larry Shepard, por estar en una relación con su hijo Anthony, y Molly, creyendo que iba de broma y que la anciana tuviera algún problema mental, menciona que a su hermana Mery por que fue admitida en una escuela de arte prestigiosa y a ella no. Hacen un pacto que Norma mataría a Mery y Molly a Larry. Al día siguiente aparece Mery muerta por ahorcamiento en su cama.

Es en esta mañana cuando nuestro protagonista, el investigador Ted Case, se sube a un tren para ir a visitar a un familiar cercano. Nada más subirse, Molly acude asustada y llorando al investigador, y entre balbuceos se entiende que quiere que vayas a su habitación, donde encuentra el cadáver de su hermana, y entiende que quiere que averigüe quién fue.

Aquí el jugador podrá sacar todas las pistas que pueda descubrir de la habitación. El vagón comedor estará cerrado dado que es bastante temprano, por lo que el jugador deberá hacer sus primeras interrogaciones en el vagón de clase baja ya que todos los de media están dormidos y encerrados en su habitación. 

Al interrogar a unos pocos pasajeros se anunciará que el comedor está abierto, y se podrá acceder al resto de vagones y la mayoría estarán desayunando. Si se habla con el camarero y se eligen las opciones correctas, se podrá acceder al vagón locomotora, donde el maquinista confirma la coartada del camarero y avisa a la policía para que estén esperando en la próxima estación, y que les dirás ahí quien es el asesino para que no escape.

En éste punto, todos los demás pasajeros estarán disponibles para que hables con ellos. Puedes decidir presionar a ciertos personajes para averiguar algo que oculten y/o acceso a su habitación. Éstas historias son:

Haines no es solo un tenista sino un espía de un país extranjero, que utiliza la coartada de tenista para viajar a distintos países. 
Ayva Yan está trabajando en paneles solares y viaja en busca de inversores. Lo considera un avance muy importante y lo quiere mantener en secreto. También dará acceso a su habitación
Bruno Anthony confiesa su interes amoroso por Larry Sheppard, y que su madre, Norma Anthony, no acepta.

Tras esta última fase, el tren parará y el detective dará su veredicto final. Si acierta y culpa a Norma, se revelará la conversación que tuvo con Molly el día anterior; y si culpa a la persona equivocada, se descubre luego que es inocente y el jugador ha perdido.

A continuación un diagrama con los puntos clave de la historia principal.

![](https://github.com/EvSanz/Proyecto-PVLI/blob/main/diagrama.png)


- ### 5.2. Personajes ###

- **Larry Shepard:** Un humilde pastor de cabras que viaja en el vagón de clase baja acompañado de una de sus cabras a la que esta llevando al veterinario.

- **Victor Collins:** Un profesor de matemáticas de Delaware con un carácter estrafalario y una severa adicción a la bebida. Viaja en el vagón de clase media, aunque suele pasar su tiempo libre en el vagón de clase baja charlando con Larry Shepard. 

- **Mery y Molly Morton:** Dos hermanas que intentaron triunfar en el mundo del arte pero acabaron arruinadas en el proceso. Viajan en el vagón de clase baja, con intención de regresar a la gran ciudad con sus padres y buscar un trabajo estable.

- **Robert Anthony:** El único hijo de la acaudalada viuda Norma Anthony. Posee una personalidad bastante conflictiva y presenta conductas sospechosas, como por ejemplo ocultar información importante para resolver el caso. Malgasta la fortuna de su familia en vicios, como por ejemplo el alcohol. 

- **Norma Anthony:** La esposa del fallecido empresario Patrick, de quien heredó su inmensa fortuna. Su único hijo es Robert Antony, con quien comparte habitación en el vagón de lujo del tren. Su personalidad es afable y olvidadiza, aunque demuestra poseer un carácter estricto y sobreprotector en lo referente a Robert. 

- **Ayva Yan:** Una extranjera que tiene dificultades para hablar el idioma, comunicándose sobre todo a través de gestos. Posee una personalidad extrovertida y abnegada, aunque tiene dificultades para cambiar de opinión sobre determinados temas. Viaja en el vagón de clase media, aunque suele merodear por todo el tren.   

- **Daniel Laddie Grooms:** Daniel Grooms es un electricista que se gana la vida haciendo trabajos de vez en cuando en su pueblo, y está en el tren dado que le ofrecen un trabajo más rentable en el pueblo destino. Su personalidad es generalmente tranquila, y está constantemente pensando en conseguir dinero. Viaja en el vagón de clase baja y no suele moverse mucho.

- **Federick Bold:** Es un arquitecto que fue recientemente despedido por sugerir la idea de poner las columnas al revés. Planea buscar trabajo en ciudades cercanos, empezando por el pueblo destino. Suele estar serio y es fácilmente irritable, pero tiene buena memoria. Viaja en el vagón de clase media y nunca sale de ahí.

- **Alfred Hirsch:** Es un empleado que se encarga del vagón cafetería, en el cual es camarero y cocinero. Es muy servicial y aunque parezca muy serio siempre está dispuesto a ayudar. Duerme en un compartimento especial en el vagón cafetería.

- **Barry Railway:** Desde pequeño se dedicaba a montar maquetas de trenes, ahora que tiene el trabajo que siempre ha querido, solo desea tener más tiempo para sus maquetas. Aún así, se toma su trabajo muy en serio y no aguanta que nadie le distraiga. Suele ser poco hablador y prefiere evitar que haya problemas en su tren.

- **Mihael Haines:** Su sueño siempre había sido ser tenista pero terminó como espía en otro país. Decidió compaginar su pasión y su trabajo y utiliza su nueva vida como tenista para viajar de un objetivo a otro mientras participa en diferentes torneos. Puede permitirse viajar en clase alta y evita relacionarse con otros pasajeros.


- ### 5.3 Lugares ###
![](https://github.com/EvSanz/Proyecto-PVLI/blob/main/esquemita%20pal%20gdd.png)
- **Vagón de clase alta:**

- **Vagón de clase media:**

- **Vagón de clase baja:**

- **Vagón comedor:**

- **Locomotora:**

- ### 5.4 Objetos ###
**En la Habitación de las Morton:**

-1 de los 2 gemelos pertenecientes a Bruno Anthony que se había quedado enganchado en la ropa de Norma.

-1 de los muchos cables de Ayva Yan.

-Una botella de Alcohol del señor Collins.


**En la habitación de los Anthony:** 

-La lámpara tiene 1 bombilla cambiada (por Daniel el electricista).

-El otro gemelo del traje de Bruno.

-Muchascajas de galletas de Norma solo 1 de ellas de costura.


**En la Habitación de Haines:**

-Raquetas de tenis.

-Maletin teclado con contraseña.

-Un cartón de cereales de gelatina (jell os) cuya fecha de caducidad es la contraseña
(Si descubres su pasaportes falsos y te refieres a el como otra de sus identidades confesará todo el tema espías a cambio de información de lo que pasó esta noche.) .


**En la habitación de Yan:**

-Cables idénticos a los de la escena del crimen.

-Prototipos de placas solares.

-Una caja de galletas de la señora Anthony (se las dió a cambio del cable ).



## 6. Arquitectura UML ##

## 7. Plataformas de gestión ##

Para realizar la distribución de tareas relacionadas con el proyecto estamos utilizando la plataforma de Pivotal Tracker, para almacenar documentos escritos o realizar presentaciones utilizamos una carpeta compartida en Google Drive, y, para mantener un repositorio con los datos guardados del proyecto utilizamos Git Hub.

## 8. Plataformas de comunicación ##

Para realizar reuniones utilizamos la plataforma de Discord, mientras que para hacer recordatorios o tomar decisiones solemos utilizar WhatsApp. 


## 9. Referencias ##

* **Estéticas:**
Extraños en un tren (Película)

Midnight Scenes: the Highway (Videojuego)

Interrogation (Videojuego)

Profesor Layton (Videojuegos)

BackBone(Videojuegos)

* **Mecánicas:**
Los tres investigadores (Libros)

Ace Attorney (Videojuegos)

Interrogation (Videojuego)

LA Noire(videojuego)

Heavy Rain(Videojuego)

* **Dinámicas:**
Psicosis (Película)

Life is Strange (Videojuegos)

* **Guión:**
Extraños en el tren (Película) 

Asesinato en el Orient Express (Libro)



###### DEVELOPED BY: GRUPO 6
