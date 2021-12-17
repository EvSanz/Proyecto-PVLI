import Wagon from '../wagon.js';
import GameObject from '../../Objects/gameobject.js';

export default class HabitacionCollins extends Wagon {
    constructor() { 
      super('habitacioncollins', true, 32, 29, 31, 'clasemedia');
    }

    spawnObjects() 
    {
      this.addSceneObjects();
    }
}