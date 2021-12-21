import Wagon from '../wagon.js';
import GameObject from '../../Objects/gameobject.js';

export default class HabitacionYan extends Wagon {
  constructor() {
    super('habitacionyan', {
      isPointAndClick: true,
      spriteFondo1: 28,
      spriteFondo2: 29,
      spriteFondo3: 31,
      wagonIzq: 'clasealta'
    });
  }

  create() {
    super.create();

    this.addSceneObjects();
  }
}