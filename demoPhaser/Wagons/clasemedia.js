import Wagon from './wagon.js';
import Door from '../Utils/door.js';
import Npc from '../NPCs/npc.js';

export default class ClaseMedia extends Wagon {
    constructor() { 
      super('clasemedia', false, 26, 26, 26, 'clasebaja', 'cafeteria',);
    }
    spawnNPCs()
    {
      this.npc=new Npc(this,160,238,0,this.scene.get('boot').dmanager.npcinfoholder[0].anger,14,2);
      this.npc2=new Npc(this,390,238,1,this.scene.get('boot').dmanager.npcinfoholder[1].anger,11,1);
      this.npc3=new Npc(this,590,238,1,this.scene.get('boot').dmanager.npcinfoholder[1].anger,24,6);

    }
    spawnObjects()
    {
       let mortondoor;
       this.mortondoor= new Door(this,120,222,'habitacionmorton','puertafun');
       this.mortondoor2= new Door(this,440,222,'habitacioncollins','puertafun');
       this.mortondoor3= new Door(this,780,222,'habitacionbold','puertafun');
       



    }
}
