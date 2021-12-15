import Wagon from '../wagon.js';
import GameObject from '../../Objects/gameobject.js';

export default class HabitacionHaines extends Wagon {
    constructor() { 
      super('habitacionhaines', true,32, 30, 31, 'clasealta', 'locomotora',);
    }

    spawnObjects() 
    {
      this.addSceneObjects();
    }
}