import Wagon from '../wagon.js';
import GameObject from '../../Objects/gameobject.js';

export default class HabitacionHaines extends Wagon {
    constructor() { 
      super('habitacionhaines', true,32, 30, 31, 'clasealta', 'locomotora',);
    }

    spawnObjects() 
    {
      console.log("habitacion: ", this.scene.key);

      this.objs = this.scene.get('boot').myObjects;
      console.log("Objs: ", this.objs.Objetos);
  
      this.objects = [];
  
      let j = 0;
  
      for (let i = 0; i < this.objs.Objetos.length; ++i) {
        if (this.objs.Objetos[i].vagon == this.scene.key)
          this.objects[j++] = new GameObject(this, this.objs.Objetos[i].posX, this.objs.Objetos[i].posY, this.objs.Objetos[i].desc, true, false);
      }
  
      console.log("Objetos en escena: ", this.objects);
    }
}