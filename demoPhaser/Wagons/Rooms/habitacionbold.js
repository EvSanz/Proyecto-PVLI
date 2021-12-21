import Wagon from '../wagon.js';
import GameObject from '../../Objects/gameobject.js';

export default class HabitacionBold extends Wagon {
  constructor() {
    super('habitacionbold', {
      isPointAndClick: true,
      spriteFondo1: 32,
      spriteFondo2: 30,
      spriteFondo3: 31,
      wagonIzq: 'clasemedia'
    });
  }

  create() {
    super.create();
    this.addSceneObjects();
  }
}