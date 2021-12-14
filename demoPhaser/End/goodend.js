import Wagon from "../Wagons/wagon.js";

export default class GoodEnd extends Wagon {
    constructor() { 
      super('goodend', true,43, 41, 43, 'clasealta', 'locomotora',);
      
    }
    spawnNPCs()
    {this.game.sound.stopAll();
      this.musica = this.sound.add('goodmusic', {volume: this.game.sound.volume * 0.5, loop: true});
      this.musica.play(); 
    }
}