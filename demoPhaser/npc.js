//Clase para crear y gestionar los NPCs
export default class Npc extends Phaser.GameObjects.Sprite 
{
    /** Constructor de Npc
     * @param {Phaser.Scene} scene Escena 
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
     * @param {number} id Identificador del personaje
     * @param {number} irritacion Nivel de irritacion del NPC
     */

    constructor(scene, x, y, irritacion) { 
        super(scene, x, y,'npcs',[5]).setInteractive(); 

        //Se crea el personaje con físicas 
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this, true);

        //Creacion de la animacion de Guille (Prueba)
        this.anims.create ({
            key: 'guillestand',
            frames: this.anims.generateFrameNumbers
            ('npcs', { start: 4, end: 5 }),
            frameRate: 4, 
            repeat: -1    
          });
          this.play('guillestand',true); 
        
          
      
       // console.log("guileeeee");
    }

    preUpdate()
    {
        super.preUpdate();
      
        if (this.scene.physics.overlap(this.scene.player, this)) {
            console.log(",mkjhgfdghjkl"); 
        }
    }
}