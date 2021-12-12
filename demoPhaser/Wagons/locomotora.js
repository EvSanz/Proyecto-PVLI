import Wagon from './wagon.js';
import Npc from '../NPCs/npc.js';

export default class Locomotora extends Wagon {
    constructor() { 
      super('locomotora', false, 33, 35, 36, 'clasealta', 'locomotora',);
    }
    spawnNPCs()
    {

      this.npc=new Npc(this,160,238,0,this.scene.get('boot').dmanager.npcinfoholder[9].anger,29,9);
    }
}
