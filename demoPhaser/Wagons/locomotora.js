import Wagon from './wagon.js';
import Npc from '../NPCs/npc.js';

export default class Locomotora extends Wagon {
    constructor() { 
      super('locomotora', false, 33, 35, 36, 'clasealta', 'locomotora',);

    }

    spawnNPCs()
    {
      this.npc=new Npc(this,160,238,11,this.scene.get('boot').dmanager.npcinfoholder[9].anger,29,15);

      this.spawnPared();
    }

    spawnPared()
    {
      this.pared = new Phaser.GameObjects.Rectangle(this, 850, 200, 200, 200, 0xfffffff, 0xfffffff);

      this.add.existing(this.pared);
      this.physics.add.existing(this.pared, true);

      this.physics.add.collider(this.player, this.pared);
    }
}
