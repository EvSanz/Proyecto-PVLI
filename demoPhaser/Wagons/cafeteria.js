import Wagon from './wagon.js';
import Npc from '../NPCs/npc.js';
import GameObject from '../Objects/gameobject.js';

export default class Cafeteria extends Wagon {
    constructor() { 
      super('cafeteria', false, 'ventanas', 'ventanas', 'ventanas', 'clasemedia', 'clasealta',);
    }
     //Sobreescribimos los métodos que estan en wagon
  spawnNPCs(){
      
    //this.npc = new Npc (this, 650, 230, 1);
    //this.dmanager= new DialogManager();
    //this.dmanager.Acoplarnpc(this.npc);
    this.npc=new Npc(this,160,238,6,this.scene.get('boot').dmanager.npcinfoholder[8].anger,27,10);
    this.npc2=new Npc(this,360,238,7,this.scene.get('boot').dmanager.npcinfoholder[10].anger,31,19);
    // this.scene.add(this.npc);

  }

  spawnObjects(){    

    this.objs = this.scene.get('boot').myObjects;
    console.log("Objs: ", this.objs.Objetos);

    this.objects = [];

    this.add.sprite(180, 262, 'objects', [3]);
    this.add.sprite(320, 262, 'objects', [2]);
    this.add.sprite(520, 262, 'objects', [2]);
    this.add.sprite(690, 262, 'objects', [3]);
    this.add.sprite(830, 262, 'objects', [2]);

    let j = 0;

    for (let i = 0; i < this.objs.Objetos.length; ++i)
    {
      if(this.objs.Objetos[i].vagon == this.scene.key)
        this.objects[j++] = new GO(this, this.objs.Objetos[i].posX, this.objs.Objetos[i].posY, this.objs.Objetos[i].desc, true, false);
    }

    console.log("Objetos en escena: ", this.objects);
  }
}