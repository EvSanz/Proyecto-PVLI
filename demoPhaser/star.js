/**
 * Clase para los objetos estrella que el jugador ha de recoger
 * Una estrella aparece sobre una base. Cuando el jugador la recoge, se crea 
 * una nueva estrella en otra posición, si el juego no ha terminado.
 * @extends Phaser.GameObjects.Sprite
 */
 import diario from './diario.js';
 import Dialog from './dialog.js';
export default class Star extends Phaser.GameObjects.Sprite {
  
  /**
   * Constructor de Star
   * @param {Sceme} scene Escena en la que aparece la estrella
   * @param {Base} base Objeto base sobre el que se va a dibujar la estrella
   * @param {number} x coordenada x
   * @param {number} y coordenada y
   */
  constructor(scene,x,y ) {
    super(scene,x,y, 'star').setInteractive();
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this, true);
    //this.y -= this.height;
   // this.base = base;

   this.dialog = new Dialog(this.scene);
   
  }
  create() {
    
   this.diario = new diario(false);

  }

  /**
   * Redefinición del preUpdate de Phaser
   * @override
   */
  preUpdate() {
    // IMPORTANTE: Si no ponemos esta instrucción y el sprite está animado
    // no se podrá ejecutar la animación del sprite. 
    let aviso=false;
    super.preUpdate();
    if (this.scene.physics.overlap(this.scene.player, this)) {
        // Delegamos en la escena para decidir qué hacer al 
        // haber cogido una estrella
        
        if(diario.tetera)
       { this.scene.starPickt(this.base);
        this.destroy();
       }
        else if (!aviso) {console.log("Haz click en la estrella");
      aviso=true;
      };
    }
    else 
    //aviso=false;

    this.on('pointerdown',()=>
    {
      this.setTint(0x00ff00)

      console.log("diario actualizado");
      diario.tetera=true;

      this.dialog.talk(); //Hace que el objeto diga la línea de diálogo al ser pulsado
    }
    );
  }
}
