//Js importados
import Dialog from '../Utils/dialog.js';

//Clase encargada de crear y gestionar GameObjects
export default class GameObject extends Phaser.GameObjects.Sprite {

  /**
   * @class GameObject
   * @extends Phaser.GameObjects.Sprite
   * @classdesc Objetos del juego
   * @param {Scene} scene Escena 
   * @param {number} x Posición del objeto en x
   * @param {number} y Posición del objeto en y
   * @param {int} sprite Posición del sprite del objeto en la spritesheet
   * @param {int} id Posición en el json del objeto
   * @param {bool} clickable ¿Podemos interactuar con el?
   * @param {number} dialogId Posición en el json de diálogos
   * Variables
   * @var {bool} presente ¿Está el objeto en la escena?
   * @var {objeto} info Información del objeto obtenida del json
   * @var {animacion} anims Animación idle del objeto
   * 
   * @extends {Phaser.GameObjects.Sprite}
   */

  constructor(scene, x, y, sprite, id, clickable, dialogId) {
    super(scene, x, y, 'objects', [sprite]);

    //Si podemos hacer click en el, lo volvemos interactuable
    if (clickable) {this.setInteractive(); }

    //Creamos una variable para llamar al objeto guardado en el json
    this.info = this.scene.scene.get('boot').myObjects.Objetos[id];

    //Creamos la animacion del objeto
    this.anims.create({
      key: 'anim',
      frames: this.anims.generateFrameNumbers('objects', {
        start: sprite,
        end: sprite+1
      }),
      frameRate: 5,
      repeat: -1
    });

    //Lo añadimos a la escena e indicamos que existe
    this.scene.add.existing(this);
    this.presente = true;

    //Activamos la animacion
    this.play("anim", true);

    //Establecemos sensacion de profundidad
    this.setDepth(1); 

    //Creamos el dialogo
    this.dialog = new Dialog(this.scene, dialogId);

    //Si hacemos click en el objeto...
    this.on('pointerdown', () => {
      
      //Y la escena es point and click...
      if (this.scene.locked === false) {

        //Añadimos la informacion al diario
        scene.scene.get('diary').addObject(this.info);
        //Iniciamos el dialogo del objeto
        this.dialog.initDialog();
        //Cambiamos el estado del objeto y lo eliminamos
        this.scene.scene.get('boot').presente[id] = false;
        this.destroy();
      }
    });
  }
}