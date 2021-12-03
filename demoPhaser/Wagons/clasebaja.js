//Js importados
import Player from '../player.js';
import Door from '../Utils/door.js'
import Wagon from './wagon.js';
import Npc from '../NPCs/npc.js';
import DialogManager  from '../Test/dialogmanager.js'
/**Escena principal del juego
 * @extends Wagon
 */

//Clase para crear y gestionar un nivel 
export default class ClaseBaja extends Wagon {
  constructor() { 
    
    super('clasebaja', false, 'ventanas', 'ventanas','ventanas', 'clasebaja', 'clasemedia',);
  }

  //Sobreescribimos los métodos que estan en wagon
  spawnNPCs(){
      
    //this.npc = new Npc (this, 650, 230, 1);
    //this.dmanager= new DialogManager();
    //this.dmanager.Acoplarnpc(this.npc);
    this.npc = this.dmanager.consultarnpc(0); //devuelve el npc que es YAY
    // this.scene.add(this.npc);

  }

  spawnObjects(){    
    //this.tetera = new Tetera (this, 60, 200);
    this.add.sprite(320, 262, 'objects', [2]);
    this.add.sprite(520, 262, 'objects', [2]);
    this.add.sprite(830, 262, 'objects', [2]);

  }
}
