//Js importados
import Dialog from '../Utils/dialog.js';

//Clase encargada de crear y gestionar GameObjects
export default class GameObject extends Phaser.GameObjects.Sprite {

  /**Constructor de GameObject:
   * @param {Scene} scene Escena 
   * @param {int} sprite Sprite
   * @param {number} x Coordenada X
   * @param {number} y Coordenada Y
   * @param {bool} clickable ¿Podemos interactuar con el?
   * @param {bool} presente Estado del objeto
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