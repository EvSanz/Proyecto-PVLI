import Wagon from './wagon.js';
import Door from '../Utils/door.js';
import Npc from '../NPCs/npc.js';
import GameObject from '../Objects/gameobject.js';

export default class ClaseMedia extends Wagon {
    constructor() { 
      super('clasemedia', false, 26, 26, 26, 'clasebaja', 'cafeteria',);
    }
    spawnNPCs()
    {
      this.npc=new Npc(this,160,238,0,this.scene.get('boot').dmanager.npcinfoholder[2].anger,14,2);
      this.npc2=new Npc(this,390,238,1,this.scene.get('boot').dmanager.npcinfoholder[1].anger,11,1);
      this.npc3=new Npc(this,590,238,1,this.scene.get('boot').dmanager.npcinfoholder[6].anger,24,6);

    }
    spawnObjects()
    {
      this.objs = this.scene.get('boot').myObjects;
      console.log("Objs: ", this.objs.Objetos);
  
      this.objects = []; 
  
        let j = 0;
  
        for (let i = 0; i < this.objs.Objetos.length; ++i)
        {
          if(this.objs.Objetos[i].vagon == this.scene.key)
            this.objects[j++] = new GO(this, this.objs.Objetos[i].posX, this.objs.Objetos[i].posY, this.objs.Objetos[i].desc, true, false);
        }
    
        console.log("Objetos en escena: ", this.objects);


       let mortondoor;
       this.mortondoor= new Door(this,120,222,'habitacionmorton','puertafun');
       this.mortondoor2= new Door(this,440,222,'habitacioncollins','puertafun');
       this.mortondoor3= new Door(this,780,222,'habitacionbold','puertafun');
    }
}
