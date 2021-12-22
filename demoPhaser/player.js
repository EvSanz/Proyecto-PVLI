//Js importados
import Dialog from './Utils/dialog.js';

//Clase para crear y gestionar el jugador
export default class Player extends Phaser.GameObjects.Sprite {

  /**Constructor:
   * Variables:
   * @param {Phaser.Scene} scene Escena 
   * @param {number} x Coordenada X
   * @param {number} y Coordenada Y
   * @param {bool} seMueve ¿Puede moverse?
   * Metodos:
   * @method outOfTime Cambiar de escena si ha terminado el tiempo
   */

  constructor(scene, x, y) {
    super(scene, x, y, 'player');

    //Añadimos al jugador con fisicas a la escena
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);

    //Indicamos que puede moverse y su velocidad
    this.canMove = true;
    this.speed = 300;

    //Establecemos que el jugador colisione con los limites del mundo
    this.body.setCollideWorldBounds();

    //Indicamos el input de teclado
    this.cursors = this.scene.input.keyboard.createCursorKeys();
    this.a = this.scene.input.keyboard.addKey('A');
    this.d = this.scene.input.keyboard.addKey('D');

    //Creamos el dialogo
    this.dialog = new Dialog(this.scene);

    //Creacion de la animacion de caminado
    this.anims.create({
      key: 'playerwalk',
      frames: this.anims.generateFrameNumbers('npcs', {
        start: 0,
        end: 3
      }),
      frameRate: 5,
      repeat: -1
    });

    //Creacion de la animacion estatica
    this.anims.create({
      key: 'playerstand',
      frames: this.anims.generateFrameNumbers('npcs', {
        start: 6,
        end: 7
      }),
      frameRate: 3,
      repeat: -1
    });

    //Inicializamos la animacion estatica
    this.play('playerstand');
  }


  preUpdate(t, dt) {
    super.preUpdate(t, dt);

    //Si puede moverse...
    if (this.canMove) {

      //Si pulsamos la flecha de direccion izquierda, establecemos 
      //el movimiento en esa direccion y volteamos el sprite
      if (this.cursors.left.isDown || this.a.isDown) {
        this.body.setVelocityX(-this.speed);
        if (this.canMove) {this.flipX = true; }
      }

      //Si pulsamos la flecha de direccion derecha, establecemos 
      //el movimiento en esa direccion y volteamos el sprite
      else if (this.cursors.right.isDown || this.d.isDown) {
        this.body.setVelocityX(this.speed);
        if (this.canMove) {this.flipX = false; }
      }

      //Si no pulsamos ninguna flecha, no hay movimiento
      else {this.body.setVelocityX(0); }

      //Dependiendo de la velocidad, reproducimos una animacion u otra
      if (this.body.speed > 0) {this.play('playerwalk', true); }
      else {this.play('playerstand', true); }     
    }

    //Nos aseguramos que el player está quieto si no se le permite mover
    else {
      this.body.setVelocityX(0);
      this.play('playerstand', true);
    }
  }


  //Metodo para iniciar la escena de seleccion de asesino si no hay tiempo
  outOfTime() {
    if (this.clock.getTime() <= 0) {
      this.scene.scene.start('selectKillerScene');
    }
  }
}