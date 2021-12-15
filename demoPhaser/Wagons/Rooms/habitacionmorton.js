import Wagon from '../wagon.js';
import GameObject from '../../Objects/gameobject.js';

export default class HabitacionMorton extends Wagon {
    constructor() { 
      super('habitacionmorton', true,32, 30, 31, 'clasemedia', 'locomotora',);
    }

    spawnObjects() 
    {
      this.addSceneObjects();
    }
}