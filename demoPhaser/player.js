//Js importados
import Dialog from './dialog.js';

//Clase para crear y gestionar el jugador
export default class Player extends Phaser.GameObjects.Sprite {
  
  /**Constructor del jugador
   * @param {Phaser.Scene} scene Escena 
   * @param {number} x Coordenada X
   * @param {number} y Coordenada Y
   * @param {bool} walking ¿Esta caminando?
   * @param {bool} standing ¿Esta quieto?
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
  //Desactivamos el estado de animacion
    //estatico y de caminado
    this.walking = false;
    this.standing = true;

  }

  /**Metodo para establecer el movimiento del jugador
   * @override
   */

  preUpdate (t, dt) {
    super.preUpdate (t, dt);

    //Si pulsamos la flecha de direccion izquierda
    if (this.cursors.left.isDown) 
    {
      //Establecemos la velocidad de movimiento 
      //hacia la izquierda
      this.body.setVelocityX(-this.speed);

      //Desactivamos la animacion estatica 
      //y activamos la de caminado
      if(!this.walking)
      {
        this.stop('playerstand');
        this.standing = false;
        this.play('playerwalk');
        this.walking = true;
      }

      //Cambiamos la direccion del sprite
      this.flipX = true;
    }

    //Si pulsamos la flecha de direccion derecha
    else if (this.cursors.right.isDown) 
    {
      this.body.setVelocityX(this.speed);

      if(!this.walking)//NO HACEN FALTA LOS BOOLS SE PUEDE MIRAR SI LA VELOCIDAD DEL PERSONAJE ES 0 O NO
      {
        this.stop('playerstand');
        this.standing = false;
        this.play('playerwalk');
        this.walking = true;
      }

      if (this.mov) { this.flipX = false;}
    }

    //Si no pulsamos ninguna flecha
    else 
    {
      //Desactivamos la animacion de caminado
      //y activamos la animacion estatica
      this.stop('playerwalk');
      this.walking = false;

      if(!this.standing)//consultar documentacion play con segundo parametro ignore if playing
      {
        this.play('playerstand');//depuera aqui
        this.standing = true;
      }
 
      //Anulamos el movimiento mientras no 
      //pulsemos ninguna flecha
      this.body.setVelocityX(0);
     
    }
  }
}
