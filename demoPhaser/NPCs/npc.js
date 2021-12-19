//Js importados
import Dialog from '../Utils/dialog.js';

//Clase para crear y gestionar los NPCs
export default class Npc extends Phaser.GameObjects.Sprite {
    /** Constructor de Npc
     * @param {Phaser.Scene} scene Escena 
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
     * @param {number} idNpc Identificador del personaje
     * @method aumentarIrritacion aumenta el nivel de irritacion del personaje tanto como especifique la variable cabreo
     * @method  showIrritacion muestra la irritacion en pantalla
     * @method getIrritacion devuleve el valor de la irritacion actual
     * @method getDialogo devuelve el dialogo asociado al personaje
     */

    constructor(scene, x, y, idNpc, anger, frame, dialogoIni) {
        super(scene, x, y, 'npcs', [frame]).setInteractive();

        this.setDepth(1);

        this.image = frame;
        this.id = idNpc;
        this.anims.create({
            key: 'anim',
            frames: this.anims.generateFrameNumbers('npcs', {
              start: frame,
              end: frame+1
            }),
            frameRate: 3,
            repeat: -1
          });
        //Se crea el personaje con físicas 
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this, true);
        this.play("anim",true);

        //Texto donde aparecera la irritacion
        this.label = this.scene.add.text(120, 2, "", {
            fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'
        });

        this.info = this.scene.scene.get('boot').cache.json.get('personajes').Personajes[this.id - 1];
        this.name = this.info.name;

        //Creamos el dialogo
        this.dialog = new Dialog(this.scene, dialogoIni, this);

        //Establecemos la variable de irritacion
        this.irritacion = anger;
        this.dialogScene = dialogoIni;

        this.e = this.scene.input.keyboard.addKey('E');

        //Si pulsamos la e
        this.e.on('down', () => {
            //Mientras tocamos al npc Y el jugador no está bloqueado..
            if (this.scene.physics.overlap(this.scene.player, this) && this.scene.player.canMove) {
                if (this.getIrritacion() < 100) {
                    this.dialog.initDialog();
                    this.apuntarEnDiario();
                } else {
                    this.dialog.dialogoIrritacionMax()
                }

            }
        });

        //Si hacemos click al npc
        this.on('pointerdown', () => {
            //Mientras tocamos al npc Y el jugador no está bloqueado..
            if (this.scene.physics.overlap(this.scene.player, this) && this.scene.player.canMove) {
                if (this.getIrritacion() < 100) {
                    this.dialog.initDialog();
                    this.apuntarEnDiario();
                } else {
                    this.dialog.dialogoIrritacionMax()
                }
            }
        });
    }

    //Metodo para aumentar el nivel de irritacion del personaje
    aumentarIrritacion(cabreo) {
        this.irritacion = this.irritacion + cabreo;
        this.scene.scene.get('boot').dmanager.npcinfoholder[this.id - 1].anger = this.irritacion;
    }

    cambiarScene() {
        this.dialogScene++;
        this.scene.scene.get('boot').dmanager.npcinfoholder[this.id - 1].dialogo = this.dialogScene;
    }

    //Metodo para devolver la irritacion
    getIrritacion() {
        return this.irritacion;
    }

    getDialogo() {
        return this.dialog;
    }

    apuntarEnDiario() {
        //Obtenemos una referencia al diario y añadimos la informacion necesaria
        if (this.info !== undefined) {
            this.scene.scene.get('diary').addCharacter(this.info)
        }
    }

    getscene() {
        return this.scene.scene.get(this.scene);
    }
}