export default class Door extends Phaser.GameObjects.Sprite {
  
    //constructor para lapuerta
    //gotoscene es la escena a la que vas por esta puerta
        /**
   * 
   * @param {Phaser.Scene} scene Escena en la que se coloca la puerta
   * @param {Platform} gotoscene Escena a la que te lleva la puerta
   * @param {number} x Coordenada x
   * @param {number} y Coordenada y 
   
   */
    constructor(scene,x,y,gotoscene ) {
        
      super(scene,x,y, 'puertafun');
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this, true);
      this.gotoscene = gotoscene;
      this.scene.physics.add.existing(this, true);

      this.graphics = new Phaser.GameObjects.Rectangle(this.scene, 140, 225, 200, 200, 0xfffffff, 0xfffffff);
      this.graphics.setInteractive();
      //this.y -= this.height;
     // this.base = base;
  

    }
    preUpdate()
    {
      this.graphics.on('pointerdown', () => 
      {
        if (this.scene.physics.overlap(this.scene.player, this)) {
          console.log("QUIERES ABRIR LA PUERTA?");
          this.scene.scene.start(this.gotoscene);
        }
      });
    }
}