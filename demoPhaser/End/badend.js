//Js importados 
import Wagon from "../Wagons/wagon.js";

//Escena del bad ending
export default class BadEnd extends Wagon {
  constructor() {
    super('badend', {
      isPointAndClick: true,
      spriteFondo1: 43,
      spriteFondo2: 42,
      spriteFondo3: 43,
      wagonIzq: 'boot'
    });

  }

  create() {
    super.create();

    //Detenemos la musica del juego
    this.game.sound.stopAll();

    //Añadimos la canción del bad ending a la escena
    this.musica = this.sound.add('badmusic', {
      volume: this.game.sound.volume * 0.5,
      loop: true
    });
    this.musica.play();

    this.backToMenu = new Phaser.GameObjects.Rectangle(this, 
      500, 256, 1000, 512, 0xfffffff, 0xfffffff).setInteractive();
    
    //Si hacemos click en la escena...
    this.backToMenu.on('pointerdown', () => {

      //Paramos el sonido de la escena y reiniciamos 
      //el juego
      this.game.sound.stopAll();
      this.scene.start('boot');
    })
  }
}