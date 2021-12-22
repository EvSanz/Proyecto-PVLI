//Js importados
import Wagon from './wagon.js';

//Escena de la cafeteria
export default class Cafeteria extends Wagon {
  constructor() {
    super('cafeteria', {
      isPointAndClick: false,
      spriteFondo1: 'ventanas',
      spriteFondo2: 'ventanas',
      spriteFondo3: 'ventanas',
      wagonIzq: 'clasemedia',
      wagonDer: 'clasealta'
    });
  }

  create(playerX) {

    super.create(playerX);

    //Añadimos los npc y los objetos no interactuables a la escena 
    this.addScenesNpc();
    this.add.sprite(180, 262, 'objects', [3]);
    this.add.sprite(320, 262, 'objects', [2]);
    this.add.sprite(520, 262, 'objects', [2]);
    this.add.sprite(690, 262, 'objects', [3]);
    this.add.sprite(830, 262, 'objects', [2]);
  }
}