import Wagon from './wagon.js';
import Npc from '../NPCs/npc.js';

export default class Locomotora extends Wagon {
  constructor() {
    super('locomotora', {
      isPointAndClick: false,
      spriteFondo1: 33,
      spriteFondo2: 35,
      spriteFondo3: 36,
      wagonIzq: 'clasealta',
      wagonDer: 'locomotora'
    });
  }

  spawnNPCs() {
    this.addScenesNpc();
  }

  spawnPared() {
    this.pared = new Phaser.GameObjects.Rectangle(this, 850, 200, 200, 200, 0xfffffff, 0xfffffff);

    this.add.existing(this.pared);
    this.physics.add.existing(this.pared, true);

    this.physics.add.collider(this.player, this.pared);
  }
}