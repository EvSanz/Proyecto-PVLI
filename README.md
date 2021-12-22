# Derailed Trade
> ###### Documento de diseño de videojuego - Versión 15/09/2021 (Hito 0)
> ###### Documento de diseño de videojuego - Versión 29/10/2021 (Hito 1)
> ###### Documento de diseño de videojuego - Versión 28/11/2021 (Hito 2)
> ###### Documento de diseño de videojuego - Versión 21/12/2021 (Hito 3)
[Esquematren]:/Proyecto-PVLI/blob/main/Imagenes/esquemita%20pal%20gdd.png "IMG - esquema"
[fondo]:/Proyecto-PVLI/blob/main/Imagenes/BACKGROUND%20(1)-4.png.png "IMG - fondo"
[Personaje]:/Proyecto-PVLI/blob/main/Imagenes/New%20Piskel-1.png%20(3).png "IMG - senior"
[objeto]:/Proyecto-PVLI/blob/main/Imagenes/New%20Piskel-1.png%20(4).png "IMG - tetera"
[Diagrama]:/Proyecto-PVLI/blob/main/Imagenes/diagrama.png "IMG - diagramaestados"
[BocetoUI]:/Proyecto-PVLI/blob/main/Imagenes/interfaz_diagrama.png "IMG - bocetoUi"
[UML]:/Proyecto-PVLI/blob/main/imagenes/UML.drawio.png "IMG - uml"
[MenuPrincipal]:/Proyecto-PVLI/blob/main/Imagenes/main_menu.jpg "IMG - menuPrincipal"
[MenuAjustes]:/Proyecto-PVLI/blob/main/Imagenes/settings_menu.jpg "IMG - settings"
[PT]:/Proyecto-PVLI/blob/main/Imagenes/scene_point_click.jpg "IMG - pt"
[Game]:/Proyecto-PVLI/blob/main/Imagenes/game.jpg "IMG - game"
[Diario]:/Proyecto-PVLI/blob/main/Imagenes/diario.jpg "IMG - diario"


[Web]: https://evsanz.github.io/Proyecto-PVLI/
[Repositorio]: https://github.com/EvSanz/Proyecto-PVLI
[Pivotal]: https://www.pivotaltracker.com/n/projects/2531647
[Twitter]: https://twitter.com/NimetonStudios?t=g5mx3V4WPiuiLjGqiGzjZg&s=09


## 1. Resumen ##

- **Géneros**: Misterio, novela gráfica.
- **Modos**: 1 Jugador.
- **Público objetivo**: Jugadores casuales mayores de 12 años.
- **Plataformas**: PC Windows.
- **Hitos**:
  
  + _Propuesta del concepto_: 23-09-2021 / 03-10-2021
  + _Pre-producción_: 25-10-2021 / 31-10-2021
  + _Producción_: 22-11-2021 / 28-10-2021
  + _Lanzamiento_: 20-12-2021 / 26-12-2021
  

| [Pagina web][Web] | [Repositorio][Repositorio] | [Gestión][Pivotal] | [Twitter][Twitter] |
| -- | -- | -- | -- |


- ### 1.1. Resumen ###

Derailed Trade es una aventura gráfica de misterio en la que el jugador debe averiguar la identidad del asesino interrogando a los pasajeros de un tren. Este juego cuenta con elementos de investigación de escenarios y de ir descubriendo que sucedió la noche anterior mediante preguntas a los diferentes personajes.
  
  
## 2. Aspectos generales ##

- ### 2.1. Relato breve y parcial de una partida típica ###

La partida comenzará con el jugador familiarizándose con el entorno, los controles y algunos personajes antes de que se revele el suceso que desencadenará toda la historia: un asesinato. El jugador podrá  recorrer el tren investigando algunas habitaciones e interrogando a los pasajeros pera recabar informacion.Para esta aventura el jugador cuenta con un diario donde se irán anotando de forma automática datos recogidos en los interrogatorios e informacion sobre los objetos que encontramos en las investigaciones.Cuando el jugador crea que tiene us sospechosos potencial podrá regresar a su cuarto para desvelar al asesino.Tambien es posible que no tengas ninguna sospecha clara hasta el final del trayecto o hasta quedarse sin acciones disponibles en cuyo caso el juego te obligará a elegir un asesino al llegar a la siguiente parada.   Si el jugador consigue identificar al asesino, este será detenido por la policia.En caso de ser el sospechoso incorrecto se mostrará un periodico detallando otro asesinato similar en el tren que da a entender al jugador que se ha equivocado. 

