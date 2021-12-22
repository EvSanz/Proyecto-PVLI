import Wagon from '../wagon.js';

//Escena de la habitacion de las hermanas Morton
export default class HabitacionMorton extends Wagon {
  constructor() {
    super('habitacionmorton', {
      isPointAndClick: true,
      spriteFondo1: 32,
      spriteFondo2: 30,
      spriteFondo3: 31,
      wagonIzq: 'clasemedia'
    });
  }

  create() {
    super.create();
    this.addSceneObjects();

    //Añadimos el sprite del cadaver 
    this.fiambre = this.add.sprite(300, 275, 'objects', [26]);
    this.fiambre.displayWidth = 250;
    this.fiambre.displayHeight = 250;
  }
}