//Escena encargada de cargar los assets del juego
import Clock from './Utils/clock.js';
import Npc from './NPCs/npc.js';
import DialogManager from './Test/dialogmanager.js'
import ObjectManager from './Objects/objectmanager.js'
import GO from './Objects/gameobject.js'
import Dialog from './Utils/dialog.js';
import t, {Info} from './info.js'
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
    
    this.load.setPath('sonidos/');
    this.load.audio('suspenseFondo', 'suspense.mp3');
    this.load.audio('reloj', 'clocks.wav');
    this.load.audio('pies', 'footsteps.mp3');

    this.load.setPath('Jsons/');
    this.load.json('dialogue', 'dialogues.json');
    this.load.json('objects', 'objetos.json');
    this.load.json('personajes', 'personajes.json');

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

    this.myDialog = null;
    this.myObjects = null;
    this.myCharacters = null;
  //En este bucle se leen los json de dialogos y personajes para crear cada personajes con su dialogo asociado
  //el id de cada npc corresponde con el indice del bucle (i) deben crearse en el orden del gdd para que no nso volvamos locos
    
  this.leerjson("Jsons/dialogues.json", this.procesajson, this.myDialog);
  this.leerjson("Jsons/personajes.json", this.procesajson, this.myCharacters);

  for (let i = 0; i < 12; i++) 
    {
      //leeremos los datos del np del json de personajes(NO BORRAR ESTÁ EN PROCESO)
      let x = 0;
      let y = 0;
      let scene = 'clasebaja'; 
      //this.myObjects = Info.cargaInfo(this.cache.json.get('objects'));
      //this.myData = Info.cargaInfo(this.cache.json.get('dialogue'));
      // console.log("Dialog: ", this.myData.Dialogues[0]); //Traza para comprobar que Dialogues es accesible y tiene contenido  

      let dialog = new Dialog('clasebaja', 1);
      this.npc = new Npc(this.scene.get(scene), x, y, i);
      this.dmanager.acoplarnpc(this.npc);
    }

    this.leerjson("Jsons/objetos.json", this.procesajson, this.myObjects);
    //Bucle de objetos
    for (let j=0;j<16;j++)
    {
    //cositas que tienes qeu leer del json 
    let scene;//habitacion donde aparece el objeto
    //como la spritesheet esta en el orden del gdd el indice corresponde con el sprite de cada objeto (para los personajes igual)
    //la posicion del objeto
    let x=0;
    let y=0;
    this.object = new GO(this.scene.get(scene),x,y,i,true,false);// todos lo gameobjects EXCEPTO LAS PUERTAS  tendran los 2 ultimos parametros como "true,false"
    this.ObjectManager.acoplarobj(this.object);
    }
    this.scene.start('clasebaja', 400);

    //Creación aquí de personajes y objetos para cada vagón según la info de los jsons?
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
    variable = JSON.parse(valor); 
  }

  consultamanager() 
  { 
    return this.dmanager; 
  }

  consultClock()
  {
    return this.clock;
  }
}