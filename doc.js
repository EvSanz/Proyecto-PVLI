
/**
 * @extends Phaser.Scene
 * @class Wagon
 * @param {string} wagonKey key del vagon
 * @param {object} wagonConfig Datos para generar el vagón
 * @param {boolean} wagonConfig.isPointAndClick ¿Es una escena PointAndClick?
 * @param {string} wagonConfig.spriteFondo1 Sprite de la izquierda del fondo
 * @param {string} wagonConfig.spriteFondo2 Sprite central del fondo
 * @param {string} wagonConfig.spriteFondo3 Sprite de la derecha del fondo
 * @param {string} wagonConfig.wagonIzq Vagon a la izquierda del actual
 * @param {string} wagonConfig.wagonDer Vagon a la derecha del actual
 * @description Escenas principales del juego
 */


  /**
   * @method playwhistle
   * @description Metodo para reproducir el silbato
   * @memberof Wagon
   */

  /**
   * @method stopMusic
   * @description Metodo para parar la musica
   * @memberof Wagon
   */

  /**
   * @method addSceneObjects
   * @description Añade los objetos ubicados en el vagon actual
   * @memberof Wagon
   */

  /**
   * @method addScenesNpc
   * @description Añade los npcs ubicados en el vagon actual
   * @memberof Wagon
   */

  /**
   * @method placaPuerta
   * @description Metodo para escribir en pantalla el nombre de las habitaciones
   * @memberof Wagon
   * @param {number} doorX Posicion x de la puerta correspondiente
   * @param {number} doorY Posicion y de la puerta correspondiente
   * @param {string} nombre Nombre del npc que aparecera en la placa
   */

//---------------------------------------------------------------------------------------
  
/**
 * @extends Phaser.GameObjects.Sprite
 * @class Door
 * @param {Wagon} scene Vagon en el que se encuentra la puerta
 * @param {number} x Posición x de la puerta
 * @param {number} y Posición y de la puerta
 * @param {Phaser.scene} gotoscene Escena a la que lleva esta puerta
 * @param {string} foto Sprite del gameobject
 * @description Objetos para cambiar de un vagón a otro
 */

  /**
   * @method openDoor
   * @description Pasa a la siguiente escena si el player la está tocando
   * @memberof Door
   */

//---------------------------------------------------------------------------------------

  /**
 * @extends Phaser.Scene
 * @class Diary
 * @description La escena donde se muestra los nombres de los personajes interrogados y los objetos recogidos. 
 * Al pasar el ratón por encima se muestra más información de éstos
 */

  /**
   * @private
   * @method showInfoPanel
   * @description Muestra el panel de descripcion 
   * @memberof Diary
   */
  
  /**
   * @public
   * @method addObject
   * @description Añade un objeto al diario
   * @param {object} obj Variable con info del objeto a añadir
   * @param {string} obj.sprite Nombre del sprite del objeto
   * @param {string} obj.name Nombre del objeto
   * @param {string} obj.desc Descripción del objeto
   * @memberof Diary
   */
  
  /**
   * @public
   * @method addCharacter
   * @description Añade un npc al diario
   * @param {object} char Variable con info del objeto a añadir
   * @param {string} char.name Nombre del npc
   * @param {string} char.desc Descripción del npc
   * @memberof Diary
   */
  
//---------------------------------------------------------------------------------------

/**
 * @class Player
 * @classdesc El objeto que el jugador va a controlar
 * @param {Phaser.Scene} scene La escena en la que se encuentra
 * @param {number} x Posición x en la que aparecerá el player
 * @param {number} y Posición y en la que aparecerá el player
 * @extends Phaser.GameObjects.Sprite
 */
  
//---------------------------------------------------------------------------------------

  /**
  * @class Dialog
  * @param {Phaser.Scene} scene Escena 
  * @param {number} id Identificador 
  * @param {Npc} npc Npc con el que interactuamos
  * @classdesc Gestión de diálogos
  * /

  /**
  * @method initDialog 
  * @description Método para iniciar el dialogo
  * @memberof Dialog
  */
  
  /**
  * @method talk 
  * @description Método para iniciar el bloque de dialogo
  * @memberof Dialog
  */

  /**
  * @method nextText 
  * @description Método para pasar a la siguiente linea de dialogo
  * @memberof Dialog
  */

  /**
  * @method finishText 
  * @description Método para finalizar el dialogo
  * @memberof Dialog
  */

  /**
  * @method dialogoIrritacionMax
  * @description Método para escribir el dialogo que sucede cuando la irritacion está al maximo
  * @memberof Dialog
  */

  /**
  * @method interaccionDialogo
  * @description Método para cambiar el dialogo dependiendo de la opcion escogida
  * @param {number} n Opcion de dialogo escogida
  * @memberof Dialog
  */

  /**
  * @method createBox
  * @description Método para interactuar con las opciones
  * @memberof Dialog
  */

  /**
  * @method showDetails 
  * @description Método para mostrar los aspectos visuales del dialogo
  * @param {number} image Numero del sprite en el spritesheet
  * @param {NPC} npc Personaje con el que conversamos 
  * @param {number} newValue Valor auxiliar de irritacion 
  * @memberof Dialog
  */

  /**
  * @method cambiarRetrato 
  * @description Método para cambiar el frame del personaje que habla
  * @param {number} image Numero del sprite en el spritesheet
  * @memberof Dialog
  */

  /**
  * @method mostrarNombre 
  * @description Método para escribir el nombre del npc
  * @param {NPC} npc Personaje con el que conversamos 
  * @memberof Dialog
  */

  /**
  * @method actualizaIrritacion 
  * @description Método para mostrar la irritacion del npc
  * @param {number} newValue Valor auxiliar de irritacion 
  * @memberof Dialog
  */
  