![](https://github.com/EvSanz/Proyecto-PVLI/blob/main/Imagenes/game.jpg)

## 3. Menús y modos de juego ##

- ### 3.1. Interfaz  ###

- HUD:

  + En la parte inferior de la pantalla estará el cuadro de diálogo.
  + En la esquina inferior izquierda, al lado del cuadro del diálogo, habrá una imagen de la cara del personaje que está hablando.
  + Debajo de la imagen del personaje que está hablando aparece su barra de  incomodidad.
  + En la esquina superior izquierda, habrá un círculo con forma de reloj que indicará las acciones restantes de la partida.
  + En la esquina inferior derecha estará la libreta de detective, que incuirá apuntes de algunas pruebas, objetos y datos que vaya consiguiendo el jugador.
  
  ![](https://github.com/EvSanz/Proyecto-PVLI/blob/main/Imagenes/interfaz_diagrama.png)
  
  
- ### 3.2 Controles ###
  
  + Movimiento: El personaje principal se moverá de izquierda a derecha con los teclas 'A' y 'D' o las flechas de dirección izquierda y derecha.
  + Objetos e interacciones: Al aproximarte a un objeto o persona con el que puedas interactuar, la interacción comienza al hacer click en él o al pulsar la tecla 'E'.
  + Diario: En cualquier momento del juego se podrá acceder a la informacion contenida en el diario presionando la tecla 'Q' o haciendo click en el boton del diario de la interfaz.
  + Click izquierdo: Durante una inspección, podrás recoger objectos y añadirlos al diario haciendo click izquierdo sobre él. Durante un dialogo, podrás clickear directamente sobre la opción de dialogo que quieras elegir. 
  + Saltar cinemáticas: Durante una cinemática, se puede pulsar Escape para saltarlas e ir a la siguiente pantalla de juego. 
  

- ### 3.3. Menús ### 

  + Menú principal: El menú que aparece al principio del juego contará con un botón "Jugar" para iniciar la partida, un botón de ajustes y un botón que muestra los créditos.

![](https://github.com/EvSanz/Proyecto-PVLI/blob/main/Imagenes/main_menu.jpg)

  + Menú de ajustes: Mostrará los ajustes del juego.

![](https://github.com/EvSanz/Proyecto-PVLI/blob/main/Imagenes/settings_menu.jpg)

  + Menú del diario: Al activar el diario se mostrará un libro abierto con una lista de objetos en la pagina izquierda y una lista de los personajes en la página derecha. Al pasar el ratón por encima aparecerá un cuadro con más información.

![](https://github.com/EvSanz/Proyecto-PVLI/blob/main/Imagenes/diario.jpg)

## 4. Jugabilidad ##

- ### 4.1. Mecánicas ###

  + _Movimiento_: El jugador podrá mover al protagonista de un lado a otro de cada vagón con 'A' y 'D' o las flechas de dirección a una velocidad constante para interactuar con personajes o abrir puertas que dan acceso a otro vagón o habitaciones.

  + _Point and click_: En ciertas salas, como las habitaciones de los demás personajes del juego, el jugador no será capaz de moverse, sin embargo tendrá que hacer uso del movimiento del ratón para inspeccionar y/o recoger ciertos elementos de éstas habitaciones, los cuales anotará en su diario.

  + _Diálogos_: Cuando el jugador se acerque a un NPC y clickee, en la parte inferior de la pantalla aparecerán una imagen del NPC elegido, el diálogo y, debajo del retrato, la barra de irritación del personaje con el que estamos interactuando, que el jugador podrá usar para determinar el estado de humor del NPC interrogado. 
  Durante las conversaciones, el diario se actualizará automáticamente para añadir información clave sobre el personaje.
  El jugador tendrá que responder o preguntar al NPC utilizando una lista de opciones de diálogo, y dependiendo cual elija se ofrecerá cierta cantidad de información y/o llene la barra de irritación del personaje interrogado.

  + _Barra de irritación_: Durante los diálogos con otros personajes, la opción de diálogo que se elija pueden incomodar al pasajero que está siendo interrogado, lo cual hará que ésta barra se llene. Si llega al máximo el NPC se negará a hablar con nosotros en un futuro.

  + _Gasto de tiempo_: Cada interrogatorio e investigación consumen tiempo que se irá añadiendo al indicador de la esquina superior izquierda de la pantalla. Cuando el círculo se complete habremos gastado todo nuestro tiempo lo que indica que el tren ya ha llegado a la estación. En este momento, el juego nos forzará a la pantalla de desvelar asesino.

  + _Desvelar asesino_: Consiste en una pantalla en la que se muestran a todos los pasajeros del tren, y el jugador podrá hacer click sobre uno de ellos para indicar quién cree que es el asesino. Después de hacer su elección el juego acabará a la vez que se mostrará un texto en el que diga si ha elegido o no al verdadero asesino. Ésta pantalla se mostrará cuando se llene el indicador de tiempo o si el jugador decide llamar a la policía en el vagón de clase media en cualquier momento del juego.

  + _Diario_: Durante las inspecciones de habitaciones se recogerán objetos que se apuntarán de forma automática y durante los diálogos obtendremos información clave que también quedará recogida en el diario de forma automática. Al pulsar la tecla 'Q' se mostrará una pantalla con toda la información recogida hasta el momento.

+ _Teléfono_: Durante la investigación, el jugador podrá finalizar la partida antes de que termine el tiempo de investigación, yendo hacia el teléfono de la clase media y haciendo click en él. Tras ello, empezará la escena de selección de asesino. 

- ### 4.2. Dinámica ###

  + _Objetivo_: El objetivo del juego consiste en descubrir quién es el asesino o asesina antes de alcanzar la última estación. Para ello, el jugador tendrá que buscar las pruebas que haya repartidas por los diferentes vagones de tren e interrogar a los numerosos pasajeros que viajan con el detective (Es decir, el jugador).

  + _Dificultad_: La dificultad del juego radica en asociar las diferentes pistas para poder desvelar la identidad del asesino, teniendo en cuenta que el número de acciones que podremos tomar en una partida es limitado y que determinadas opciones de diálogo pueden incomodar a los pasajeros y hacer que no quieran volver a hablar con el detective bloqueando grandes cantidades de posible información crucial para el caso.   


- ### 4.3. Estética ###

El juego estará compuesto de sprites realizados en pixelart con una resolución 32x32 y tomará inspiración de las películas de la primera mitad del siglo XX, replicando el aspecto del cine en blanco y negro con sprites dibujados en una escala de grises, exceptuando el fondo que usará una paleta con tintes azulados para distinguirse de los elementos que aparecen en el juego. Al tratarse de un juego de misterio, los NPCs serán fáciles de identificar entre ellos (usando para ello diferentes estilos de ropa o cambios en la estatura o rasgos físicos de los sprites). Los objetos con los que podremos interactuar tendrán una serie de píxeles con tonos más claros que facilitarán su distinción de los objetos de decorado, los cuales serán acordes al rol del vagón o compartimento en el que se encuentren. Cada sala se mostrará por completo en la pantalla de juego, permaneciendo la cámara estática y pudiendo verse a todos los personajes u objetos que haya en él nada más entrar en el vagón.

![](https://github.com/EvSanz/Proyecto-PVLI/blob/main/Imagenes/scene_point_click.jpg)

## 5. Contenido ##

- ### 5.1. Historia ###

Norma Anthony y Molly Morton conversan a solas durante el primer día de viaje y Norma, aparentemente de broma, menciona que quiere matar a Larry Shepard por estar en una relación con su hijo y Molly, creyendo que no iba en serio, menciona que querría deshacerse de su hermana Mery porque fue admitida en una prestigiosa escuela de arte y ella no. Ese mismo día deciden hacer un trato, en el cual Norma mataría a Mery y Molly a Larry. Al día siguiente, Mery aparece estrangulada en su habitación.

Tras descubirse el cadáver, Barry Railway, el maquinista, decide pedir ayuda al detective Ted Case, quien ha subido al tren con intención de visitar a un familiar, para resolver el caso antes de llegar a la estación, sin alerta al asesino o asustar a los pasajeros.

Una vez finalizada esta conversación, el inspector interrogará a varios pasajeros, recorriendo los vagones e investigando las habitaciones en busca de pistas para resolver el caso. Con cada conversación e investigación de cuarto, el tiempo disponible se disminuirá hasta finalizar por completo, llegando el tren a la estación. Una vez allí, el inspector dará su veredicto, que terminará con la resolución de su mejor caso o su muerte por culpa de la depresión, tras dejar escapar al asesino y encarcelar a un inocente. 

A continuación un diagrama con los puntos clave de la historia principal.

![](https://github.com/EvSanz/Proyecto-PVLI/blob/main/Imagenes/diagrama.png)

![](https://github.com/EvSanz/Proyecto-PVLI/blob/main/Imagenes/leyenda.png)

Este es el árbol de decisiones de diálogo del jugador:

![](https://github.com/EvSanz/Proyecto-PVLI/blob/main/Imagenes/dialogos_diagrama1.png)
![](https://github.com/EvSanz/Proyecto-PVLI/blob/main/Imagenes/dialogos_diagrama2.png)
![](https://github.com/EvSanz/Proyecto-PVLI/blob/main/Imagenes/dialogos_diagrama3.png)
![](https://github.com/EvSanz/Proyecto-PVLI/blob/main/Imagenes/dialogos_diagrama4.png)

- ### 5.2. Personajes ###

  - **Larry Shepard:** Un humilde pastor de cabras que viaja en el vagón de clase baja acompañado de una de sus cabras a la que esta llevando al veterinario.

  - **Victor Collins:** Un profesor de matemáticas con un carácter estrafalario y una severa adicción a la bebida. Viaja en el vagón de clase media, aunque suele pasar su tiempo libre en el resto de vagones hablando con otros pasajeros.

  - **Mery y Molly Morton:** Dos hermanas que intentaron triunfar en el mundo del arte pero acabaron arruinadas en el proceso. Viajan en el vagón de clase media, con intención de regresar a la gran ciudad con sus padres y buscar un trabajo estable.

  - **Bruno Anthony:** El único hijo de la acaudalada viuda Norma Anthony. Posee una personalidad bastante nerviosa y presenta conductas sospechosas, como por ejemplo ocultar información importante para resolver el caso o divagar.

  - **Norma Anthony:** La esposa del fallecido empresario Patrick, de quien heredó su inmensa fortuna. Su único hijo es Bruno Antony, con quien comparte habitación en el vagón de lujo del tren. Su personalidad es afable y cariñosa, aunque demuestra poseer un carácter un tanto estricto.

  - **Ayva Yan:** Una inventora bastante seria, con poco interés en hablar con el resto de pasajeros. Viaja con intención de buscar inversores para sus nuevos proyectos, en los cuales invierte la mayoria de su tiempo. 

  - **Daniel Laddie Grooms:** Daniel Grooms es un electricista que se gana la vida haciendo trabajos de vez en cuando en su pueblo, y está en el tren dado que le ofrecen un trabajo más rentable en el pueblo destino. Es bastante arisco y amargado, con pocas ganas de interactuar con el resto de pasajeros. Viaja en el vagón de clase baja. 

  - **Frederick Bold:** Es un arquitecto que fue recientemente despedido tras realizar sugerencias de diseño controversiales. Está buscando trabajo en las ciudades cercanas al ferrocarril, siendo su último intento el pueblo donde finalizaremos el juego. Suele ser tranquilo y enérgico, además de poseer una memoria excelente. Viaja en el vagón de clase media, lugar que solo abandona para ir al vagón cafetería a desayunar.

  - **Alfred Hirsch:** Es un empleado que se encarga de vigilar y atender el vagón cafetería, en el cual trabaja como camarero y cocinero. Es muy servicial y aunque parezca muy serio, siempre está dispuesto a ayudar. Duerme en un compartimento especial que hay en susodicho vagón.

  - **Barry Railway:** Desde pequeño se dedicaba a montar maquetas de trenes, y aunque ahora que tiene el trabajo que siempre ha querido, solo desea tener más tiempo para sus maquetas. Aún así, se toma su trabajo en serio y no aguanta ningún tipo de distracción. Es bastante servicial y quiere evitar que haya problemas en el tren, motivo por el cual prohibe de forma explícita al detective Case informar a los pasajeros del asesinato.

  - **Mihael Haines:** Un extranjero cuyo sueño fue siempre convertirse en tenista, y ahora está de camino a un torneo importante. Debido a ésto, se puede permitir viajar en el vagón de clase alta.


- ### 5.3 Lugares ###

![](https://github.com/EvSanz/Proyecto-PVLI/blob/main/Imagenes/esquemita%20pal%20gdd.png)

  - **Vagón de clase alta:** Un vagón donde residen Ayva Yan, Mihael Haines y los Anthony, pero solo podremos interactuar con Ayva Yan y Bruno Anthony.

  - **Vagón de clase media:** El cádaver estará en uno de los compartimentos de este. Los pasajeros que residen en él son las hermanas Morton, Victor Collins y Frederick Bold, pero solo podremos interactuar con Molly Morton y Victor Collins. En este vagón es donde encontraremos también el teléfono para finalizar antes el caso.

  - **Vagón de clase baja:** Éste vagón no dispone de compartimentos y hay varios personajes deambulando por allí. En este vagón viajan Daniel Grooms y Larry Shephard, aunque es posible ver a otras personas en esta zona.

  - **Cafeteria:** En éste vagón podremos encontrar a Frederick Bold, Alfred Hirsch y Mihael Haines.

  - **Locomotora:** El espacio más pequeño del juego, donde podremos encontrar al maquinista Barry Railway.

- ### 5.4 Objetos ###

  **En la Habitación de Molly y Mery Morton:**

  - Uno de los gemelos de Bruno Anthony, que se había quedado enganchado en la ropa de Norma.

  - Un cable raído perteneciente a Ayva Yan, que ha sido usado como arma homicida.

  - Una botella de alcohol propiedad de Victor Collins, vacía y con un leve olor a químicos.

  **En la habitación de Norma y Bruno Anthony:** 

  - Una lámpara con una bombilla reemplazada por Daniel Grooms.

  - Uno de los gemelos de Bruno Anthony.

  - Varias cajas de galletas pertenecientes a Norma Anthony, escondiendo una de ellas un trozo del cable que se usó en la escena del crimen.

  **En la Habitación de Mihael Haines:**

  - Una raqueta de tenis.

  - Un maletín cerrado con contraseña.

  - Una caja de cereales.

  **En la habitación de Ayva Yan:**

  - Cables idénticos a los que aparecen en la escena del crimen.

  - Varios prototipos de placas solares (Llamados "Aparato extraño" durante el gameplay).

  - Una caja de galletas, regalo de Norma Anthony tras ayudarla.

## 6. UML ##

  ![](https://github.com/EvSanz/Proyecto-PVLI/blob/main/imagenes/UML.drawio.png)

## 7. Plataformas de gestión ##

Para realizar la distribución de tareas relacionadas con el proyecto estamos utilizando la plataforma de Pivotal Tracker, para almacenar documentos escritos o realizar presentaciones utilizamos una carpeta compartida en Google Drive, y, para mantener un repositorio con los datos guardados del proyecto utilizamos Git Hub. 

Por otro lado, para realizar reuniones utilizamos la plataforma de Discord, mientras que para hacer recordatorios o tomar decisiones rápidas solemos utilizar WhatsApp. 

## 8. Plataformas de comunicación ##

Para interactuar con el público se dispone de una cuenta de Twitter y el mismo repositorio de Github, habiendo además una página web del proyecto en proceso.

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

LA Noire (videojuego)

Heavy Rain (Videojuego)

The Secret of Monkey Island (Videojuego)

Deponia (Videojuego) 

Randall's Monday (Videojuego)

* **Dinámicas:**

Psicosis (Película)

Life is Strange (Videojuegos)

* **Guión:**

Extraños en el tren (Película) 

Asesinato en el Orient Express (Libro)



###### DEVELOPED BY: Nimeton Studios
