import Door from '../Utils/door.js'
import Player from '../player.js';
import Clock from '../Utils/clock.js';
import GameObject from '../Objects/GameObject.js';
import Wagon from '../Wagons/wagon.js'

//Clase para crear las escenas de point and click
export default class Levelpt extends Wagon{

  constructor() {
    //super({ key: 'levelpt' })
    super('levelpt', true, 'ventanas', 'ventanas', 'ventanas', 'levelpt', 'level',);
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

    //Creamos una tetera ahora desde el manager en boot
    //this.tetera = new GameObject (this, 600, 265, 'tetera', true, true);
   //if(!this.gomanager.consultarobj(0).presente)
    
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
  consultarObjetos()
  {
  if(!this.gomanager.consultarObjetos(0).presente)
  {
    this.gomanager.consultarObjetos(0).scene='boot';

  }


  }

}