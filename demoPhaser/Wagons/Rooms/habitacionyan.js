import Wagon from '../wagon.js';
import GameObject from '../../Objects/gameobject.js';

export default class HabitacionYan extends Wagon {
    constructor() { 
      super('habitacionyan', true,28, 29, 31, 'clasealta', 'locomotora',);
    }

    spawnObjects() 
    {
      this.addSceneObjects();
    }
}