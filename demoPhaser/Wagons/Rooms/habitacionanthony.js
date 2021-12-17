import Wagon from '../wagon.js';
import GameObject from '../../Objects/gameobject.js';

export default class HabitacionAnthony extends Wagon {
    constructor() { 
      super('habitacionanthony', true, 32, 30, 31, 'clasealta');
    }

  spawnObjects() 
  {
    this.addSceneObjects();
  }
}