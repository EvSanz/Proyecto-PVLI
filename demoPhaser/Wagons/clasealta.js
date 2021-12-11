import Wagon from './wagon.js';
import Door from '../Utils/door.js';
import Npc from '../NPCs/npc.js';
import GO from '../Objects/gameobject.js';

export default class ClaseAlta extends Wagon
 {
    constructor() { 
      super('clasealta', false, 26, 26, 26, 'cafeteria', 'locomotora',);
    }
    spawnNPCs()
    {
      this.npc=new Npc(this,160,238,0,this.scene.get('boot').dmanager.npcinfoholder[5].anger,21,5);
      this.npc2=new Npc(this,460,238,0,this.scene.get('boot').dmanager.npcinfoholder[3].anger,19,3);
      this.npc3=new Npc(this,660,238,0,this.scene.get('boot').dmanager.npcinfoholder[4].anger,17,4);

      console.log("Scene Clase Alta: ", this.scene.key);

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
      this.mortondoor= new Door(this,120,222,'habitacionyan','puertafun');
      this.mortondoor2= new Door(this,440,222,'habitacionanthony','puertafun');
      this.mortondoor3= new Door(this,780,222,'habitacionhaines','puertafun');
      
   }


   
}