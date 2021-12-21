//Clase de sospechosos
export default class Sus extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, escenafin, name, frame) {
        super(scene, x, y, 'npcs', [frame]).setInteractive();

        //Escena que generan cuando interactuas con ellos
        this.fin = escenafin;
        this.scene = scene;
        //Nombre del personaje
        this.name = name;

        //Si haces click en el personaje, inician la escena
        this.on('pointerdown', () => {
            this.scene.scene.start(this.fin);
        });
    }

}