import Player from './player.js';
import Platform from './platform.js';
import Star from './star.js'
import Base from './base.js'
import Door from './door.js'
import Boton from './boton.js'
import Scene from './scene.js'

export default class Diary extends Phaser.Scene {
  /**
   * Constructor de la escena
   */
  constructor(currentScene) {


    super({ currentScene, key: 'diary' });    //No le llega currentScene, dice que es undefined
    this.currentScene = currentScene;
    
    console.log(this.currentScene);
    
  }

  preload() {

    // Con setPath podemos establecer el prefijo que se añadirá a todos los load que aparecen a continuación
    this.load.setPath('Imagenes/');
    //this.load.image('platform', 'platform');
    //this.load.image('base', 'platform');
    this.load.image('star', 'tetera.png');
    this.load.image('diary', 'diario.png');
    
    this.load.setPath('Jsons/');
    this.load.text('objects', 'objetos.json');
    
  }

  create() {
    //this.stars = 10;


    this.Boton= new Boton(this ,850 ,400, 'level');   //Aqui le deberia llegar una referencia a currentScene, no 'level' directamente

    //this.bases = this.add.group();
    console.log("Abres el diario y no ves nada por que odio javascript");
    //let uisuelo;
    //let puerta;
    //this.add.sprite(150,150,'puerta');
    this.add.sprite(500,300,'diary')

    if (this.tetera === true){                          //Asi con una cadena de ifs se colocan los objetos
        this.add.sprite(500,300,'star')
    }
    //this.door= new Door(this,140,225,'levelpt');
    //this.add.sprite(480,174,'ventanas');
    //this.add.sprite(830,174,'ventanas');
    //uisuelo=this.add.sprite(500,450,'ui');
    //this.add.sprite(880,230,'guille');
    //this.player = new Player(this, 400, 240);
    //this.tetera = new Star (this,600,265);
    //new Base(this,150,600);
    //this.physics.add.existing(uisuelo, true);
    //this.physics.add.collider(this.player, uisuelo);
  }

}