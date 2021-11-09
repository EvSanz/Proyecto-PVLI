import Player from './player.js';
import Platform from './platform.js';
import Tetera from './tetera.js'
//import Base from './base.js'
import Door from './door.js'
import Boton from './boton.js'
import Scene from './scene.js'

export default class Diary extends Phaser.Scene {
  /**
   * Constructor de la escena
   */
  constructor() {

    super({ key: 'diary' });

    this.tetera = false;
    
  }

  init(actualScene){

    this.currentScene = actualScene;

  }

  preload() {
    
  }

  create() {

    this.events.on('teteraObtenida', () => {this.tetera = true;});      //esto no funciona :v

    this.q = this.input.keyboard.addKey('Q');                                 //Volver a la escena anterior
    this.q.on('down', cierraDiario => {
      this.scene.stop();
      this.scene.resume(this.currentScene);
    })
    
    this.add.sprite(500,260,'diary')
    
    if (this.tetera == true){                          //Posiciones en orden: x; 105, 210, 315, 420;    y; 125, 230, 335;   Habra que hacer los sprites un poquito mas pequeños
      this.add.sprite(105,125,'star')
    }
  }
}
