//Js importados
import Player from '../player.js';
import Tetera from '../Objects/tetera.js'
import Door from '../Utils/door.js'
import Npc from '../NPCs/npc.js';

/**Escena principal del juego
 * @extends Phaser.Scene
 */

//Clase para crear y gestionar un nivel 
export default class Wagon extends Phaser.Scene {

   /**Constructor del vagon
   * @param {string} wagonKey key del vagon
   * @param {boolean} isPointAndClick se entiende por su nombre (si se pone a true, solo importaran spritefondo1 y wagonizq)
   * @param {string} spriteFondo1 Sprite que se renderizará al fondo a la izquierda (si es ventana se anima automáticamente)
   * @param {string} spriteFondo2 Sprite que se renderizará al fondo en el centro
   * @param {string} spriteFondo3 Sprite que se renderizará al fondo a la derecha
   * @param {string} wagonIzq Vagon que esté a la izquierda de este
   * @param {string} wagonDer Vagon que esté a la derecha de este
   * @param {DialogManager} dmanager es el gestor de dialogos almacenado en boot, de donde se sacan los dialogos de los npcs
   * @param {ObjectManager} gomanager es el gestor de los objetos recogibles  de la escena(los que se pueden almacenar ene l diario)
   */

  constructor(wagonKey, isPointAndClick, spriteFondo1, spriteFondo2, spriteFondo3, wagonIzq, wagonDer) { 
    super({ key: wagonKey }); 
    this.isPT = isPointAndClick
    this.spriteFondo1 = spriteFondo1;
    this.spriteFondo2 = spriteFondo2;
    this.spriteFondo3 = spriteFondo3;
    this.wagonIzq = wagonIzq;
    this.wagonDer = wagonDer;
    
  }

  //Creacion de los elementos del juego

  create(data) {    //Aqui le llegara la posicion en la que aparecerá el jugador

    //Creacion de la animacion del fondo
    this.dmanager=this.scene.get('boot').dmanager;
    this.gomanager=this.scene.get('boot').gomanager;
    this.anims.create({
      key: 'backgroundwindows',
      frames: this.anims.generateFrameNumbers
      ('background', { start: 0, end: 25 }),
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
    uisuelo = this.add.sprite(500, 450, 'ui').setDepth(-1);
    
    //Añadimos la fisicas y los colliders al suelo
    this.physics.add.existing(uisuelo, true);


    //Si es point and click...
    if (this.isPT) 
    {
        //Añade el sprite del fondo y crea una puerta que 
        //llevara al vagon declarado a la izquierda
        this.add.sprite(500, 174, this.spriteFondo1);
        this.door = new Door(this, 140, 225, this.wagonIzq);

        //Creamos el jugador en una posicion fija
        this.player = new Player(this, 160, 240, false);
    }
    //Si no lo es...
    else 
    {
        //Añade los sprites indicados en el create
        let a = this.add.sprite(167, 174, this.spriteFondo1);

        //Si es una ventana la anima
        if (this.spriteFondo1 === 'ventanas'){
          a.play('backgroundwindows');
        }

        a = this.add.sprite(500, 174, this.spriteFondo2);

        if (this.spriteFondo2 === 'ventanas'){
          a.play('backgroundwindows');
        }

        a = this.add.sprite(833, 174, this.spriteFondo3);

        if (this.spriteFondo3 === 'ventanas'){
          a.play('backgroundwindows');
        }

        //Añade las puertas indicadas

        new Door(this, 100, 222, this.wagonIzq);

        new Door(this, 900, 222, this.wagonDer);

        //Creamos el jugador donde nos indica
        this.player = new Player(this, 260, 240, true);
    }
    this.physics.add.collider(this.player, uisuelo);

    //Creamos los npc necesarios
    this.spawnNPCs();

    //Creamos los objetos necesarios
    this.spawnObjects();

    //Mostramos el reloj
    this.player.clock.showTime();

  }

  spawnNPCs() {}

  spawnObjects() {} 
}