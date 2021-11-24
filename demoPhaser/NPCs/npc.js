//Js importados
import Dialog from '../Utils/dialog.js';

//Clase para crear y gestionar los NPCs
export default class Npc extends Phaser.GameObjects.Sprite 
{
    /** Constructor de Npc
     * @param {Phaser.Scene} scene Escena 
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
     * @param {number} id Identificador del personaje
     * @param {number} dialogoIni Identificador del dialogo inicial
     */

    constructor(scene, x, y, dialogoIni) { 
        super(scene, x, y,'npcs',[5]).setInteractive(); 

        //Se crea el personaje con físicas 
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this, true);

        this.chat = dialogoIni;

        //Creamos el dialogo
        this.dialog = new Dialog(this.scene, this.chat);

        //Creacion de la animacion de Guille (Prueba)
        this.anims.create ({
            key: 'guillestand',
            frames: this.anims.generateFrameNumbers
            ('npcs', { start: 4, end: 5 }),
            frameRate: 4, 
            repeat: -1    
          });

          this.play('guillestand',true);    
    }

    preUpdate()
    {
        super.preUpdate();
      
        if (this.scene.physics.overlap(this.scene.player, this)) {
            this.on('pointerdown', ()=>
          {
              this.dialog.talk();
          });
        }
    }
}