import Wagon from '../wagon.js';
import GameObject from '../../Objects/gameobject.js';

export default class HabitacionMorton extends Wagon {
    constructor() { 
      super('habitacionmorton', true,32, 30, 31, 'clasemedia', 'locomotora',);

      // for (let i = 0; i < this.scene.get('boot').myObjects.length; ++i)
      //  {
      //     for (let j = 0; j < this.scene.scene.get('boot').myObjects[i].characters.length; ++j)
      //     {
      //        let obj = this.scene.get('boot').myObjects[i];
      //        if (obj.characters[j] == "Molly Morton")
      //           this.object[i] = new GameObject(this, obj.posX, obj.posY, desc, obj.important, obj.chocante);
      //     }
      // }
    }
}