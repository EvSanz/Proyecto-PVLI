import Dialog from '../Utils/dialog.js';

//Clase encargada de gestionar los GameObject
export default class GameObject extends Phaser.GameObjects.Sprite {
  
  /**Constructor de GameObject
   * @param {Sceme} scene Escena 
   *@param {int} sprite Sprite
    * @param {number} x Coordenada X
    * @param {number} y Coordenada Y
    * @param {bool} clickable ¿Es clickeable?
    * @param {bool} chocante ¿Necesita detectar colisiones?
    * @param {bool} presente estará a true si el objeto todavia no se ha recogido y debe aparecer en la escena
    */

  constructor(scene, x, y, sprite, id, clickable) {
  
    super(scene, x, y, 'objects', [sprite]);
    //Si es un objeto clickeable, lo convertimos en interactivo
    if (clickable) 
    { 
      this.setInteractive();
    }

    this.info = this.scene.scene.get('boot').myObjects.Objetos[id];

    this.scene.add.existing(this);
    this.presente = true;
    this.setDepth(1); //para que aparezca encima del fondo igual que el npc
    
    //Creamos el dialogo
    this.dialog = new Dialog(this.scene, 24);

    this.on('pointerdown', ()=>
    {
      scene.scene.get('diary').addObject(this.info);
      this.presente = false;
      this.dialog.initDialog();
      this.destroy();
    });
  }
}
