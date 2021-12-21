//Escena de los creditos
export default class Credits extends Phaser.Scene {
    constructor()
    { 
      super({key: 'creditsmenu'});
    }

    create()
    {
      //Añadimos los sprites del fondo
      this.add.sprite(500, 256, 'fondo');
      this.add.sprite(500, 256, 'creditos');

      //Añadimos sprite del boton 
      this.back = this.add.sprite(960, 50, 'objects', [4]).setInteractive();

      //Si hacemos click en el sprite, paramos la escena
      this.back.on('pointerdown', () => this.scene.stop());

      //Añadimos comando de Escape
      this.exit = this.input.keyboard.addKey('Esc'); 

      //Si pulsamos Escape, salimos de la escena
      this.exit.on('down', () => this.scene.stop())

      //Añadimos el texto de la escena, con diferentes tamaños

      this.add.text(247, 180, 'Hecho por Nimeton Studios:', 
      { fontStyle: 'bold', fontSize: 22});

      this.add.text(256, 220, 'Rocío "Ro" Sánchez-Horcahuelo López', 
      { fontSize: 18});
      this.add.text(256, 250, 'Eva Sánchez Muñoz', 
      { fontSize: 18});
      this.add.text(256, 280, 'Marta "Mat" Croche Trigo', 
      { fontSize: 18});
      this.add.text(256, 310, 'Javier "Yavi" Villegas Montelongo', 
      { fontSize: 18});

      this.add.text(247, 350, 'Con la ayuda de nuestros profesores:', 
      { fontStyle: 'bold', fontSize: 22});
      this.add.text(256, 380, 'Guillermo Jiménez Díaz e Iván Martínez Ortiz', 
      { fontSize: 18});    
    }
}