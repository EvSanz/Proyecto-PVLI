//Clase encargada de gestionar el diario
export default class Diary extends Phaser.Scene {
  constructor() { super({key: 'diary'});

      //Desactivamos los objetos que aparecen en el diario
      this.tetera; 
  }

  //Cargamos la escena inicial
  init (actualScene) { this.currentScene = actualScene;}

  activacionTetera (teteraActivada) { this.tetera = teteraActivada;}

  create() 
  {
    //Añadimos el sprite del boton del diario
    this.add.sprite(500, 260, 'diary');

    if (this.tetera) { this.add.sprite(105, 125, 'tetera');}

    //Añadimos el comando para desactivar el diario 
    this.q = this.input.keyboard.addKey('Q'); 
    this.q.on('down', cierraDiario => {
      this.scene.stop();
      this.scene.resume(this.currentScene);
    })
  }
}
