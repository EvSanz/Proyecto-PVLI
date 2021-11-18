//Js importados
import Diario from './diario.js'
import Clock from './clock.js';
import Wagon from './wagon.js';
import ClaseBaja from './clasebaja.js';

//Escena encargada de cargar los assets del juego
export default class Boot extends Phaser.Scene {
  constructor() { super ({key: 'boot'});}

  preload() 
  {
    this.load.setPath('Imagenes/');
    this.load.image('tetera', 'tetera.png');
    this.load.image('player', 'inspector.png');
    this.load.image('ventanas', 'ventanas.png');
    this.load.image('puerta', 'door.png');
    this.load.image('ui', 'ui.png');
    this.load.image('guille', 'guille.png');
    this.load.image('puertafun', 'workingdoor.png');
    this.load.image('fondopt', 'fondopt.png');
    this.load.image('diary', 'diario.png');
    this.load.spritesheet('background', 'backgroundspritesheet.png', { frameWidth: 352, frameHeight: 352 });
    this.load.spritesheet('npcs', 'npcspritesheet1.png', { frameWidth: 220, frameHeight: 220 });
    this.load.setPath('Jsons/');
    this.load.text('dialogue', 'dialogues.json');
    this.load.text('objects', 'objetos.json');
    this.load.text('personajes', 'personajes.json');

    this.Diario = new Diario();
    //this.Clock = new Clock();
  }

//Creación de los elementos fijos de la escena 
  create() 
  {
    this.scene.start('diary');
    this.scene.sleep('diary');

    //this.scene.start('level')

    this.scene.start('clasebaja', 400);
  }
}
