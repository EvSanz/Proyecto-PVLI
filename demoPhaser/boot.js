//Js importados
import Clock from './Utils/clock.js';
import DialogManager from './Test/dialogmanager.js'
import ObjectManager from './Objects/objectmanager.js'

/** Constructor:
* Metodos:
* @method consultamanager Devuelve el manager de dialogo
* @method consultClock Devuelve el reloj
*/

//Escena encargada de cargar e inicializar recursos
export default class Boot extends Phaser.Scene {
  constructor() {
    super({
      key: 'boot'
    });
  }

  preload() {

    //Cargamos los sprites sueltos
    this.load.setPath('Imagenes/');
    this.load.image('tetera', 'tetera.png');
    this.load.image('player', 'inspector.png');
    this.load.image('ventanas', 'ventanas.png');
    this.load.image('puerta', 'door.png');
    this.load.image('ui', 'ui.png');
    this.load.image('guille', 'guille.png');
    this.load.image('puertafun', 'workingdoor.png');
    this.load.image('puertafunlat', 'workingsidedoor.png');
    this.load.image('puertafunlat2', 'workingsidedoor2.png');
    this.load.image('fondopt', 'fondopt.png');
    this.load.image('diary', 'diario.png');
    this.load.image('infopanel', 'infopanel.png');
    this.load.image('fondo', 'fondo.png');
    this.load.image('menuprincipal', 'menuprincipal.png');
    this.load.image('menuopciones', 'menuopciones.png');
    this.load.image('creditos', 'creditos.png');

    //Cargamos las hojas de sprites
    this.load.spritesheet('checkbox', 'checkbox.png', {
      frameWidth: 48,
      frameHeight: 48
    });
    this.load.spritesheet('botones', 'botones.png', {
      frameWidth: 240,
      frameHeight: 48
    });
    this.load.spritesheet('background', 'backgroundspritesheet.png', {
      frameWidth: 352,
      frameHeight: 352
    });
    this.load.spritesheet('npcs', 'npcspritesheet.png', {
      frameWidth: 115,
      frameHeight: 224
    });
    this.load.spritesheet('objects', 'objectsspritesheet.png', {
      frameWidth: 192,
      frameHeight: 192
    });
    this.load.spritesheet('clockanim', 'clockanim.png', {
      frameWidth: 110,
      frameHeight: 110
    });
    this.load.spritesheet('irritacion', 'barrairritacion.png', {
      frameWidth: 192,
      frameHeight: 24
    });

    //Cargamos el audio
    this.load.setPath('sonidos/');
    this.load.audio('suspenseFondo', 'suspense.mp3');
    this.load.audio('reloj', 'clocks.wav');
    this.load.audio('musicafondo', 'musicafondoo.mp3');
    this.load.audio('musicafondopt', 'investigationmusic.mp3');
    this.load.audio('goodmusic', 'victorimusic.mp3');
    this.load.audio('badmusic', 'defeatmusic.mp3');
    this.load.audio('choochoo', 'whistle.mp3');
    this.load.audio('menumusic', 'menumusic.mp3');
    this.load.audio('pies', 'footsteps.wav');

    //Cargamos los json 
    this.load.setPath('Jsons/');
    this.load.json('dialogue', 'dialogues.json');
    this.load.json('objects', 'objetos.json');
    this.load.json('personajes', 'personajes.json');

    //Cargamos los videos
    this.load.setPath('rsc/');
    this.load.video('Tutorial', 'Introduccion.mp4');
    this.load.video('Goodending', 'gending.mp4');
  }

  init() {
    this.game.npcholder= [{
      id: 0,
      dialogo: 1,
      anger: 0
  }, 
  {
      id: 1,
      dialogo: 13,
      anger: 0
  }, 
  {
      id: 2,
      dialogo: 3,
      anger: 0
  }, 
  {
      id: 3,
      dialogo: 22,
      anger: 0
  }, 
  {
      id: 4,
      dialogo: 5,
      anger: 0
  }, 
  {
      id: 5,
      dialogo: 8,
      anger: 0
  }, 
  {
      id: 6,
      dialogo: 10,
      anger: 0
  }, 
  {
      id: 7,
      dialogo: 19,
      anger: 0
  }, 
  {
      id: 8,
      dialogo: 20,
      anger: 0
  }, 
  {
      id: 9,
      dialogo: 17,
      anger: 0
  }, 
  {
      id: 10,
      dialogo: 15,
      anger: 0
  },
  {
      id: 11,
      dialogo: 0,
      anger: 0
  }
];
  }
  create() {

    //Creamos un nuevo reloj, manager de dialogos y manager de objetos
    //this.dmanager = new DialogManager();
    this.clock = new Clock(this);
    this.gomanager = new ObjectManager();

    //Iniciamos el juego en la escena del menu principal
    this.scene.start('mainmenu');

    //Asignamos los json a variables
    this.myDialog = this.cache.json.get('dialogue');
    this.myObjects = this.cache.json.get('objects');
    this.myCharacters = this.cache.json.get('personajes');

    //Creamos un array de booleanos de objetos
    this.presente = new Array(this.myObjects.Objetos.length).fill(true);
  }


  //Metodo para devolver el manager de dialogos
  consultamanager() {return this.dmanager; }


  //Metodo para devolver el reloj
  consultClock() {return this.clock; }
}