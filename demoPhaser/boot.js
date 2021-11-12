import Diario from './diario.js'

/**
 * Escena para la precarga de los assets que se usarán en el juego.
 * Esta escena se puede mejorar añadiendo una imagen del juego y una 
 * barra de progreso de carga de los assets
 * @see {@link https://gamedevacademy.org/creating-a-preloading-screen-in-phaser-3/} como ejemplo
 * sobre cómo hacer una barra de progreso.
 */
export default class Boot extends Phaser.Scene {
  /**
   * Constructor de la escena
   */
  constructor() {
    super({ key: 'boot' });
  }

  /**
   * Carga de los assets del juego
   */
  preload() {
    // Con setPath podemos establecer el prefijo que se añadirá a todos los load que aparecen a continuación
    this.load.setPath('Imagenes/');
    //this.load.image('platform', 'platform');
    //this.load.image('base', 'platform');
    this.load.image('tetera', 'tetera.png');
    this.load.image('player', 'inspector.png');
    this.load.image('ventanas', 'ventanas.png');
    this.load.image('puerta', 'door.png');
    this.load.image('ui','ui.png');
    this.load.image('guille','guille.png');
    this.load.image('puertafun','workingdoor.png');
    this.load.image('fondopt','fondopt.png');
    this.load.image('diary','diario.png');
    this.load.spritesheet('background','backgroundspritesheet.png',{ frameWidth: 352, frameHeight: 352 });
    this.load.spritesheet('npcs','npcspritesheet1.png',{ frameWidth: 220, frameHeight: 220 });
    this.load.setPath('Jsons/');
    this.load.text('dialogue', 'dialogues.json');
    this.load.text('objects', 'objetos.json');

    this.Diario = new Diario();
    
  }

  /**
   * Creación de la escena. En este caso, solo cambiamos a la escena que representa el
   * nivel del juego
   */
  create() {
    this.scene.start('diary');
    this.scene.sleep('diary');
    this.scene.start('level');
  }
}
