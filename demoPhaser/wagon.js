//Js importados
import Player from './player.js';
import Tetera from './tetera.js'
import Base from './base.js'
import Door from './door.js'
import Npc from './npc.js';

/**Escena principal del juego
 * @extends Phaser.Scene
 */

//Clase para crear y gestionar un nivel 
export default class Wagon extends Phaser.Scene {
  constructor(isPointAndClick) { super({ key: 'level' }); this.isPT = isPointAndClick}

  //Creacion de los elementos del juego
  create(spriteFondo1, spriteFondo2, spriteFondo3, vagonIzq, vagonDer) {

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
    this.anims.create({
      key: 'guillehop',
      frames: this.anims.generateFrameNumbers
      ('npcs', { start: 4, end: 5 }),
      frameRate: 4, 
      repeat: -1    
    });

    //Añadimos una variable para guardar un comando de teclado
    this.q = this.input.keyboard.addKey('Q');

    //Si pulsamos el comando Q, abrimos la escena del 
    //diario y pausamos la escena actual 
    this.q.on('down', abreDiario => {
      this.scene.launch('diary', this);
      this.scene.pause();
    })

    //Creamos el suelo
    let uisuelo;
    uisuelo = this.add.sprite(500, 450, 'ui');

    //Añadimos la fisicas y los colliders al suelo
    this.physics.add.existing(uisuelo, true);
    this.physics.add.collider(this.player, uisuelo);


    //Si es point and click...
    if (this.isPT) 
    {
        //Añade el sprite del fondo y crea una puerta que 
        //llevara al vagon declarado a la izquierda
        this.add.sprite(500, 174, spriteFondo1);
        this.door = new Door(this, 140, 225, vagonIzq);
    }

    else 
    {
        //Añade los sprites indicados en el create
        this.add.sprite(150, 174, spriteFondo1);
        this.add.sprite(480, 174, spriteFondo2);    //Aqui vendria bien tener el fondo con
        this.add.sprite(830, 174, spriteFondo3);    //movimiento en sprites aparte
                                                    //Simplemente se pone al inicio y se superponen

        //Añade las puertas indicadas
        this.door = new Door(this, 140, 225, vagonIzq);
        this.door = new Door(this, 860, 225, vagonDer);
    }

    this.add.sprite(150, 174, 'background', [26]);

    //Añadimos las animaciones del fondo
    this.add.sprite(480, 174, 'ventanas').play('backgroundwindows');
    this.add.sprite(830, 174, 'ventanas').play('backgroundwindows');


    //Añadimos la animacion a Guille (Prueba) (Seria mas facil que lo cree directamente npc no??)
    this.add.sprite(880, 230, 'guille').play('guillehop');

    //Creamos el jugador
    this.player = new Player(this, 400, 240, true);

    //Creamos la tetera
    this.tetera = new Tetera (this, 600, 265);

    //Creamos el npc
    this.npc = new Npc (this, 880, 230, 0);

    new Base(this, 150, 600);

  }

  spawn(from = null) {
    //Phaser.Math.RND.pick(from || this.bases.children.entries).spawn();
  }

  preUpdate() { game.debug.body(tetera);}

  
}