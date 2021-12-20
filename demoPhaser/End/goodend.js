import Wagon from "../Wagons/wagon.js";

export default class GoodEnd extends Wagon {
  constructor() {
    super('goodend', {
      isPointAndClick: true,
      spriteFondo1: 43,
      spriteFondo2: 41,
      spriteFondo3: 43,
      wagonIzq: 'boot'
    });

  }
  spawnNPCs() {
    this.game.sound.stopAll();
    this.video = this.add.video(500, 256, 'Goodending');
          this.video.setScale(0.78);
          this.video.play();
          this.video.setPaused(false);

          this.video.setPaused(false);

        this.endingKey = this.input.keyboard.addKeys({
            esc: Phaser.Input.Keyboard.KeyCodes.ESC
        });

       

        this.video.on('complete', () => {
          this.musica = this.sound.add('goodmusic', {
            volume: this.game.sound.volume * 0.5,
            loop: true
          });
          this.musica.play();
          this.video.setScale(0,0);
        });
     
   

    this.backToMenu = new Phaser.GameObjects.Rectangle(this, 500, 256, 1000, 512, 0xfffffff, 0xfffffff).setInteractive();
    this.backToMenu.on('pointerdown', () => {
      
      this.game.sound.stopAll();
      this.scene.start('boot');
    })
  }
}