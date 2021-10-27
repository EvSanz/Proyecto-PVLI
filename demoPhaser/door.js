export default class Door extends Phaser.GameObjects.Sprite {
  
    //constructor para lapuerta
    //gotoscene es la escena a la que vas por esta puerta
    constructor(scene,x,y,gotoscene ) {
        
      super(scene,x,y, 'puerta');
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this, true);
      this.gotoscene=gotoscene;//es al key para el super de la escena creo
      this.scene.physics.add.existing(this, true);
      //this.y -= this.height;
     // this.base = base;
  

    }
}