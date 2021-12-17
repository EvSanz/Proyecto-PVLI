import Wagon from "../Wagons/wagon.js";

export default class BadEnd extends Wagon {
  constructor() {
    super('badend', {
      isPointAndClick: true,
      spriteFondo1: 43,
      spriteFondo2: 42,
      spriteFondo3: 43,
      wagonIzq: 'clasealta'
    });

  }
  spawnNPCs() {
    this.game.sound.stopAll();
    this.musica = this.sound.add('badmusic', {
      volume: this.game.sound.volume * 0.5,
      loop: true
    });
    this.musica.play();

  }
}