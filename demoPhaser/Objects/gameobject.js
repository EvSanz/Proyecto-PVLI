import Dialog from '../Utils/dialog.js';

//Clase encargada de gestionar los GameObject
export default class GameObject extends Phaser.GameObjects.Sprite {
  
  /**Constructor de GameObject
   * @param {Sceme} scene Escena 
   *@param {string} sprite Sprite
    * @param {number} x Coordenada X
    * @param {number} y Coordenada Y
    * @param {bool} clickable ¿Es clickeable?
    * @param {bool} chocante ¿Necesita detectar colisiones?
    * @param {bool} presente estará a true si el objeto todavia no se ha recogido y debe aparecer en la escena
    */

  constructor(scene, x, y, sprite, clickable, chocante) {
    
    //Si es un objeto clickeable, lo convertimos en interactivo
    if (clickable) { super(scene, x, y, sprite).setInteractive();}
    
    //Si no, nos limitamos a cargarlo en la escena 
    else { super(scene, x, y, sprite);}

    this.desc = 'este texto deberia salir del json pero ni se lee el json de objetos :v'

    this.scene.add.existing(this);
    this.presente = true;
    this.setDepth(1); //para que aparezca encima del fondo igual que el npc
    this.sprite = sprite;
    
    //Creamos el dialogo
    this.dialog = new Dialog(this.scene, 24);

    //Si es un objeto que necesita sistema de 
    //colisiones, añadimos las físicas de movimiento
    if (chocante) { this.scene.physics.add.existing(this, true);}

    this.on('pointerdown', ()=>
    {
      scene.scene.get('diary').addObject(this);
      this.presente = false;
      this.dialog.initDialog();
      this.destroy();
    });
  }
}
