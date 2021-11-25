//Escena encargada de cargar los assets del juego
import Clock from './Utils/clock.js';

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
    this.load.spritesheet('objects', 'objectsspritesheet.png', { frameWidth: 64, frameHeight: 64 });
    this.load.setPath('Jsons/');
    this.load.text('dialogue', 'dialogues.json');
    this.load.text('objects', 'objetos.json');
    this.load.text('personajes', 'personajes.json');

    
  }

//Creación de los elementos fijos de la escena 
  create() 
  {
    this.scene.start('clasebaja', 400);

    this.clock = new Clock(this.scene.get('clasebaja'));
  }
}
