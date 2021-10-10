# Derailed Trade
> ###### Documento de diseño de videojuego - Versión 15/09/2021 (Hito 0)
[Esquematren]:/Proyecto-PVLI/blob/main/esquemita%20pal%20gdd.png "IMG - esquema"
[fondo]:/Proyecto-PVLI/blob/main/BACKGROUND%20(1)-4.png.png "IMG - fondo"
[Personaje]:/Proyecto-PVLI/blob/main/New%20Piskel-1.png%20(3).png "IMG - senior"
[objeto]:/Proyecto-PVLI/blob/main/New%20Piskel-1.png%20(4).png "IMG - tetera"
[Diagrama]:/Proyecto-PVLI/blob/main/diagrama.png "IMG - diagramaestados"
[BocetoUI]:/Proyecto-PVLI/blob/main/interfaz_diagrama.png "IMG - bocetoUi"


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


- ### 1.1. Resumen ###

Derailed Trade es una aventura gráfica de misterio en la que el jugador debe averiguar la identidad del asesino interrogando a los pasajeros de un tren. Este juego cuenta con elementos de investigación de escenarios y de ir descubriendo que sucedió la noche anterior mediante preguntas a los diferentes personajes.
  
  
## 2. Aspectos generales ##

- ### 2.1. Relato breve y parcial de una partida típica ###

La partida comenzará con el jugador familiarizándose con el entorno, los controles y algunos personajes antes de que se revele el suceso que desencadenará toda la historia: un asesinato. El jugador podrá  recorrer el tren investigando algunas habitaciones e interrogando a los pasajeros pera recabar informacion.Para esta aventura el jugador cuenta con un diario donde se irán anotando de forma automática datos recogidos en los interrogatorios e informacion sobre los objetos que encontramos en las investigaciones.Cuando el jugador crea que tiene us sospechosos potencial podrá regresar a su cuarto para desvelar al asesino.Tambien es posible que no tengas ninguna sospecha clara hasta el final del trayecto o hasta quedarse sin acciones disponibles en cuyo caso el juego te obligará a elegir un asesino al llegar a la siguiente parada.   Si el jugador consigue identificar al asesino, este será detenido por la policia.En caso de ser el sospechoso incorrecto se mostrará un periodico detallando otro asesinato similar en el tren que da a entender al jugador que se ha equivocado. 


## 3. Menús y modos de juego ##

- ### 3.1. Interfaz  ###

