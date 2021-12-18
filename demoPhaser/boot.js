//Escena encargada de cargar los assets del juego
import Clock from './Utils/clock.js';
import Npc from './NPCs/npc.js';
import DialogManager from './Test/dialogmanager.js'
import ObjectManager from './Objects/objectmanager.js'
import GameObject from './Objects/gameobject.js'
import Dialog from './Utils/dialog.js';
export default class Boot extends Phaser.Scene {
  constructor() {
    super({
      key: 'boot'
    });
  }

  preload() {

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

    this.load.setPath('sonidos/');
    this.load.audio('suspenseFondo', 'suspense.mp3');
    this.load.audio('reloj', 'clocks.wav');
    this.load.audio('pies', 'footsteps.mp3');
    this.load.audio('musicafondo', 'musicafondoo.mp3');
    this.load.audio('musicafondopt', 'investigationmusic.mp3');
    this.load.audio('goodmusic', 'victorimusic.mp3')
    this.load.audio('badmusic', 'defeatmusic.mp3')
    this.load.audio('choochoo', 'whistle.mp3');
    this.load.audio('menumusic', 'menumusic.mp3')

    this.load.setPath('Jsons/');
    this.load.json('dialogue', 'dialogues.json');
    this.load.json('objects', 'objetos.json');
    this.load.json('personajes', 'personajes.json');

  }

  //Creación de los elementos fijos de la escena 
  create() {

    this.dmanager = new DialogManager();

    this.clock = new Clock(this);

    this.gomanager = new ObjectManager();

    this.scene.start('mainmenu');

    this.myDialog = this.cache.json.get('dialogue');
    this.myObjects = this.cache.json.get('objects');
    this.myCharacters = this.cache.json.get('personajes');
  }

  consultamanager() {
    return this.dmanager;
  }

  consultClock() {
    return this.clock;
  }
}