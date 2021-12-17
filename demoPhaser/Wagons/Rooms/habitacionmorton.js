import Wagon from '../wagon.js';
import GameObject from '../../Objects/gameobject.js';

export default class HabitacionMorton extends Wagon {
  constructor() {
    super('habitacionmorton', {
      isPointAndClick: true,
      spriteFondo1: 32,
      spriteFondo2: 30,
      spriteFondo3: 31,
      wagonIzq: 'clasemedia'
    });
  }

  spawnObjects() {
    this.addSceneObjects();
  }
}