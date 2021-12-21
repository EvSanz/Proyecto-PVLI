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

  create(playerX) {
    super.create(playerX);

    this.addScenesNpc();

    this.placas = [];

    let i = 0;
    this.door = new Door(this, 120, 222, 'habitacionyan', 'puertafun');
    this.placaPuerta(this.placas[i++], 120, 222, "Yan");
    this.door2 = new Door(this, 440, 222, 'habitacionanthony', 'puertafun');
    this.placaPuerta(this.placas[i++], 440, 222, "Anthony");
    this.door3 = new Door(this, 780, 222, 'habitacionhaines', 'puertafun');
    this.placaPuerta(this.placas[i++], 780, 222, "Haines");
  }
}