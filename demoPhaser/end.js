//Clase encargada de atender los eventos de fin del juego
export default class End extends Phaser.Scene {
  constructor() { super({ key: 'end' });}

  create() 
  {
    //Creamos un cuadro de texto en el centro de la pantalla
    this.add.text
    (500, 250, 'Fin del juego').setOrigin(0.5, 0.5).setAlign('center');  

    //Si pulsamos una tecla cualquiera del teclado, volvemos
    //a iniciar el juego
    this.input.keyboard.on ('keydown', 
    function (event) {this.scene.start('level');}, this);
  }
}