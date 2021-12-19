import Dialog from '../Utils/dialog.js';

//Clase encargada de gestionar los GameObject
export default class GameObject extends Phaser.GameObjects.Sprite {

  /**Constructor de GameObject
   * @param {Scene} scene Escena 
   *@param {int} sprite Sprite
   * @param {number} x Coordenada X
   * @param {number} y Coordenada Y
   * @param {bool} clickable ¿Es clickeable?
   * @param {bool} presente estará a true si el objeto todavia no se ha recogido y debe aparecer en la escena
   */

  constructor(scene, x, y, sprite, id, clickable, dialogId) {

    super(scene, x, y, 'objects', [sprite]);
    //Si es un objeto clickeable, lo convertimos en interactivo
    if (clickable) {
      this.setInteractive();
    }

    this.info = this.scene.scene.get('boot').myObjects.Objetos[id];
    this.anims.create({
      key: 'anim',
      frames: this.anims.generateFrameNumbers('objects', {
        start: sprite,
        end: sprite+1
      }),
      frameRate: 5,
      repeat: -1
    });

    this.scene.add.existing(this);
    this.play("anim",true);
    this.presente = true;
    
    //Establecemos sensacion de profundidad
    this.setDepth(1); 

    //Creamos el dialogo
    this.dialog = new Dialog(this.scene, dialogId);

    this.on('pointerdown', () => {
      if (this.scene.locked === false) {
        scene.scene.get('diary').addObject(this.info);
        this.presente = false;
        this.dialog.initDialog();
        this.destroy();
      }
    });
  }
  
 
}