import Door from './door.js'
import Player from './player.js';

//Clase para crear las escenas de point and click
export default class Levelpt extends Phaser.Scene {

    constructor() { super({ key: 'levelpt' });}

    //Creamos los elementos de la escena
    create()
    {
      this.add.sprite (500, 200, 'fondopt');

      let uisuelo; 
      uisuelo = this.add.sprite(500, 450, 'ui');

      //Creamos la puerta
      this.door = new Door(this, 140, 225, 'level');

      //Creacion del jugador
      this.player = new Player(this, 300, 240, false);

      //Añadimos la fisicas y los colliders al suelo
      this.physics.add.existing(uisuelo, true);
      this.physics.add.collider(this.player, uisuelo);
    }

}