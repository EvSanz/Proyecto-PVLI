import Wagon from './wagon.js';
import Door from '../Utils/door.js';

export default class ClaseMedia extends Wagon {
    constructor() { 
      super('clasemedia', false, 26, 26, 26, 'clasebaja', 'cafeteria',);
    }
    spawnObjects()
    {
       let mortondoor;
       this.mortondoor= new Door(this,120,222,'habitacionmorton','puertafun');
       this.mortondoor2= new Door(this,440,222,'habitacioncollins','puertafun');
       this.mortondoor3= new Door(this,780,222,'habitacionbold','puertafun');
       



    }
}
