//Js importados
import Wagon from './wagon.js';

//Escena del vagon de clase baja  
export default class ClaseBaja extends Wagon {
  constructor() {

    super('clasebaja', {
      isPointAndClick: false,
      spriteFondo1: 'ventanas',
      spriteFondo2: 'ventanas',
      spriteFondo3: 'ventanas',
      wagonIzq: 'clasebaja',
      wagonDer: 'clasemedia'
    });
  }

  create(playerX) {

    super.create(playerX);

    //Añadimos los npc y los objetos no interactuables a la escena
    this.addScenesNpc();
    this.add.sprite(320, 262, 'objects', [2]);
    this.add.sprite(520, 262, 'objects', [2]);
    this.add.sprite(830, 262, 'objects', [2]);
    this.add.sprite(60, 290, 'objects', [24]);
  }
}