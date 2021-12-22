//js importados
import Wagon from '../wagon.js';

//Escena de la habitacion de Norma y Bruno Anthony
export default class HabitacionAnthony extends Wagon {
  constructor() {
    super('habitacionanthony', {
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