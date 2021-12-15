import Wagon from './wagon.js';
import Door from '../Utils/door.js';
import Npc from '../NPCs/npc.js';
import GameObject from '../Objects/gameobject.js';

export default class ClaseAlta extends Wagon
 {
    constructor() { 
      super('clasealta', false, 26, 26, 26, 'cafeteria', 'locomotora',);
    }
    spawnNPCs()
    {
      this.npc=new Npc(this, 160, 238, 8, this.scene.get('boot').dmanager.npcinfoholder[5].anger, 21, 17);
      this.npc2=new Npc(this, 460, 238, 9, this.scene.get('boot').dmanager.npcinfoholder[3].anger, 19, 13);
      this.npc3=new Npc(this, 660, 238, 10, this.scene.get('boot').dmanager.npcinfoholder[4].anger, 17, 20);

      console.log("Scene Clase Alta: ", this.scene.key);

    }
    spawnObjects()
   {
      let mortondoor;
      this.mortondoor= new Door(this,120,222,'habitacionyan','puertafun');
      this.mortondoor2= new Door(this,440,222,'habitacionanthony','puertafun');
      this.mortondoor3= new Door(this,780,222,'habitacionhaines','puertafun');
      
   }


   
}