- HUD:

  + En la parte inferior de la pantalla estará el cuadro de diálogo.
  + En la esquina inferior izquierda, al lado del cuadro del diálogo, habrá una imagen de la cara del personaje que está hablando.
  + Debajo de la imagen del personaje que está hablando aparece su barra de  incomodidad.
  + En la esquina superior izquierda, habrá un círculo con forma de reloj que indicará las acciones restantes de la partida.
  + En la esquina superior derecha, estará el botón del menú de la partida con ajustes varios.
  + En la esquina inferior derecha estará la libreta de detective, que incuirá apuntes de algunas pruebas, objetos y datos que vaya consiguiendo el jugador.
  
  ![](https://github.com/EvSanz/Proyecto-PVLI/blob/main/interfaz_diagrama.png)
  
  
- ### 3.2 Controles ###
  
  + Movimiento: El personaje principal se moverá de izquierda a derecha con los teclas  "A" y "D" y dentro de los menús de dialogos navegaremos por las opciones con "W" y "S".
  + Objetos e interacciones: Al aproximarte a un objeto o persona con el que puedas interactuar la interacción comienza al pulsar la tecla "E". 
  + Diario: En cualquier momento del juego se podrá acceder a la informacion contenida en el diario presionando la tecla "Q".
  + Click izquierdo: Durante una inspección podras recoger objectos y añadirlos al diario haciendo click izquierdo sobre él.Durante un dialogo podras clickear directamente sobre la opción de dialogo que quieras elegir. 
  

- ### 3.3. Menús ### 

  + Menú principal: El menú que aparece al principio del juego contará con un botón "play" para iniciar la partida, un botón de ajustes y un botón que muestra los créditos.
  + Menú de ajustes: Mostrará los ajustes del juego.
  + Menú del diario: Al activar el diario se mostrará un libro abierto con una lista de objetos en la pagina derecha y una lista de la información recabada en los diálogos en la página izquierda.


## 4. Jugabilidad ##

- ### 4.1. Mecánicas ###

+ _Movimiento_: El jugador podrá mover al protagonista de un lado a otro de cada vagón con 'A' y 'D' a una velocidad constante para interactuar con personajes o abrir puertas que lleven a otro vagón o den acceso a las habitaciones.

+ _Point and click:_ En ciertas salas, como las habitaciones de los demás personajes del juego, el jugador no será capaz de moverse, sin embargo tendrá que hacer uso del movimiento del ratón para inspeccionar y/o recoger ciertos elementos de éstas habitaciones, los cuales anotará en su diario.

+ _Diálogos_: Cuando el jugador se acerque a un NPC y pulse la tecla de interactuar, el la parte inferior de la pantalla aparecerán una imagen del NPC elegido; el cuadro de diálogo con el texto; debajo de éste la barra de incomodidad de ese personaje, que el jugador podrá usar para determinar el humor del NPC interrogado. 
Durante las conversaciones, el diario se actualizará automáticamente para añadir información clave sobre el personaje interrogado u otros pasajeros.
El jugador tendrá que responder o preguntar al NPC utilizando una lista de opciones de diálogo, y dependiendo cual elija se ofrecerá cierta cantidad de información y/o llene la barra de incomodidad del personaje interrogado.

+ _Barra de incomodidad_: Durante los diálogos con otros personajes, la opción de diálogo que se elija pueden incomodar al pasajero que está siendo interrogado, lo cual hará que ésta barra se llene. Si llega al máximo el NPC se negará a hablar con nosotros en un futuro.

+ _Gasto de tiempo_: Cada interrogatorio e investigación consumen tiempo que se irá añadiendo al indicador de la esquina superior izquierda de la pantalla. Cuando el círculo se complete habremos gastado todo nuestro tiempo lo que indica que el tren ya ha llegado a la estación. En este momento, el juego nos forzará a la pantalla de desvelar asesino.

+ _Desvelar asesino_: Consiste en una pantalla en la que se muestran a todos los pasajeros del tren, y el jugador podrá hacer click sobre uno de ellos para indicar quién cree que es el asesino. Después de hacer su elección el juego acabará a la vez que se mostrará un texto en el que diga si ha elegido o no al verdadero asesino. Ésta pantalla se mostrará cuando se llene el indicador de tiempo o si el jugador decide acceder a su habitación en cualquier momento del juego.

+ _Diario_: Durante las inspecciones de habitaciones se recogerán objetos que se apuntarán de forma automática y durante los diálogos obtendremos información clave que también quedará recogida en el diario de forma automática. Al pulsar la tecla 'Q' se mostrará una pantalla con toda la información recogida hasta el momento.


- ### 4.2. Dinámica ###

+ _Objetivo:_ El objetivo del juego consiste en descubrir quién es el asesino o asesina antes de alcanzar la última estación. Para ello, el jugador tendrá que buscar las pruebas que haya repartidas por los diferentes vagones de tren e interrogar a los numerosos pasajeros que viajan con el detective (Es decir, el jugador) 

+ _Dificultad:_ La dificultad del juego radica en asociar las diferentes pistas para poder desvelar la identidad del asesino, teniendo en cuenta que el número de acciones que podremos tomar en una partida es limitado y que determinadas opciones de diálogo pueden incomodar a los pasajeros y hacer que no quieran volver a hablar con el detective bloqueando grandes cantidades de posible información crucial para el caso.   


- ### 4.3. Estética ###

El juego estará compuesto de sprites realizados en pixelart con una resolución 32x32 y tomará inspiración de las películas de la primera mitad del siglo XX, replicando el aspecto del cine en blanco y negro con sprites dibujados en una escala de grises, exceptuando el fondo que usará una paleta con tintes azulados para distinguirse de los elementos que aparecen en el juego. Al tratarse de un juego de misterio, los NPCs serán fáciles de identificar entre ellos (usando para ello diferentes estilos de ropa o cambios en la estatura, peso o rasgos físicos de los sprites) Los objetos con los que podremos interactuar tendrán una serie de píxeles animados que facilitarán su distinción de los objetos de decorado, los cuales serán acordes al rol del vagón o compartimento en el que se encuentren. Cada sala se mostrará por completo en la pantalla de juego, permaneciendo la cámara estática y pudiendo verse a todos los personajes u objetos que haya en él nada más entrar en el vagón.


| Nombre     | Imagen |
| ---      | ---       |
| Fondo | ![](https://github.com/EvSanz/Proyecto-PVLI/blob/main/BACKGROUND%20(1)-4.png.png) |
| Personaje | ![](https://github.com/EvSanz/Proyecto-PVLI/blob/main/New%20Piskel-1.png%20(3).png) |
| Objeto | ![](https://github.com/EvSanz/Proyecto-PVLI/blob/main/New%20Piskel-1.png%20(4).png) |


## 5. Contenido ##

- ### 5.1. Historia ###

Norma Anthony y Molly Morton conversan a solas durante el primer día de viaje y Norma, aparentemente de broma, menciona que quiere matar a Larry Shepard por estar en una relación con su hijo y Molly, creyendo que no iba en serio, menciona que querría deshacerse de su hermana Mery porque fue admitida en una prestigiosa escuela de arte y ella no. Ese mismo día deciden hacer un trato, en el cual Norma mataría a Mery y Molly a Larry. Al día siguiente, Mery aparece estrangulada en su habitación.

Asustada, Molly decide pedir ayuda al detective Ted Case, quien ha subido al tren con intención de visitar a un familiar. Nada más subirse, Molly acude asustada y llorando al investigador, y entre balbuceos se entiende que quiere que vayas a su habitación, donde encuentra el cadáver de su hermana, y entiende que quiere que averigüe quién fue.

Aquí el jugador podrá sacar todas las pistas que pueda descubrir de la habitación. El vagón comedor estará cerrado dado que es bastante temprano, por lo que el jugador deberá hacer sus primeras interrogaciones en el vagón de clase baja ya que todos los de media están dormidos y encerrados en su habitación. 

Al interrogar a unos pocos pasajeros se anunciará que el comedor está abierto, y se podrá acceder al resto de vagones y la mayoría estarán desayunando. Si se habla con el camarero y se eligen las opciones correctas, se podrá acceder al vagón locomotora, donde el maquinista confirma la coartada del camarero y avisa a la policía para que estén esperando en la próxima estación, y que les dirás ahí quien es el asesino para que no escape.

En éste punto, todos los demás pasajeros estarán disponibles para que hables con ellos. Puedes decidir presionar a ciertos personajes para averiguar algo que oculten, además de poder conseguir en algunos casos acceso a sus habitaciones. Éstas historias son:

- Haines es un espía extranjero que utiliza una falsa identidad como tenista para viajar. 

- Ayva Yan está trabajando en un proyecto que involucra paneles solares, y por ello busca inversores que pueda financiar dicho proyecto, el cual quiere mantener en secreto por el momento. Después de descubrir esto, dará acceso a su habitación.

- Bruno Anthony confiesa tener una relación romántica con Larry Shephard que su madre Norma no acepta.

Tras esta última fase, el tren parará y el detective dará su veredicto final. Si acierta y culpa a Norma, se revelará la conversación que tuvo con Molly el día anterior; por otro lado, si culpa a la persona equivocada, se descubre que no es el asesino y por ende, que el jugador ha perdido el juego.

A continuación un diagrama con los puntos clave de la historia principal.

![](https://github.com/EvSanz/Proyecto-PVLI/blob/main/diagrama.png)

- ### 5.2. Personajes ###

- **Larry Shepard:** Un humilde pastor de cabras que viaja en el vagón de clase baja acompañado de una de sus cabras a la que esta llevando al veterinario.

- **Victor Collins:** Un profesor de matemáticas con un carácter estrafalario y una severa adicción a la bebida. Viaja en el vagón de clase media, aunque suele pasar su tiempo libre en el vagón de clase baja charlando con Larry Shepard. 

- **Mery y Molly Morton:** Dos hermanas que intentaron triunfar en el mundo del arte pero acabaron arruinadas en el proceso. Viajan en el vagón de clase baja, con intención de regresar a la gran ciudad con sus padres y buscar un trabajo estable.

- **Bruno Anthony:** El único hijo de la acaudalada viuda Norma Anthony. Posee una personalidad bastante conflictiva y presenta conductas sospechosas, como por ejemplo ocultar información importante para resolver el caso. Malgasta la fortuna de su familia en vicios, como por ejemplo el alcohol. 

- **Norma Anthony:** La esposa del fallecido empresario Patrick, de quien heredó su inmensa fortuna. Su único hijo es Bruno Antony, con quien comparte habitación en el vagón de lujo del tren. Su personalidad es afable y olvidadiza, aunque demuestra poseer un carácter estricto y sobreprotector en lo referente a Bruno. 

- **Ayva Yan:** Una extranjera que tiene dificultades para hablar el idioma, comunicándose sobre todo a través de gestos. Posee una personalidad extrovertida y abnegada, aunque tiene dificultades para cambiar de opinión sobre determinados temas. Viaja en el vagón de clase media, aunque suele merodear por todo el tren.   

- **Daniel Laddie Grooms:** Daniel Grooms es un electricista que se gana la vida haciendo trabajos de vez en cuando en su pueblo, y está en el tren dado que le ofrecen un trabajo más rentable en el pueblo destino. Su personalidad es generalmente tranquila, y está constantemente pensando en conseguir dinero. Viaja en el vagón de clase baja y no suele moverse mucho.

- **Federick Bold:** Es un arquitecto que fue recientemente despedido tras realizar sugerencias de diseño controversiales. Está buscando trabajo en las ciudades cercanas al ferrocarril, siendo su último intento el pueblo donde finalizaremos el juego. Suele ser serio e irritable, además de poseer una memoria excelente. Viaja en el vagón de clase media, lugar que solo abandona para ir al vagón cafetería a desayunar.

- **Alfred Hirsch:** Es un empleado que se encarga de vigilar y atender el vagón cafetería, en el cual trabaja como camarero y cocinero. Es muy servicial y aunque parezca muy serio, siempre está dispuesto a ayudar. Duerme en un compartimento especial que hay en susodicho vagón.

- **Barry Railway:** Desde pequeño se dedicaba a montar maquetas de trenes, y aunque ahora que tiene el trabajo que siempre ha querido, solo desea tener más tiempo para sus maquetas. Aún así, se toma su trabajo en serio y no aguanta ningún tipo de distracción. Es poco hablador y prefiere evitar que haya problemas en el tren, motivo por el cual prohibe de forma explícita al detective Case informar a los pasajeros del asesinato.

- **Mihael Haines:** Su sueño siempre había sido ser tenista, pero las circunstancias lo llegaron a trabajar como un espía. A pesar de ello, decidió compaginar su pasión y su trabajo, utilizando su nueva vida como tenista para viajar de un objetivo a otro mientras participa en diferentes torneos. Puede permitirse viajar en clase alta y evita relacionarse con otros pasajeros.


- ### 5.3 Lugares ###

![](https://github.com/EvSanz/Proyecto-PVLI/blob/main/esquemita%20pal%20gdd.png)

- **Vagón de clase alta:** Un vagón  donde residen Ayva Yan, Mihael Haines, Norma Anthony y Bruno Anthony. Esta zona se desbloquea justo después de investigar el vagón comedor, pero solo se podrá examinar desde el exterior. Para entrar en los compartimentos y buscar pistas, habrá que realizar diferentes tipos de acciones que variarán según el personaje que resida en dichos cuartos.

- **Vagón de clase media:** el cádaver estará en uno de los compartimentos de este. Los pasajeros que residen en él son las hermanas Morton, Victor Collins, Frederick Bold y el detective Case, el cual controlará el jugador. Al principio del juego, la mayoría de las habitaciones estarán cerradas y no se podrán investigar hasta que se desbloquee el vagón cafetería, momento en el cual los pasajeros abandonarán sus cuartos.

- **Vagón de clase baja:** Uno de los  vagones  donde el jugador podrá investigar libremente, debido a que no dispone de compartimentos y hay varios personajes deambulando por allí. En este vagón viajan Daniel Grooms y Larry Shephard, aunque es frecuente ver al resto del elenco en esta zona.

- **Vagón comedor:** Zona desbloqueable después de investigar los vagones de clase baja y media (Aunque este último será de forma más superficial), que hace de nexo con el vagón de clase alta y la locomotora, y donde podremos encontrar a Alfred Hirsch, el camarero. Gracias a él se desbloquea la exploración del resto de zonas.

- **Locomotora:** El espacio más pequeño del juego, donde podremos encontrar al maquinista Barry Railway y algunas pistas de vital importancia. Se desbloquea al mismo tiempo que el vagón de clase alta.

- ### 5.4 Objetos ###

**En la Habitación de Molly y Mery Morton:**

- Uno de los gemelos de Bruno Anthony, que se había quedado enganchado en la ropa de Norma.

- Un cable perteneciente a Ayva Yan.

- Una botella de alcohol propiedad de Victor Collins.

**En la habitación de Norma y Bruno Anthony:** 

- Una lámpara con una bombilla reemplazada por Daniel Grooms.

- Uno de los gemelos de Bruno Anthony.

- Varias cajas de galletas pertenecientes a Norma Anthony, siendo una de ellas de costura.

**En la Habitación de Mihael Haines:**

- Una raqueta de tenis.

- Un maletín cerrado con contraseña, que oculta un dispositivo de comunicación y varios pasaportes falsos.

- Una caja de cereales que contiene la contraseña del maletín.

**En la habitación de Ayva Yan:**

- Cables idénticos a los que aparecen en la escena del crimen.

- Varios prototipos de placas solares.

- Una caja de galletas, regalo de Norma Anthony tras ayudarla.

## 6. Plataformas de gestión ##

Para realizar la distribución de tareas relacionadas con el proyecto estamos utilizando la plataforma de Pivotal Tracker, para almacenar documentos escritos o realizar presentaciones utilizamos una carpeta compartida en Google Drive, y, para mantener un repositorio con los datos guardados del proyecto utilizamos Git Hub. 

Por otro lado, para realizar reuniones utilizamos la plataforma de Discord, mientras que para hacer recordatorios o tomar decisiones rápidas solemos utilizar WhatsApp. 

## 7. Plataformas de comunicación ##

Para interactuar con el público se dispone de una cuenta de Twitter y el mismo repositorio de Github, habiendo además una página web del proyecto en proceso.

## 8. Referencias ##

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

* **Dinámicas:**

Psicosis (Película)

Life is Strange (Videojuegos)

* **Guión:**

Extraños en el tren (Película) 

Asesinato en el Orient Express (Libro)



###### DEVELOPED BY: Nimeton
