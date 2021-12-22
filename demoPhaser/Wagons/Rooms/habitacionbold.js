//Js importados 
import Wagon from '../wagon.js';

//Escena de la habitacion de Bold
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