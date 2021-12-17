import Wagon from './wagon.js';
import Door from '../Utils/door.js';
import Npc from '../NPCs/npc.js';
import GameObject from '../Objects/gameobject.js';

export default class ClaseAlta extends Wagon {
  constructor() {
    super('clasealta', {
      isPointAndClick: false,
      spriteFondo1: 26,
      spriteFondo2: 26,
      spriteFondo3: 26,
      wagonIzq: 'cafeteria',
      wagonDer: 'locomotora'
    });
  }

  spawnNPCs() {
    this.npc = new Npc(this, 160, 238, 8, this.scene.get('boot').dmanager.npcinfoholder[7].anger,
      21, this.scene.get('boot').dmanager.npcinfoholder[7].dialogo);

    this.npc2 = new Npc(this, 460, 238, 9, this.scene.get('boot').dmanager.npcinfoholder[8].anger,
      19, this.scene.get('boot').dmanager.npcinfoholder[8].dialogo);

    this.npc3 = new Npc(this, 660, 238, 10, this.scene.get('boot').dmanager.npcinfoholder[9].anger,
      17, this.scene.get('boot').dmanager.npcinfoholder[9].dialogo);
  }

  spawnObjects() {
    this.mortondoor = new Door(this, 120, 222, 'habitacionyan', 'puertafun');
    this.mortondoor2 = new Door(this, 440, 222, 'habitacionanthony', 'puertafun');
    this.mortondoor3 = new Door(this, 780, 222, 'habitacionhaines', 'puertafun');
  }
}