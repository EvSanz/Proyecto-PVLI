import Wagon from '../wagon.js';
import GameObject from '../../Objects/gameobject.js';

export default class HabitacionBold extends Wagon {
    constructor() { 
      super('habitacionbold', true, 32, 30, 31, 'clasemedia');
    }

    spawnObjects() 
    {
      this.addSceneObjects();
    }
}