import Wagon from './wagon.js';
import Door from '../Utils/door.js';

export default class ClaseMedia extends Wagon {
    constructor() { 
      super('clasemedia', false, 26, 26, 26, 'clasebaja', 'cafeteria',);
    }
    spawnObjects()
    {
       let mortondoor;
       this.mortondoor= new Door(this,120,220,'habitacionmorton','puertafun');
       



    }
}
