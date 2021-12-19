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
    this.addScenesNpc();
  }

  spawnObjects() {
    this.mortondoor = new Door(this, 120, 222, 'habitacionyan', 'puertafun');
    this.mortondoor2 = new Door(this, 440, 222, 'habitacionanthony', 'puertafun');
    this.mortondoor3 = new Door(this, 780, 222, 'habitacionhaines', 'puertafun');
  }
}