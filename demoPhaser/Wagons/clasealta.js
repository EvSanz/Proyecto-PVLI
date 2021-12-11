import Wagon from './wagon.js';
import Door from '../Utils/door.js';
import Npc from '../NPCs/npc.js';
export default class ClaseAlta extends Wagon
 {
    constructor() { 
      super('clasealta', false, 26, 26, 26, 'cafeteria', 'locomotora',);
    }
    spawnNPCs()
    {
      this.npc=new Npc(this,160,238,0,this.scene.get('boot').dmanager.npcinfoholder[0].anger,21,5);
      this.npc2=new Npc(this,460,238,0,this.scene.get('boot').dmanager.npcinfoholder[0].anger,19,3);
      this.npc3=new Npc(this,660,238,0,this.scene.get('boot').dmanager.npcinfoholder[0].anger,17,4);

    }
    spawnObjects()
   {   let mortondoor;
      this.mortondoor= new Door(this,120,222,'habitacionyan','puertafun');
      this.mortondoor2= new Door(this,440,222,'habitacionanthony','puertafun');
      this.mortondoor3= new Door(this,780,222,'habitacionhaines','puertafun');
      
   }


   
}