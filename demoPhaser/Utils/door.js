//Clase encargada de gestionar la puerta
export default class Door extends Phaser.GameObjects.Sprite {

  
/**
 * @extends Phaser.GameObjects.Sprite
 * @class Door
 * @param {Wagon} scene Vagon en el que se encuentra la puerta
 * @param {number} x Posición x de la puerta
 * @param {number} y Posición y de la puerta
 * @param {Phaser.scene} gotoscene Escena a la que lleva esta puerta
 * @param {string} foto Sprite del gameobject
 * @description Objetos para cambiar de un vagón a otro
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

    //Introducimos el comando E
    this.e = this.scene.input.keyboard.addKey('E');

    //Si pulsamos E o hacemos click, abrimos la puerta
    this.e.on('down', () => {this.openDoor(); });
    this.graphics.on('pointerdown', () => {this.openDoor(); });
  }



  preUpdate() {

    //Si la puerta es una de los extremos...
    if (this.foto === 'puertafunlat' || this.foto === 'puertafunlat2') {

      //Y el jugador esta en colision con ellas, paramos la musica...
      if (this.scene.physics.overlap(this.scene.player, this)
      && this.scene.player.canMove) {
        this.scene.stopMusic();

        //E posicionamos al jugador en diferentes posiciones
        //dependiendo de la puerta
        if (this.foto === 'puertafunlat') {this.scene.scene.start(this.gotoscene, 850); }
        else {this.scene.scene.start(this.gotoscene, 150); }         
      }
    }
  }


  /**
   * @method openDoor
   * @description Pasa a la siguiente escena si el player la está tocando
   * @memberof Door
   */
  openDoor()
  {
    //Si el jugador esta colisionando con la puerta, paramos
    //la musica y cargamos la nueva escena
    if (this.scene.physics.overlap(this.scene.player, this)
    && this.scene.player.canMove) {
      this.scene.stopMusic();
      this.scene.scene.start(this.gotoscene);
    }
  }
}
