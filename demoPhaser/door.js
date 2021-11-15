//Clase encargada de gestionar la puerta
export default class Door extends Phaser.GameObjects.Sprite {

   /**Constructor de la puerta
   * @param {Phaser.Scene} scene Escena inicial
   * @param {Platform} gotoscene Siguiente escena
   * @param {number} x Coordenada x
   * @param {number} y Coordenada y 
   */

    constructor(scene, x, y, gotoscene) {
      super(scene, x, y, 'puertafun');

      //Añadimos el objeto y sus fisicas a la escena
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this, true);

      //Establecemos la variable que conduce
      //a la siguiente escena
      this.gotoscene = gotoscene;
      this.scene.physics.add.existing(this, true);

      //Añadimos un bloque interactuable invisible 
      this.graphics = new Phaser.GameObjects.Rectangle
      (this.scene, 140, 225, 200, 200, 0xfffffff, 0xfffffff);
      this.graphics.setInteractive();

      //this.y -= this.height;
      // this.base = base;
    }

    preUpdate()
    {
      //Si hacemos click en el area interactuable...
      this.graphics.on('pointerdown', () => 
      {
        //Y el jugador está dentro del rango, cargamos 
        //la siguiente escena
        if (this.scene.physics.overlap(this.scene.player, this)) 
        { this.scene.scene.start(this.gotoscene);}
      });
    }
}