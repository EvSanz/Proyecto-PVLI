//Js importados
import Wagon from './wagon.js';

//Escena de la locomotora
export default class Locomotora extends Wagon {
  constructor() {
    super('locomotora', {
      isPointAndClick: false,
      spriteFondo1: 33,
      spriteFondo2: 35,
      spriteFondo3: 36,
      wagonIzq: 'clasealta',
      wagonDer: 'locomotora'
    });
  }

  create(playerX) {
    super.create(playerX);

    //Añadimos los npc
    this.addScenesNpc();

    //Creamos una pared invisible que impida al jugador 
    //llegar al extremo de la pantalla
    this.pared = new Phaser.GameObjects.Rectangle(this, 850, 200, 200, 200, 0x0000000, 0x0000000);
    this.add.existing(this.pared);
    this.physics.add.existing(this.pared, true);
    this.physics.add.collider(this.player, this.pared);
  }
}