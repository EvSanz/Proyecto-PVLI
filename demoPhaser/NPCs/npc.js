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

    constructor(scene, x, y, dialogoIni,anger,frame,locator)
     { 
        super(scene, x, y, 'npcs', [frame]).setInteractive(); 

        this.setDepth(1);

        //Se crea el personaje con físicas 
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this, true);

        //Texto donde aparecera la irritacion
        this.label = this.scene.add.text(120, 2, "", 
        { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });

        this.chat = dialogoIni;

        let rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", "Jsons/personajes.json", true);

        rawFile.onreadystatechange = () =>
        {
            if (rawFile.readyState === 4 && rawFile.status == "200")
            {
                this.info = JSON.parse(rawFile.responseText).Personajes[dialogoIni - 1];
            }
        }

        rawFile.send(null);


        //Creamos el dialogo
        this.dialog = new Dialog(this.scene, this.chat);
        
        //Establecemos la variable de irritacion
        this.irritacion = anger; 
        
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
       this.scene.scene.get('boot').dmanager.npcinfoholder[0].anger=this.irritacion;
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
        this.scene.scene.get('diary').addCharacter(this.info)
    }
    getscene()
    {
        return this.scene.scene.get(this.scene);

    }
}