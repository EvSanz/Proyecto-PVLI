# Proyecto-PVLI 
> ###### Documento de diseño de videojuego - Versión 15/09/2021 (Hito 0)

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

La partida comenzará con el jugador familiarizándose con el entorno, los controles y algunos personajes antes de que se revele el suceso que desencadenará toda la historia: un asesinato. El jugador deberá reunir todas las pistas posibles e interrogar a los pasajeros sin levantar sospechas, antes de que el tren llegue a la próxima parada. Si el jugador consigue identificar al asesino, este será detenido por la policia; por otro lado, si las acciones del jugador levantan sospechas en el resto de personajes superando un límite establecido, será acusado por los pasajeros y perderá la partida.

## 3. Menús y modos de juego ##

- ### 3.1. Interfaz y control ###
- HUD:
  + En la parte inferior de la pantalla estará el cuadro de diálogo.
  + En la esquina inferior izquierda, al lado del cuadro del diálogo, habrá una imagen de la cara del personaje que está hablando.
  + Debajo del cuadro de diálogo habrá un diagrama del pulso de la persona a la que estás interrogando.
  + En la esquina superior izquierda, estará el botón del menú de la partida con ajustes varios.
  + Arriba, centrada, estará la barra de sospecha, que indica cuánto las acciones del personaje están haciendo sospechar a otros pasajeros.
  + En la esquina inferior derecha estará la libreta de detective, que incuirá apuntes de algunas pruebas, objetos y datos que vaya consiguiendo el jugador.

## 4. Jugabilidad ##

- ### 4.1. Mecánicas ###

+ _Movimiento:_ El jugador podrá mover al protagonista de un lado a otro de cada vagón a una velocidad constante para interactuar con personajes o abrir puertas que lleven a otro vagón o den acceso a las habitaciones.

+ _Point and click:_ En ciertas salas, como las habitaciones de los demás personajes del juego o la cocina, el jugador no será capaz de moverse, sin embargo tendrá que hacer uso del movimiento del ratón para inspeccionar y/o recoger ciertos elementos de éstas habitaciones, los cuales abrirán nuevas opciones de diálogo que ayuden a resolver el caso.

+ _Diálogos:_ Cuando el jugador se acerque a un NPC y pulse la tecla de interactuar, el la parte inferior de la pantalla aparecerán una imagen del NPC elegido; el cuadro de diálogo con el texto; debajo de éste una línea similar a los signos vitales, que el jugador podrá usar para determinar el humor del NPC interrogado; y un cuaderno en el cual se podrán anotar ciertas palabras clave dichas por los personajes que podrán impactar futuras conversaciones. 
Durante la gran mayoría de las conversaciones, el jugador tendrá que responder al NPC  utilizando una lista de opciones para decirle, las cuales impactarán en la historia de distintas maneras tanto para bien como para mal.

+ _Barra de sospecha:_ Si a la hora de elegir la opción de diálogo se elige una que pueda levantar sospechas al resto de personajes (por ejemplo, mencionando directamente algún objeto encontrado en una habitación privada), la barra de sospecha se llenará. Si ésta llega a llenarse, los demás personajes estarán convencidos de que el asesino es el protagonista, lo cual conllevará a una partida perdida.

- ### 4.2. Dinámica ###

+ _Objetivo:_ El objetivo del juego consiste en descubrir quien es el asesino o asesina antes de alcanzar la última estación. Para ello, el jugador tendrá que buscar las pruebas que haya repartidas por los diferentes vagones de tren e interrogar a los numerosos pasajeros que viajan con el detective (Es decir, el avatar del jugador) 

+ _Dificultad:_ La dificultad del juego radica en asociar las diferentes pistas para poder desvelar la identidad del asesino, además de ser capaz de mantener un nivel de sospecha bajo para no ser acusado por el resto de pasajeros y de interrogar de forma efectiva a los sospechosos, quienes podrán ocultar información crucial en el caso de realizar las preguntas incorrectas.   

- ### 4.3. Estética ###

El juego estará compuesto de sprites realizados en pixelart con una resolucion 32x32 y tomará inspiracion de las películas de la primera mitad del siglo XX, replicando el aspecto del cine en blanco y negro con sprites dibujados en una escala de grises que se usarán para todos los elementos del juego. Al tratarse de un juego de misterio, los NPCs serán fáciles de identificar entre ellos, al igual que los objetos con los que podremos interactuar o el aspecto propio de cada vagón. Cada sala se mostrará por completo en la pantalla de juego, permaneciendo la cámara estática y pudiendo ver el jugador a todos los personajes u objetos que haya en él nada más entrar en el vagón.
[imagen]:https://github.com/EvSanz/Proyecto-PVLI/blob/main/inspectorwalking.gif "personaje"
![]https://github.com/EvSanz/Proyecto-PVLI/blob/main/inspectorwalking.gif

## 5. Contenido ##

- ### 5.1. Historia ###

- ### 5.2. Personajes ###

- **Larry Shepard:** Un humilde pastor de cabras que viaja en el vagón de clase baja acompañado de una de sus cabras a la que esta llevando al veterinario.

- **Victor Collins:** Un profesor de matemáticas de Delaware con un carácter extrafalario y una severa adicción a la bebida. Viaja en el vagón de clase media, aunque suele pasar su tiempo libre en el vagón de clase baja charlando con Larry Shepard. 

- **Mery y Molly Morton:** Dos hermanas que intentaron triunfar en el mundo del arte pero acabaron arruinadas en el proceso. Viajan en el vagón de clase baja, con intención de regresar a la gran ciudad con sus padres y buscar un trabajo estable.

- **Robert Anthony:** El único hijo de la acaudalada viuda Norma Anthony. Posee una personalidad bastante conflictiva y presenta conductas sospechosas, como por ejemplo ocultar información importante para resolver el caso. Malgasta la fortuna de su familia en vicios, como por ejemplo el alcohol. 

- **Norma Anthony:** La esposa del fallecido empresario Patrick, de quien heredó su inmensa fortuna. Su único hijo es Robert Antony, con quien comparte habitación en el vagón de lujo del tren. Su personalidad es afable y olvidadiza, aunque demuestra poseer un carácter estricto y sobreprotector en lo referente a Robert. 

- **Ava Yan:** Una extranjera que tiene dificultades para hablar el idioma, comunicándose sobre todo a través de gestos. Posee una personalidad extrovertida y abnegada, aunque tiene dificultades para cambiar de opinión sobre determinados temas. Viaja en el vagón de clase media, aunque suele merodear por todo el tren.   

- ### 5.3 Lugares ###

- **Vagón de clase alta:**

- **Vagón de clase media:**

- **Vagón de clase baja:**

- **Vagón comedor:**

- **Locomotora:**

- ### 5.4 Objetos ###

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
