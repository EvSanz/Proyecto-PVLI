//Escena de ajustes
export default class Settings extends Phaser.Scene {
    constructor()
    { 
      super({key: 'settingsmenu'});
    }

    create()
    {
      let boxnum;

      //Dependiendo del estado del sonido, establecemos un valor
      //u otro a boxnum
      if (this.game.sound.mute) {boxnum = 0; }
      else {boxnum = 1;}

      //Añadimos los sprites de la escena
      this.add.sprite(500, 256, 'fondo');
      this.add.sprite(500, 256, 'menuopciones');

      //Añadimos el sprite interactivo del boton para volver atras
      this.back = this.add.sprite(960, 50, 'objects', [4]).setInteractive();

      //Si pulsamos el sprite, salimos la escena
      this.back.on('pointerdown', () => this.scene.stop());

      //Añadimos el comando de Escape
      this.exit = this.input.keyboard.addKey('Esc'); 

      //Si pulsamos Escape, salimos de la escena
      this.exit.on('down', () => this.scene.stop())

      this.add.text(210, 150, 'Audio: ', {fontSize: 28})

      //Añadimos un sprite interactuable de caja para indicar 
      //si el sonido esta activado o no
      this.audioBool = this.add.sprite(660, 160, 'checkbox', [boxnum]).setInteractive();

      //Si hacemos click en el sprite de caja... 
      this.audioBool.on('pointerdown', () => {

        //Llamamos al metodo activateAudio
        this.changeAudio();

        //Cambiamos el estado de boxnum al estado opuesto
        if (boxnum === 0) {boxnum = 1; }
        else {boxnum = 0; }

        //Cambiamos el sprite de la caja dependiendo del 
        //valor actual de boxnum
        this.audioBool = this.add.sprite(660, 160, 'checkbox', [boxnum]);
      });
    }

    //Método para activar el audio si esta desactivado
    //o viceversa
    changeAudio() {this.game.sound.mute = !this.game.sound.mute; }
}