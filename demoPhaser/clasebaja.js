//Js importados
import Player from './player.js';
import Tetera from './tetera.js'
import Base from './base.js'
import Door from './door.js'
import Wagon from './wagon.js';
import Npc from './npc.js';

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
      
    //this.tetera = new Tetera (this, 500, 265);

  }

}
