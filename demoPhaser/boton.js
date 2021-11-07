import diario from './diario.js';
import Dialog from './dialog.js';
export default class Boton extends Phaser.GameObjects.Sprite {
 
 /**
  * Constructor de Star
  * @param {Sceme} scene Escena en la que aparece la estrella
  * @param {Base} base Objeto base sobre el que se va a dibujar la estrella
  * @param {number} x coordenada x
  * @param {number} y coordenada y
  */
 constructor(scene,x,y,gotoscene ) {
   
    super(scene,x,y, gotoscene);

    this.graphics = new Phaser.GameObjects.Rectangle(scene, x, y, 100, 100, 0xfffffff, 0xfffffff);
      this.graphics.setInteractive();

      this.graphics.on('pointerdown', () => 
      { 
        console.log(gotoscene)
        this.scene.scene.start(gotoscene);
      });

 }
}