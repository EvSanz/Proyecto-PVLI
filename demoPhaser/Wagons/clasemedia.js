import Wagon from './wagon.js';
import Door from '../Utils/door.js';
import Npc from '../NPCs/npc.js';
import GameObject from '../Objects/gameobject.js';

export default class ClaseMedia extends Wagon {
  constructor() {
    super('clasemedia', {
      isPointAndClick: false,
      spriteFondo1: 26,
      spriteFondo2: 26,
      spriteFondo3: 26,
      wagonIzq: 'clasebaja',
      wagonDer: 'cafeteria'
    });
  }
  spawnNPCs() {
    this.addScenesNpc();
  }

  spawnObjects() {
    let mortondoor;
    this.mortondoor = new Door(this, 120, 222, 'habitacionmorton', 'puertafun');
    this.mortondoor2 = new Door(this, 440, 222, 'habitacioncollins', 'puertafun');
    this.mortondoor3 = new Door(this, 780, 222, 'habitacionbold', 'puertafun');
    this.phone = this.add.sprite(560, 250, 'objects', [23]).setDepth(1);
    this.phone.setInteractive();
    this.phone.on('pointerdown', () => {
      this.scene.start('selectscene');

    });
  }
}