//Escena encargada de cargar los assets del juego
import Clock from './Utils/clock.js';
import Npc from './NPCs/npc.js';
import DialogManager from './Test/dialogmanager.js'
import ObjectManager from './Objects/objectmanager.js'
import GO from './Objects/GameObject.js'
import Dialog from './Utils/dialog.js';
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
    this.load.image('puertafunlat','workingsidedoor.png');
    this.load.image('puertafunlat2','workingsidedoor2.png');
    this.load.image('fondopt', 'fondopt.png');
    this.load.image('diary', 'diario.png');
    this.load.image('infopanel', 'infopanel.png');

    this.load.spritesheet('background', 'backgroundspritesheet.png', { frameWidth: 352, frameHeight: 352 });
    this.load.spritesheet('npcs', 'npcspritesheet.png', { frameWidth: 140, frameHeight: 224 });
    this.load.spritesheet('objects', 'objectsspritesheet.png', { frameWidth: 192, frameHeight: 192 });
    
    this.load.setPath('Jsons/');
    this.load.text('dialogue', 'dialogues.json');
    this.load.text('objects', 'objetos.json');
    this.load.text('personajes', 'personajes.json');

  }

//Creación de los elementos fijos de la escena 
  create() 
  {
    
    this.dmanager = new DialogManager();

    //this.clock = new Clock(this.scene.get('clasebaja'));
    this.clock= new Clock(this)
    this.npc = new Npc(this.scene.get('clasebaja'), 650, 230, 1);
    this.dmanager.acoplarnpc(this.npc);

    this.gomanager = new ObjectManager();
    this.object = new GO(this.scene.get('clasebaja'), 600, 265, 'tetera', true, true);
    this.gomanager.acoplarobj(this.object);

    this.scene.start('clasebaja', 400);

    this.myData = null;

    for (let i = 0; i < 12; i++) 
    {
      //leeremos los datos del np del json de personajes(NO BORRAR ESTÁ EN PROCESO)
      let x = 0;
      let y = i;
      let scene = 'clasebaja';
      this.leerjson("Jsons/dialogues.json", this.procesajson, this);
      this.leerjson("Jsons/dialogues.json", this.procesajson, this);
      this.leerjson("Jsons/dialogues.json", this.procesajson, this);

      let dialog = new Dialog('clasebaja', 1);
      this.npc = new Npc(this.scene.get(scene), x, y, i);
      this.dmanager.acoplarnpc(this.npc);
    }
    this.scene.start('clasebaja', 400);
  }

  leerjson(json, postlectura, variable)
  {
    console.log("Leyendo json en boot");
    let rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", json, true);
    rawFile.onreadystatechange = function() 
    {
        if (rawFile.readyState === 4 && rawFile.status == "200") 
        { postlectura(rawFile.responseText, variable);}
        
    }

    rawFile.send(null);

  } 

  procesajson(valor, variable) 
  {
    variable.myData = JSON.parse(valor); 
  }

  consultamanager() 
  { 
    return this.dmanager; 
  }

  consultclock()
  {
    return this.clock;
  }
}
