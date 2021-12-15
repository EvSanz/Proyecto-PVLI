//Clase encargada de gestionar el diario
export default class Menu extends Phaser.Scene {
    constructor()
    { 
      super({key: 'mainmenu'});
    }

    create()
    {
      this.musica = this.sound.add('menumusic', {volume: this.game.sound.volume * 0.5, loop: true});
      this.musica.play();
        this.add.sprite(500, 256, 'fondo');
        this.add.sprite(500, 256, 'menuprincipal');

        this.play = this.add.sprite(500, 256, 'botones', [0]).setInteractive();
        this.settings = this.add.sprite(500, 352, 'botones', [1]).setInteractive();
        this.credits = this.add.sprite(500, 448, 'botones', [2]).setInteractive();

        this.play.on('pointerdown', () => this.scene.start('clasebaja', 400));
        this.settings.on('pointerdown', () => this.scene.start('settingsmenu'));
        this.credits.on('pointerdown', () => this.scene.start('creditsmenu'));
    }
}