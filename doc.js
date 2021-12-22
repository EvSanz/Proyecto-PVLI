
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