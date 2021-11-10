import Player from './player.js';
import Platform from './platform.js';
import Tetera from './tetera.js'
import Base from './base.js'
import Door from './door.js'
import Boton from './boton.js'
import Diary from './diario.js'
import Npc from './npc.js';

/**
 * Escena principal del juego. La escena se compone de una serie de plataformas 
 * sobre las que se sitúan las bases en las podrán aparecer las estrellas. 
 * El juego comienza generando aleatoriamente una base sobre la que generar una estrella. 
 * Cada vez que el jugador recoge la estrella, aparece una nueva en otra base.
 * El juego termina cuando el jugador ha recogido 10 estrellas.
 * @extends Phaser.Scene
 */
export default class Level extends Phaser.Scene {
  /**
   * Constructor de la escena
   */
  constructor() {
    super({ key: 'level' });
  }

  /**
   * Creación de los elementos de la escena principal de juego
   */
  create() {
    //this.stars = 10;
    //this.bases = this.add.group();

    this.q = this.input.keyboard.addKey('Q');

    this.q.on('down', 
    abreDiario => {
      this.scene.launch('diary', this);
      this.scene.pause();
    })

    let uisuelo;
    //let puerta;
    //this.add.sprite(150,150,'puerta');
    this.add.sprite(150,150,'puerta')

    this.door= new Door(this,140,225,'levelpt');

    this.add.sprite(480,174,'ventanas');
    this.add.sprite(830,174,'ventanas');

    uisuelo=this.add.sprite(500,450,'ui');

    this.add.sprite(880,230,'guille');

    this.player = new Player(this, 400, 240);
    this.tetera = new Tetera (this,600,265);
    this.npc = new Npc (this, 880, 230, 0);
    new Base(this,150,600);

    this.physics.add.existing(uisuelo, true);
    this.physics.add.collider(this.player, uisuelo);

    //this.physics.add.collider(tetera);
    //tetera.body.collideWorldBounds = true;
    
    /*new Platform(this, this.player, this.bases, 150, 350);
    new Platform(this, this.player, this.bases, 850, 350);
    new Platform(this, this.player, this.bases, 500, 200);
    new Platform(this, this.player, this.bases, 150, 100);
    new Platform(this, this.player, this.bases, 850, 100);
    this.spawn();*/
  }

  /**
   * Genera una estrella en una de las bases del escenario
   * @param {Array<Base>} from Lista de bases sobre las que se puede crear una estrella
   * Si es null, entonces se crea aleatoriamente sobre cualquiera de las bases existentes
   */
  spawn(from = null) {
    //Phaser.Math.RND.pick(from || this.bases.children.entries).spawn();
  }

  /**
   * Método que se ejecuta al coger una estrella. Se pasa la base
   * sobre la que estaba la estrella cogida para evitar repeticiones
   * @param {Base} base La base sobre la que estaba la estrella que se ha cogido
   */
  starPickt (base) {
    this.player.point();
      if (this.player.score == this.stars) {
        this.scene.start('end');
      }
      else {
        //let s = this.bases.children.entries;
        //this.spawn(s.filter(o => o !== base));

      }
  }
  preUpdate()
  {
    game.debug.body(tetera);
  }
}