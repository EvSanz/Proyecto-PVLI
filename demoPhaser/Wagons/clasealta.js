import Wagon from './wagon.js';
import Door from '../Utils/door.js';

export default class ClaseAlta extends Wagon
 {
    constructor() { 
      super('clasealta', false, 26, 26, 26, 'cafeteria', 'locomotora',);
    }
    
    spawnObjects()
   {   let mortondoor;
      this.mortondoor= new Door(this,120,222,'habitacionyan','puertafun');
      this.mortondoor2= new Door(this,440,222,'habitacionanthony','puertafun');
      this.mortondoor3= new Door(this,780,222,'habitacionhaines','puertafun');
      
   }


   
}