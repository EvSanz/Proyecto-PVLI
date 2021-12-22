//Js importados
import Dialog from './Utils/dialog.js';
import Clock from './Utils/clock.js';
import SelectKillerScene from './Test/selectkillerscene.js';
//Clase para crear y gestionar el jugador
export default class Player extends Phaser.GameObjects.Sprite {

  /**Constructor del jugador
   * @param {Phaser.Scene} scene Escena 
   * @param {number} x Coordenada X
   * @param {number} y Coordenada Y
   */

  constructor(scene, x, y) {
    super(scene, x, y, 'player');

    //Añadimos al jugador con fisicas a la escena
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);

    this.canMove = true;

    //Establecemos que el jugador colisione 
    //con los limites del mundo
    this.body.setCollideWorldBounds();

    this.speed = 300;

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

  /**Metodo para establecer el movimiento del jugador
   * @override
   */

  preUpdate(t, dt) {
    super.preUpdate(t, dt);

    //Si puede moverse...
    if (this.canMove) {

      //Si pulsamos la flecha de direccion izquierda
      if (this.cursors.left.isDown || this.a.isDown) {
        //Establecemos la velocidad de movimiento 
        //hacia la izquierda
        this.body.setVelocityX(-this.speed);

        //Cambiamos la direccion del sprite
        this.flipX = true;
      }

      //Si pulsamos la flecha de direccion derecha
      else if (this.cursors.right.isDown || this.d.isDown) {
        this.body.setVelocityX(this.speed);

        if (this.canMove)
          this.flipX = false;
      }

      //Si no pulsamos ninguna flecha
      else {
        this.body.setVelocityX(0);
      }

      if (this.body.speed > 0)
        this.play('playerwalk', true);
      else
        this.play('playerstand', true);
    }

    //Nos aseguramos que el player está quieto si no se le permite mover
    else {
      this.body.setVelocityX(0);
      this.play('playerstand', true);
    }
  }

  outOfTime() {
    if (this.clock.getTime() <= 0) {
      this.scene.scene.start('selectKillerScene');
    }
  }
}