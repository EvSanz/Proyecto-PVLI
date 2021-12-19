import Wagon from "../Wagons/wagon.js";

export default class GoodEnd extends Wagon {
  constructor() {
    super('goodend', {
      isPointAndClick: true,
      spriteFondo1: 43,
      spriteFondo2: 42,
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
  }
}