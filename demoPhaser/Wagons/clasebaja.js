//Js importados
import Player from '../player.js';
import Door from '../Utils/door.js'
import Wagon from './wagon.js';
import Npc from '../NPCs/npc.js';
import GameObject from '../Objects/gameobject.js';
import DialogManager from '../Test/dialogmanager.js'
/**Escena principal del juego
 * @extends Wagon
 */

//Clase para crear y gestionar un nivel 
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

    //Extendemos el create() de la clase vagon con lo específico del vagón de clase baja
    this.addScenesNpc();

    this.add.sprite(320, 262, 'objects', [2]);
    this.add.sprite(520, 262, 'objects', [2]);
    this.add.sprite(830, 262, 'objects', [2]);
    this.add.sprite(60, 290, 'objects', [24]);
  }
}