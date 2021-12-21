//Js importados 
import Wagon from "../Wagons/wagon.js";

//Escena del good ending
export default class GoodEnd extends Wagon {
  constructor() {
    super('goodend', {
      isPointAndClick: true,
      spriteFondo1: 43,
      spriteFondo2: 41,
      spriteFondo3: 43,
      wagonIzq: 'boot'
    });

    this.backToMenu = null; 
    //this.skipVideo = null; 
  }

  create() {
    super.create();

    //Detenemos el sonido del juego 
    this.game.sound.stopAll();

    //Empezamos a reproducir el video de explicacion del crimen 
    this.video = this.add.video(500, 256, 'Goodending');
    this.video.setScale(0.78);
    this.video.play();
    this.video.setPaused(false);

    this.endingKey = this.input.keyboard.addKeys({
      esc: Phaser.Input.Keyboard.KeyCodes.ESC
    });

    
    //this.skipVideo = new Phaser.GameObjects.Rectangle(this, 500, 256, 1000, 512, 0xfffffff, 0xfffffff).setInteractive();
    //this.skipVideo.on('pointerdown', () => {
    //  this.finalizarVideo(this.video);
    //})

    //Si pulsamos Escape mientras está reproduciendose el vídeo...
    this.endingKey.esc.on('down', () => {
      this.finalizarVideo(this.video);
    });

    //O terminamos de ver el video, llamamos al metodo de finalizacion
    //del video 
    this.video.on('complete', () => {
      this.finalizarVideo(this.video);
    });
  }

  //Metodo para finalizar el video 
  finalizarVideo(video)
  {
    this.vid = video; 

    //Añadimos la música de victoria
    this.musica = this.sound.add('goodmusic', {
    volume: this.game.sound.volume * 0.5,
    loop: true
    });
    
    //Empezamos a reproducir el tema de victoria
    this.musica.play();
    
    //Y destruimos el video 
    this.vid.destroy();

    this.createSub(); 
  }

  //Metodo para pasar a la siguiente pantalla
  createSub()
  {
    //Destruimos la caja de interaccion
    //this.skipVideo.destroy(); 
    //Y creamos una nueva
    this.backToMenu = new Phaser.GameObjects.Rectangle(this, 500, 256, 1000, 512, 0xfffffff, 0xfffffff).setInteractive();
    
    //Si hacemos click en la escena...
    this.backToMenu.on('pointerdown', () => {
  
      //Paramos el sonido del juego
      this.game.sound.stopAll();
      //Destruimos la caja de interaccion
      this.backToMenu.destroy(); 
      //Y lo reiniciamos 
      this.scene.start('boot');
    })
  }
}