import Wagon from './wagon.js';
import Npc from '../NPCs/npc.js';
export default class Cafeteria extends Wagon {
    constructor() { 
      super('cafeteria', false, 'ventanas', 'ventanas', 'ventanas', 'clasemedia', 'clasealta',);
    }
     //Sobreescribimos los métodos que estan en wagon
  spawnNPCs(){
      
    //this.npc = new Npc (this, 650, 230, 1);
    //this.dmanager= new DialogManager();
    //this.dmanager.Acoplarnpc(this.npc);
    this.npc=new Npc(this,160,238,0,this.scene.get('boot').dmanager.npcinfoholder[0].anger,27,8);
    this.npc2=new Npc(this,360,238,0,this.scene.get('boot').dmanager.npcinfoholder[0].anger,31,10);
    // this.scene.add(this.npc);

  }

  spawnObjects(){    
    this.add.sprite(180, 262, 'objects', [3]);
    this.add.sprite(320, 262, 'objects', [2]);
    this.add.sprite(520, 262, 'objects', [2]);
    this.add.sprite(690, 262, 'objects', [3]);
    this.add.sprite(830, 262, 'objects', [2]);
    
  }
}