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

  //Sobreescribimos los métodos que estan en wagon
  spawnNPCs() {

    this.data = this.scene.get('personajes');

    this.npc = new Npc(this, 160, 238, 1, this.scene.get('boot').dmanager.npcinfoholder[0].anger,
      9, this.scene.get('boot').dmanager.npcinfoholder[0].dialogo);

    this.npc2 = new Npc(this, 390, 238, 2, this.scene.get('boot').dmanager.npcinfoholder[1].anger,
      22, this.scene.get('boot').dmanager.npcinfoholder[1].dialogo);
  }

  spawnObjects() {
    this.add.sprite(320, 262, 'objects', [2]);
    this.add.sprite(520, 262, 'objects', [2]);
    this.add.sprite(830, 262, 'objects', [2]);
    this.add.sprite(60, 290, 'objects', [24]);
  }

  spawnNpcs() {
    this.addScenesNpc();
  }

}