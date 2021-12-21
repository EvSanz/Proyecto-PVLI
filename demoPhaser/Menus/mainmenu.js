//Escena del menu principal
export default class Menu extends Phaser.Scene {
    constructor()
    { 
      super({key: 'mainmenu'});
    }

    create()
    {
      //Añadimos la musica del menu de juego
      this.musica = this.sound.add('menumusic', 
      {volume: this.game.sound.volume * 0.5, loop: true});
      
      this.focusCheck = new Phaser.GameObjects.Rectangle (this, 
        500, 256, 1000, 512, 0xfffffff, 0xfffffff).setInteractive();

      //Si pulsamos la pantalla y no hay musica, empezara 
      //a reproducirse la cancion del menu
      this.focusCheck.on('pointerdown', () => {
        if (!this.musica.isPlaying)
          this.musica.play();
      });
    
      //Añadimos los sprites del menu
      this.add.sprite(500, 256, 'fondo');
      this.add.sprite(500, 256, 'menuprincipal');

      //Añadimos los botones del menu
      this.play = this.add.sprite(500, 256, 'botones', [0]).setInteractive();
      this.settings = this.add.sprite(500, 352, 'botones', [1]).setInteractive();
      this.credits = this.add.sprite(500, 448, 'botones', [2]).setInteractive();

      
      //Si pulsamos el boton de ajustes, cargamos esa escena
      this.settings.on('pointerdown', () => 
        this.scene.launch('settingsmenu'));
      //Si pulsamos el boton de creditos, cargamos esa escena
      this.credits.on('pointerdown', () => 
        this.scene.launch('creditsmenu'));

      //Si pulsamos el boton de play...
      this.play.on('pointerdown', () => {

        //Destruimos los botones para que generen problemas 
        this.play.destroy();
        this.settings.destroy();
        this.credits.destroy();

        //Detenemos el sonido del juego
        this.game.sound.stopAll();

        //Y añadimos el video de introduccion, escalandolo
        this.video = this.add.video(500, 256, 'Tutorial');
        this.video.setScale(0.78);

        //Reproducimos el video
        this.video.play();
        this.video.setPaused(false);

        //Añadimos el comando de Escape
        this.endingKey = this.input.keyboard.addKeys({
          esc: Phaser.Input.Keyboard.KeyCodes.ESC
        });

        //Si pulsamos la tecla de Escape, finalizamos 
        //el video y comenzamos el juego 
        this.endingKey.esc.on('down', () => {
          this.video.destroy(); 
          this.scene.start('clasebaja', 400);
        });

        //Si finalizamos el video, comenzamos el juego
        this.video.on('complete', () => {
          this.video.destroy();
          this.scene.start('clasebaja', 400);
        })
    }); 
  }
}