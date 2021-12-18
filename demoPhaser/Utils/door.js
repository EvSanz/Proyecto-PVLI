//Clase encargada de gestionar la puerta
export default class Door extends Phaser.GameObjects.Sprite {

  /**Constructor de la puerta
  * @param {Phaser.Scene} scene Escena inicial
  * @param {Scene} gotoscene Siguiente escena
  * @param {number} x Coordenada x
  * @param {number} y Coordenada y 
  */

  constructor(scene, x, y, gotoscene, foto) {

    super(scene, x, y, foto);

    this.foto = foto;

    //Añadimos el objeto y sus fisicas a la escena
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this, true);

    //Establecemos la variable que conduce
    //a la siguiente escena
    this.gotoscene = gotoscene;
    this.scene.physics.add.existing(this, true);

    //Añadimos un bloque interactuable invisible 
    this.graphics = new Phaser.GameObjects.Rectangle(this.scene, x, y, 200, 200, 0xfffffff, 0xfffffff);
    this.graphics.setInteractive();

    //Si pulsamos la e mientras tocamos la puerta
    this.e = this.scene.input.keyboard.addKey('E');
    this.e.on('down', () => {
      if (this.scene.physics.overlap(this.scene.player, this)) {
        this.scene.stopMusic();
        //Entra por la puerta
        this.scene.scene.start(this.gotoscene);
      }
    });


    //O si hacemos click en el area interactuable...
    this.graphics.on('pointerdown', () => {
      //Y el jugador está dentro del rango, cargamos 
      //la siguiente escena
      if (this.scene.physics.overlap(this.scene.player, this)) {
        this.scene.stopMusic();
        this.scene.scene.start(this.gotoscene);
      }
    });

  }
  preUpdate() {
    if (this.foto === 'puertafunlat' || this.foto === 'puertafunlat2') {
      if (this.scene.physics.overlap(this.scene.player, this)) {
        this.scene.stopMusic();
        if (this.foto === 'puertafunlat')
          this.scene.scene.start(this.gotoscene, 850);
        else
          this.scene.scene.start(this.gotoscene, 150);
      }
    }
  }
}