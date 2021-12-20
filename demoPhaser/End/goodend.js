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
    this.musica = this.sound.add('goodmusic', {
      volume: this.game.sound.volume * 0.5,
      loop: true
    });
    this.musica.play();

    this.backToMenu = new Phaser.GameObjects.Rectangle(this, 0, 0, 1000, 512, 0xfffffff, 0xfffffff).setInteractive();
    this.backToMenu.on('pointerdown', () => {
      
      this.game.sound.stopAll();
      this.scene.start('boot');
    })
  }
}