import Dialog from '../Utils/dialog.js';

//Clase encargada de gestionar los GameObject
export default class GO extends Phaser.GameObjects.Sprite {
  
  /**Constructor de GameObject
   * @param {Sceme} scene Escena 
   *@param {string} sprite Sprite
    * @param {number} x Coordenada X
    * @param {number} y Coordenada Y
    * @param {bool} clickable ¿Es clickeable?
    * @param {bool} chocante ¿Necesita detectar colisiones?
    */

  constructor(scene, x, y, sprite, clickable, chocante ) {

    //Si es un objeto clickeable, lo convertimos en interactivo
    if (clickable) { super(scene, x, y, sprite).setInteractive();}
    
    //Si no, nos limitamos a cargarlo en la escena 
    else { super(scene, x, y, sprite);}

    this.scene.add.existing(this);

    this.sprite = sprite;
    
    //Creamos el dialogo
    this.dialog = new Dialog(this.scene, 24);

    //Si es un objeto que necesita sistema de 
    //colisiones, añadimos las físicas de movimiento
    if (chocante) { this.scene.physics.add.existing(this, true);}

    this.on('pointerdown', ()=>
    {
      scene.scene.get('diary').addObject(this);
      this.dialog.talk();
      this.destroy();
    });

    
  }
}
