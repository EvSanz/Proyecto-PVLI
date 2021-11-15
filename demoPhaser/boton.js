//Clase encargada de gestionar los botones
export default class Boton extends Phaser.GameObjects.Sprite {
 
 /** Constructor de Boton
  * @param {Sceme} scene Escena 
  * @param {Base} base Objeto base 
  * @param {number} x Coordenada X
  * @param {number} y Coordenada Y
  */

 constructor(scene, x, y, gotoscene) {
    super(scene, x, y, gotoscene);

    //Creamos un objeto interactuable invisible
    this.graphics = new Phaser.GameObjects.Rectangle
    (scene, x, y, 100, 100, 0xfffffff, 0xfffffff);
    this.graphics.setInteractive();

    //Si lo clickamos mientras estamos dentro de 
    //su rango, cambiaremos de escena 
    this.graphics.on('pointerdown', () => 
    { this.scene.scene.launch(gotoscene, this.scene);});
 }
}