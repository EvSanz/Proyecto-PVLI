//Js importados
import Player from '../player.js';
import Tetera from '../Objects/tetera.js'
import Door from '../Utils/door.js'
import Wagon from './wagon.js';
import Npc from '../NPCs/npc.js';

/**Escena principal del juego
 * @extends Wagon
 */

//Clase para crear y gestionar un nivel 
export default class ClaseBaja extends Wagon {
  constructor() { 
    super('clasebaja', false, 'ventanas', 'ventanas', 'ventanas', 'levelpt', 'level');
  }

  //Sobreescribimos los métodos que estan en wagon
  spawnNPCs(){
      
    //this.npc = new Npc (this, 650, 230, 0);

  }

  spawnObjects(){
      
    this.tetera = new Tetera (this, 20, 1);
    this.tetera = new Tetera (this, 120, 10);
    this.tetera = new Tetera (this, 220, 1);
    this.tetera = new Tetera (this, 320, 10);
    this.tetera = new Tetera (this, 420, 1);
    this.tetera = new Tetera (this, 520, 10);
    this.tetera = new Tetera (this, 620, 1);
    this.tetera = new Tetera (this, 720, 10);
    this.tetera = new Tetera (this, 820, 1);

  }

}
