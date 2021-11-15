//Clase para crear y gestionar los NPCs
export default class Npc extends Phaser.GameObjects.Sprite 
{
    /** Constructor de Npc
     * @param {Sceme} scene Escena 
     *@param {string} sprite Sprite 
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
     * @param {number} id Identificador del personaje
     * @param {number} irritacion Nivel de irritacion del NPC
     */

    constructor(scene, x, y, irritacion) { 
        super(scene, x, y, irritacion, 'guille').setInteractive(); 

        //Se crea el personaje con físicas 
        this.scene.add.existing(this); 
        this.scene.physics.add.existing(this, true);
    }

    preUpdate()
    {
        super.preUpdate();

        if (this.scene.physics.overlap(this.scene.player, this)) {}
    }
}