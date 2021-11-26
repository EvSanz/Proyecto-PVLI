//Js importados
import Player from '../player.js';
import Tetera from '../Objects/tetera.js'
import Door from '../Utils/door.js'
import Npc from '../NPCs/npc.js';
import Clock from '../Utils/clock.js';

/**Escena principal del juego
 * @extends Phaser.Scene
 */

//Clase para crear y gestionar un nivel 
export default class Level extends Phaser.Scene {
  constructor() 
  { 
    super({ key: 'level' });
  }

  //Creacion de los elementos del juego
  create() {

    //this.bases = this.add.group();

    //Creacion de la animacion del fondo
    this.anims.create({
      key: 'backgroundwindows',
      frames: this.anims.generateFrameNumbers
      ('background', { start: 0, end: 25 }),
      frameRate: 4, 
      repeat: -1    
    });

    //Creacion de la animacion de Guille (Prueba)
    /*this.anims.create({
      key: 'guillehop',
      frames: this.anims.generateFrameNumbers
      ('npcs', { start: 4, end: 5 }),
      frameRate: 4, 
      repeat: -1    
    });*/

    //Añadimos una variable para guardar un comando de teclado
    this.q = this.input.keyboard.addKey('Q');

    //Si pulsamos el comando Q, abrimos la escena del 
    //diario y pausamos la escena actual 
    this.q.on('down', abreDiario => {
      this.scene.launch('diary', this);
      this.scene.pause();
    })

    let uisuelo;

    this.add.sprite(150, 174, 'background', [26]);

    //Creamos la puerta
    this.door = new Door(this, 100, 222, 'clasebaja');

    //Añadimos las animaciones del fondo
    this.add.sprite(480, 174, 'ventanas').play('backgroundwindows');
    this.add.sprite(830, 174, 'ventanas').play('backgroundwindows');

    uisuelo = this.add.sprite(500, 450, 'ui');

    //Añadimos la animacion a Guille (Prueba)
    //this.add.sprite(880, 230, 'guille').play('guillehop');

    //Creamos el jugador
    this.player = new Player(this, 400, 240, true);

    //Creamos la tetera
    this.tetera = new Tetera (this, 600, 265);

    //Creamos el npc
    this.npc = new Npc (this, 880, 230, 3);
    
    //Añadimos la fisicas y los colliders al suelo
    this.physics.add.existing(uisuelo, true);
    this.physics.add.collider(this.player, uisuelo);

    //Añadimos el reloj
    
    //Mostramos el reloj
    this.player.clock.showTime();
  }

  spawn(from = null) {
    //Phaser.Math.RND.pick(from || this.bases.children.entries).spawn();
  }

  preUpdate() { game.debug.body(tetera);}
}