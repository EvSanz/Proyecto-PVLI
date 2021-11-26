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
      
    this.npc = new Npc (this, 650, 230, 1);

  }

  spawnObjects(){    
    //this.tetera = new Tetera (this, 60, 200);
  }
}
