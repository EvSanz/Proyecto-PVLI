import Wagon from '../wagon.js';
export default class HabitacionMorton extends Wagon {
    constructor() { 
      super('habitacionmorton', true,32, 30, 31, 'cafeteria', 'locomotora',);
    }

create()
{

    let goback;

    goback = this.add.sprite(30, 30, 'objects', [4]).setInteractive();

    goback.on('pointerdown', () => 
    {
      //reducir el tiempo
      console.log(this.clock);
      
      //this.clock.decreaseTime();
      this.scene.start('clasemedia');
    });

}
}