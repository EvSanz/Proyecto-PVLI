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
     * @method aumentarIrritacion aumenta el nivel de irritacion del personaje tanto como especifique la variable cabreo
     * @method  showIrritacion muestra la irritacion en pantalla
     * @method getIrritacion devuleve el valor de la irritacion actual
     * @method getDialogo devuelve el dialogo asociado al personaje
     */

    constructor(scene, x, y, dialogoIni, anger, frame, locator)
     { 
        super(scene, x, y, 'npcs', [frame]).setInteractive(); 

        this.setDepth(1);

        this.image = frame;

        //Se crea el personaje con físicas 
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this, true);

        //Texto donde aparecera la irritacion
        this.label = this.scene.add.text(120, 2, "", 
        { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });

        this.chat = dialogoIni;

        this.info = this.scene.scene.get('boot').cache.json.get('personajes').Personajes[dialogoIni - 1];

        //Creamos el dialogo
        this.dialog = new Dialog(this.scene, locator, this);
        
        //Establecemos la variable de irritacion
        this.irritacion = anger; 
        this.locator=locator;
        //Creacion de la animacion de Guille (Prueba)
       /* this.anims.create ({
            key: 'guillestand',
            frames: this.anims.generateFrameNumbers
            ('npcs', { start: 4, end: 6 }),
            frameRate: 4, 
            repeat: -1    
        });

        this.play('guillestand',true);*/

        this.e = this.scene.input.keyboard.addKey('E');
        
        //Si pulsamos la e
        this.e.on('down', () => 
        {
            //Mientras tocamos al npc Y el jugador no está bloqueado..
            if (this.scene.physics.overlap(this.scene.player, this) && this.scene.player.canMove)
            {
                this.aumentarIrritacion(5);
                if (this.getIrritacion() < 100)
                { 
                    this.dialog.initDialog();
                    this.apuntarEnDiario();
                }

                else { this.dialog.dialogoIrritacionMax()}

            }
        });

        //Si hacemos click al npc
        this.on('pointerdown', ()=>
        {
            //Mientras tocamos al npc Y el jugador no está bloqueado..
            if (this.scene.physics.overlap(this.scene.player, this) && this.scene.player.canMove)
            {
                this.aumentarIrritacion(5);
                if (this.getIrritacion() < 100)
                {
                    this.dialog.initDialog();
                    this.apuntarEnDiario();
                }

                else { this.dialog.dialogoIrritacionMax()}
            }
        });
    }

    preUpdate()
    {
        super.preUpdate();

        if (this.scene.physics.overlap(this.scene.player, this)) {
            
            //Si esta colisionando con el jugador, mostramos la irritacion
            this.showIrritacion();
        }

        //Si no esta colisionando, eliminamos el texto
        else { this.label.text = "";}
    }

    //Metodo para aumentar el nivel de irritacion del personaje
    aumentarIrritacion(cabreo) 
    { 
       this.irritacion = this.irritacion + cabreo;
       console.log(this.irritacion);
       this.scene.scene.get('boot').dmanager.npcinfoholder[this.locator].anger=this.irritacion;
       //this.scene.game.npcholder[dialogoIni].anger=this.irritacion + cabreo;
      // this.irritacion=this.game.scene.npcholder[dialogoIni].anger;
      //this.irritacion=cabreo;
      //this.scene.get('boot').dmanager.npcinfoholder[dialogoIni].anger= this.scene.get('boot').dmanager.npcinfoholder[dialogoIni].anger + cabreo;
     //this.irritacion= this.scene.get('boot').dmanager.npcinfoholder[dialogoIni].anger;
      //this.irritacion=this.irritacion+cabreo;
      this.showIrritacion();
    }

    //Método para mostrar el tiempo en pantalla
    showIrritacion() 
    { 
        this.label.text = "Irritacion: " + this.irritacion;
    }

    //Metodo para devolver la irritacion
    getIrritacion() 
    { 
        return this.irritacion;
    }

    getDialogo() 
    {
        return this.dialog;
    }

    apuntarEnDiario()
    {
        //Obtenemos una referencia al diario y añadimos la informacion necesaria
        if (this.info !== undefined)
        {
            this.scene.scene.get('diary').addCharacter(this.info)
        }
    }
    getscene()
    {
        return this.scene.scene.get(this.scene);
    }

    increaseChatId()
    {
        this.chat++;
    }

    getChat()
    {
        return this.chat;
    }
}