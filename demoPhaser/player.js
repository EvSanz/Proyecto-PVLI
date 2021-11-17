//Js importados
import Dialog from './dialog.js';
import Clock from './clock.js';
//Clase para crear y gestionar el jugador
export default class Player extends Phaser.GameObjects.Sprite {
  
  /**Constructor del jugador
   * @param {Phaser.Scene} scene Escena 
   * @param {number} x Coordenada X
   * @param {number} y Coordenada Y
   * @param {bool} fijo ¿Puede moverse?
   */

  constructor(scene, x, y, fijo) {
    super(scene, x, y, 'player', fijo);

    //Añadimos al jugador con fisicas a la escena
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);

    this.mov = fijo; 

    //Establecemos que el jugador colisione 
    //con los limites del mundo
    this.body.setCollideWorldBounds();

    //Indicamos la velocidad de movimiento (Si puede moverse)
    if (fijo) 
    { this.speed = 300;}

    //Indicamos el input de teclado
    this.cursors = this.scene.input.keyboard.createCursorKeys();
    this.a =this.scene.input.keyboard.addKey('A');
    this.d = this.scene.input.keyboard.addKey('D');

    //Creamos el reloj
    this.clock = new Clock (this.scene);
    //Creamos el dialogo
    this.dialog = new Dialog(this.scene);

    //Creacion de la animacion de caminado
    this.anims.create ({
      key: 'playerwalk',
      frames: this.anims.generateFrameNumbers
      ('npcs', { start: 0, end: 3 }),
      frameRate: 5, 
      repeat: -1   
    });

    //Creacion de la animacion estatica
    this.anims.create ({
      key: 'playerstand',
      frames: this.anims.generateFrameNumbers
      ('npcs', { start: 6, end: 7 }),
      frameRate: 3, 
      repeat: -1    
    });

    //Inicializamos la animacion estatica
    this.play('playerstand');
  
    

  }

  /**Metodo para establecer el movimiento del jugador
   * @override
   */

  preUpdate (t, dt) {
    super.preUpdate (t, dt);

    //Si pulsamos la flecha de direccion izquierda
    if (this.cursors.left.isDown||this.a.isDown) 
    {
      //Establecemos la velocidad de movimiento 
      //hacia la izquierda
      this.body.setVelocityX(-this.speed);

     
      //Cambiamos la direccion del sprite
      this.flipX = true;
    }

    //Si pulsamos la flecha de direccion derecha
    else if (this.cursors.right.isDown||this.d.isDown) 
    {
      this.body.setVelocityX(this.speed);


      if (this.mov) { this.flipX = false;}
    }
  else this.body.setVelocityX(0);
    //Si no pulsamos ninguna flecha
    
     
     
    
    //NO HACEN FALTA BOOLS PARA LAS ANIMACIONES solo hay 2 opciones o se mueve o su speed es 0 y YA.
    if(this.body.speed>0)
    this.play('playerwalk',true);
    else
    this.play('playerstand',true);
  }
}
