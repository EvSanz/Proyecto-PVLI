import Wagon from '../wagon.js';
import GameObject from '../../Objects/gameobject.js';

export default class HabitacionCollins extends Wagon {
  constructor() {
    super('habitacioncollins', {
      isPointAndClick: true,
      spriteFondo1: 32,
      spriteFondo2: 29,
      spriteFondo3: 31,
      wagonIzq: 'clasemedia'
    });
  }

  create() {
    super.create();
    this.addSceneObjects();
  }
}