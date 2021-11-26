import Door from '../Utils/door.js'
import Player from '../player.js';
import Clock from '../Utils/clock.js';
import Tetera from '../Objects/tetera.js';
import GameObject from '../Objects/GameObject.js';

//Clase para crear las escenas de point and click
export default class Levelpt extends Phaser.Scene {

  constructor() {
    super({ key: 'levelpt' })
  }

  //Creamos los elementos de la escena
  create(data)
  {
    //this.add.sprite (500, 200, 'fondopt');
    console.log(data);
    this.clock = data;
    let uisuelo;
    uisuelo = this.add.sprite(500, 450, 'ui');
    this.add.sprite(170, 174, 'background', [28]);
    this.add.sprite(480, 174, 'background', [29]);
    this.add.sprite(830, 174, 'background', [27]);

    //Creamos una tetera
    this.tetera = new GameObject (this, 600, 265, 'tetera', true, true);

    //Añadimos una variable para guardar un comando de teclado
    this.q = this.input.keyboard.addKey('Q');

    //Si pulsamos el comando Q, abrimos la escena del 
    //diario y pausamos la escena actual 
    this.q.on('down', abreDiario => {
      this.scene.launch('diary', this);
      this.scene.pause();
    })

    let goback;

    goback = this.add.sprite(30, 30, 'objects', [4]).setInteractive();

    goback.on('pointerdown', () => 
    {
      //reducir el tiempo
      console.log(this.clock);
      
      //this.clock.decreaseTime();
      this.scene.start('level');
    });

    //Añadimos la fisicas y los colliders al suelo
    this.physics.add.existing(uisuelo, true);
    //this.physics.add.collider(this.player, uisuelo);
  }

}