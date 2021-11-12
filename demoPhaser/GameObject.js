export default class GO extends Phaser.GameObjects.Sprite {
  
    /**
     * Constructor de GameObject
     * @param {Sceme} scene Escena en la que aparece el objeto
     *@param {string} sprite El sprite del objecto
     * @param {number} x coordenada x
     * @param {number} y coordenada y
     * @param {bool} clickable nos indica si será un objecto clickeable(=true) o no
     * @param {bool} chocante nos indica si es necesario detectar las colisiones de este objeto con el player (ej una puerta =true)
     */
    constructor(scene,x,y,sprite,clickable,chocante ) {
      if(clickable)
        super(scene,x,y, sprite).setInteractive();
    else 
    super(scene,x,y, sprite);

      this.scene.add.existing(this);
      if(chocante)
      this.scene.physics.add.existing(this, true);
  
      
  
      
     
    }
}