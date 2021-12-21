import Wagon from '../wagon.js';
import GameObject from '../../Objects/gameobject.js';

export default class HabitacionHaines extends Wagon {
  constructor() {
    super('habitacionhaines', {
      isPointAndClick: true,
      spriteFondo1: 32,
      spriteFondo2: 30,
      spriteFondo3: 31,
      wagonIzq: 'clasealta'
    });
  }

  create() {
    super.create();
    this.addSceneObjects();
  }
}