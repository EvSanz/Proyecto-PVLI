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
      this.npc=new Npc(this,160,238,3,this.scene.get('boot').dmanager.npcinfoholder[2].anger,14,22);
      this.npc2=new Npc(this,390,238,4,this.scene.get('boot').dmanager.npcinfoholder[1].anger,11,5);
      this.npc3=new Npc(this,590,238,5,this.scene.get('boot').dmanager.npcinfoholder[6].anger,24,8);

    }
    spawnObjects()
    {
       let mortondoor;
       this.mortondoor= new Door(this,120,222,'habitacionmorton','puertafun');
       this.mortondoor2= new Door(this,440,222,'habitacioncollins','puertafun');
       this.mortondoor3= new Door(this,780,222,'habitacionbold','puertafun');
       this.phone=this.add.sprite(280,230,'objects',[23]).setDepth(1);
       this.phone.setInteractive();
       this.phone.on('pointerdown',()=>
       {
        this.scene.start('selectscene');
        
       });
    }
}
