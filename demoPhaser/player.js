//import Star from './star.js';
import Dialog from './dialog.js';
/**
 * Clase que representa el jugador del juego. El jugador se mueve por el mundo usando los cursores.
 * También almacena la puntuación o número de estrellas que ha recogido hasta el momento.
 */
export default class Player extends Phaser.GameObjects.Sprite {
  
  /**
   * Constructor del jugador
   * @param {Phaser.Scene} scene Escena a la que pertenece el jugador
   * @param {number} x Coordenada X
   * @param {number} y Coordenada Y
   * @param {bool} walking flag que se utiliza para no activar la animacion siempre si el jugador ya se está moviendo
   */
  constructor(scene, x, y) {
    super(scene, x, y, 'player');
    this.score = 0;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    // Queremos que el jugador no se salga de los límites del mundo
    this.body.setCollideWorldBounds();
    this.speed = 300;
    //this.jumpSpeed = -400;
    // Esta label es la UI en la que pondremos la puntuación del jugador
    this.label = this.scene.add.text(10, 10, "");
    this.cursors = this.scene.input.keyboard.createCursorKeys();
    this.updateScore();
    let walking;
    this.walking=false;
    this.dialog = new Dialog(this.scene);
    //animaciones
    this.anims.create({
      key: 'playerwalk',
      frames: this.anims.generateFrameNumbers('npcs', { start: 0, end: 3 }),
      frameRate:5, // Velocidad de la animación
      repeat: -1    // Animación en bucle
    });
  }

  /**
   * El jugador ha recogido una estrella por lo que este método añade un punto y
   * actualiza la UI con la puntuación actual.
   */
  point() {
    this.score++;
    this.updateScore();
  }
  
  /**
   * Actualiza la UI con la puntuación actual
   */
  updateScore() {
    this.label.text = 'Score: ' + this.score;
  }

  /**
   * Métodos preUpdate de Phaser. En este caso solo se encarga del movimiento del jugador.
   * Como se puede ver, no se tratan las colisiones con las estrellas, ya que estas colisiones 
   * ya son gestionadas por la estrella (no gestionar las colisiones dos veces)
   * @override
   */
  preUpdate(t,dt) {
    super.preUpdate(t,dt);
    /*if (this.cursors.up.isDown && this.body.onFloor()) {
      this.body.setVelocityY(this.jumpSpeed);
    }*/
    if (this.cursors.left.isDown) {
      this.body.setVelocityX(-this.speed);
      if(!this.walking)
    {  this.play('playerwalk');
      this.walking=true;
    }
      this.flipX=true;
    }
    else if (this.cursors.right.isDown) {
      this.body.setVelocityX(this.speed);
      if(!this.walking)
      {
        this.play('playerwalk');
        this.walking=true;
      }
      this.flipX=false;
    }
    else {
      this.stop('playerwalk');
      this.walking=false;
      this.body.setVelocityX(0);
    }
  }
  
}
