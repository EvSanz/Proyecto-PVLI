//Js importados
import Dialog from '../Utils/dialog.js';

//Clase encargada de crear y gestionar NPCs
export default class Npc extends Phaser.GameObjects.Sprite {
    
    /** Constructor de Npc:
     * Variables:
     * @param {Phaser.Scene} scene Escena 
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
     * @param {number} idNpc Identificador
     * @param {number} anger Irritacion
     * Metodos:
     * @method llamarDialogo Carga un dialogo u otro dependiendo de la irritacion
     * @method aumentarIrritacion Aumenta el nivel de irritacion
     * @method getIrritacion Devuelve el valor actual de irritacion
     * @method cambiarScene Aumentamos el valor de dialogo
     * @method apuntarEnDiario Cargamos informacion en el diario
     */

    constructor(scene, x, y, idNpc, anger, frame, dialogoIni) {
        super(scene, x, y, 'npcs', [frame]).setInteractive();

        //Establecemos sensacion de profundidad
        this.setDepth(1);

        //Asignamos el sprite, el identificador, el valor  
        //de irritacion y el dialogo actual a varias variables 
        this.image = frame;
        this.id = idNpc;
        this.irritacion = anger;
        this.dialogScene = dialogoIni;

        //Creamos la animacion del personaje
        this.anims.create({
            key: 'anim',
            frames: this.anims.generateFrameNumbers('npcs', {
              start: frame,
              end: frame + 1
            }),

            frameRate: 3,
            repeat: -1
        });

        //Añadimos el personaje con fisicas
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this, true);

        //Activamos la animacion del personaje
        this.play("anim", true);

        //Creamos una variable para llamar al personaje 
        //guardado en el json y obtenemos el nombre
        this.info = this.scene.scene.get('boot').cache.json.get('personajes').Personajes[this.id - 1];
        this.name = this.info.name;

        //Creamos el dialogo
        this.dialog = new Dialog(this.scene, this.dialogScene, this);

        //Cargamos el comando E
        this.e = this.scene.input.keyboard.addKey('E');

        //Si pulsamos E o hacemos click en el
        //personaje, llamamos al metodo llamarDialogo
        this.e.on('down', () => {this.llamarDialogo(); });
        this.on('pointerdown', () => {this.llamarDialogo(); });
    }


    //Método para llamar al dialogo que comenzaremos 
    //a reproducir dependiendo de la irritacion
    llamarDialogo()
    {
        //Si el jugador no está interactuando con otro personaje
        //y su collider colisiona con el de un npc...
        if (this.scene.physics.overlap(this.scene.player, this) 
        && this.scene.player.canMove) {

            //Dependiendo del estado de irritacion, cargaremos
            //un dialogo u otro
            if (this.getIrritacion() < 100) {
            this.dialog.initDialog();
            this.apuntarEnDiario();
            } 

            else {this.dialog.dialogoIrritacionMax(); }
        }
    }


    //Metodo para aumentar el valor de irritacion
    aumentarIrritacion(cabreo) {

        this.irritacion = this.irritacion + cabreo;
        //Actualizamos el valor almacenado de irritacion
        this.scene.game.npcholder[this.id - 1].anger = this.irritacion;
    }


    //Metodo para pasar al siguiente dialogo
    cambiarScene() {

        this.dialogScene++;
        //Actualizamos el valor almacenado de dialogo
        this.scene.game.npcholder[this.id - 1].dialogo = this.dialogScene;
    }


    //Metodo para devolver el valor actual de irritacion
    getIrritacion() {return this.irritacion; }


    //Metodo para cargar informacion en el diario
    apuntarEnDiario() {

        //Si hay informacion del personaje, se añade en el diario
        if (this.info !== undefined) {
            this.scene.scene.get('diary').addCharacter(this.info)
        }
    }
}