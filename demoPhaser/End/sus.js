
export default class Npc extends Phaser.GameObjects.Sprite 
{

    constructor(scene, x, y, escenafin,frame)
{   super(scene, x, y, 'npcs', [frame]).setInteractive(); 

    this.fin=escenafin;
    this.scene=scene;
    this.on('pointerdown', ()=>
    {

    this.scene.scene.start(this.fin);

    });
}

}