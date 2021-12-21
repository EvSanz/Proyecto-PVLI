//Clase encargada de gestionar el diario
export default class Settings extends Phaser.Scene {
    constructor()
    { 
      super({key: 'settingsmenu'});
    }

    create()
    {

      let boxnum;
      if (this.game.sound.mute)
      {
        boxnum = 0;
      }
      else
      {
        boxnum = 1;
      }

      this.add.sprite(500, 256, 'fondo');
      this.add.sprite(500, 256, 'menuopciones');

      this.back = this.add.sprite(960, 50, 'objects', [4]).setInteractive();

      this.back.on('pointerdown', () => this.scene.stop());

      this.exit = this.input.keyboard.addKey('Esc'); 

      this.exit.on('down', () => this.scene.stop())

      this.add.text(210, 150, 'Audio: ', {fontSize: 28})

      this.audioBool = this.add.sprite(660, 160, 'checkbox', [boxnum]).setInteractive();

      this.audioBool.on('pointerdown', () => {
        this.activateAudio(this.game.sound.mute);

        if (boxnum === 0)
          boxnum = 1;
        else
          boxnum = 0;

        this.audioBool = this.add.sprite(660, 160, 'checkbox', [boxnum]);
      });
    }

    activateAudio(bool)
    {
      this.game.sound.mute = !bool;
    }
}