//---------------------------------------------------------------------------------------

/**
 * @class Clock
 * @classdesc Se encarga de contar 12 acciones determinadas, dar información sobre las acciones restantes y saltar a la escena de selección de asesino cuando llegan a 0
 * @param {Phaser.Scene} scene La escena en la que se crea el reloj (Hará falta un referencia constante)
 */

  /**
   * @public
   * @method decreaseTime
   * @description Decrementa el número de acciones restantes y llama a la escena de selección de asesino cuando no quedan
   * @param {Wagon} scenenow Vagón desde la que se llama a éste método
   * @memberof Clock
   */
  
  /**
   * @public
   * @method resetTime
   * @description Reinicia el número de acciones a su valor inicial
   * @memberof Clock
   */
  
  /**
   * @public
   * @method getTime
   * @description Devuelve el número de acciones restantes
   * @returns {number} El número de acciones restantes
   * @memberof Clock
   */
  
  /**
   * @public
   * @method showTime
   * @description Muestra el sprite del reloj correspondiente al número de acciones restantes
   * @param {Phaser.Scene} scenenow Escena en la que mostrar el reloj
   * @memberof Clock
   */
  
//---------------------------------------------------------------------------------------

/**
 * @class ObjectManager
 * @classdesc Guarda todos los objetos del juego a través de las escenas
 */

  /**
   * @public
   * @method acoplarObj
   * @description Añade un objeto al array
   * @memberof ObjectManager
   * @param {Phaser.GameObject} go Objeto a añadir
   */
  
  /**
   * @public
   * @method consultarObj
   * @description Devuelve el objeto que está en la posición indicada
   * @memberof ObjectManager
   * @param {number} id Posición del objeto deseado en el array
   * @returns {Phaser.GameObject} El objeto en la posición
   */
  
//---------------------------------------------------------------------------------------

  /**
   * @class GameObject
   * @extends {Phaser.GameObjects.Sprite}
   * @classdesc Objetos del juego
   * @param {Scene} scene Escena 
   * @param {number} x Posición del objeto en x
   * @param {number} y Posición del objeto en y
   * @param {int} sprite Posición del sprite del objeto en la spritesheet
   * @param {int} id Posición en el json del objeto
   * @param {bool} clickable ¿Podemos interactuar con el?
   * @param {number} dialogId Posición en el json de diálogos
   */
  
//---------------------------------------------------------------------------------------

  /**
     * @class Npc
     * @extends {Phaser.GameObjects.Sprite}
     * @classdesc Personajes
     * @param {Phaser.Scene} scene Escena 
     * @param {number} x Posición del personaje en x
     * @param {number} y Posición del personaje en y
     * @param {number} idNpc Identificador
     * @param {number} anger Irritación
     * @param {number} frame La posición del personaje en la spritesheet
     * @param {number} dialogoIni Identificador del diálogo que le corresponde al personaje
     */

    /**
     * @private
     * @method llamarDialogo 
     * @description Carga un diálogo u otro dependiendo de la irritación
     * @memberof Npc
     */

    /**
     * @public
     * @method aumentarIrritacion 
     * @description Aumenta el nivel de irritación
     * @param {int} cabreo El nivel de irritación que aumenta al personaje
     * @memberof Npc
     */

    /**
     * @public
     * @method getIrritacion 
     * @description Devuelve el valor actual de irritación
     * @returns {number} La irritación del personaje
     * @memberof Npc
     */

    /**
     * @public
     * @method cambiarScene 
     * @description Aumentamos el valor de diálogo
     * @memberof Npc
     */
    
    /**
     * @public
     * @method apuntarEnDiario 
     * @description Cargamos información en el diario
     * @memberof Npc
     */