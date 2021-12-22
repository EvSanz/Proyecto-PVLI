//Js importados
import Wagon from './wagon.js';
import Door from '../Utils/door.js';

//Escena del vagon de clase alta
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

    //Añadimos los npc a la escena
    this.addScenesNpc();

    this.placas = [];

    let i = 0;

    //Creamos las puertas de las habitaciones
    this.door = new Door(this, 120, 222, 'habitacionyan', 'puertafun');
    this.placaPuerta(this.placas[i++], 120, 222, "Yan");
    this.door2 = new Door(this, 440, 222, 'habitacionanthony', 'puertafun');
    this.placaPuerta(this.placas[i++], 440, 222, "Anthony");
    this.door3 = new Door(this, 780, 222, 'habitacionhaines', 'puertafun');
    this.placaPuerta(this.placas[i++], 775, 222, "Haines");
  }
}