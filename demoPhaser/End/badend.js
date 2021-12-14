import Wagon from "../Wagons/wagon.js";

export default class BadEnd extends Wagon {
    constructor() { 
      super('badend', true,43, 42, 43, 'clasealta', 'locomotora',);
      
    }
    spawnNPCs()
    {this.game.sound.stopAll();
      this.musica = this.sound.add('badmusic', {volume: this.game.sound.volume * 0.5, loop: true});
      this.musica.play(); 

    }
}