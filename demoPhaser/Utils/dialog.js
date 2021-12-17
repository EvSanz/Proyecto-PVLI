 //Js archivados
 import Clock from "./clock.js";
 import Npc from "../NPCs/npc.js";

 //Clase para gestionar los dialogos
 export default class Dialog {
   /** Constructor de Npc
    * @param {Phaser.Scene} scene Escena 
    * @param {number} id Identificador del dialogo que leeremos
    * @param {Npc} npc Npc asociado a este dialogo
    */

   constructor(scene, id, npc) {
     this.scene = scene;
     this.myData = null;

     //npc asociado a este dialogo
     this.currentNpc = npc;

     this.id = id;

     //this.readTextFile("Jsons/dialogues.json", this.onJsonRead, this); 
     //Linea de dialogo
     this.textNum = 0;

     //Bloque de dialogo
     this.chat = 0;
     //Textos
     this.label = this.scene.add.text(275, 375, " ", {
       wordWrap: {
         width: 400
       }
     });
     this.label2 = this.scene.add.text(275, 425, " ", {
       wordWrap: {
         width: 400
       }
     });
     this.graphics = null;
   }

   initDialog() {

     //Bloqueamos el movimiento del jugador
     if (this.scene.player != null) {
       this.scene.player.canMove = false;
     }


     this.scene.locked = true;

     this.myData = this.scene.scene.get('boot').myDialog;

     this.talk();
   }

   talk() {

     //Se borran los cuadros si queda alguna traza de dialogos anteriores
     if (this.graphics !== undefined && this.graphics2 !== undefined) {
       this.graphics.destroy();
       this.graphics2.destroy();
     }

     this.createBox();

     //Primera linea de dialogo
     this.textNum = 0;

     //Si lo que ha activado el dialogo es un npc...
     if (this.myData.Dialogues[this.id].isObject == false) {
       //renderizamos la imagen del npc
       this.changePortrait(this.currentNpc.image);
     }

     //Si lo es...
     else {
       //renderizamos al inspector
       this.changePortrait(0);
     }

     //Texto
     this.label.text = this.myData.Dialogues[this.id].scenes[this.chat].lines[this.textNum];
     this.label2.text = "";
   }

   nextText() {
     //Comprobamos si no ha llegado a las opciones de dialogo
     if (this.textNum != this.myData.Dialogues[this.id].scenes[this.chat].opciones - 1) {
       //Si lo que ha activado el dialogo es un npc...
       if (this.myData.Dialogues[this.id].isObject == false) {
         //renderizamos la imagen del npc
         this.changePortrait(this.currentNpc.image);
       }

       //Si lo es...
       else {
         //renderizamos al inspector
         this.changePortrait(0);
       }

       this.textNum++;
       this.label.text = this.myData.Dialogues[this.id].scenes[this.chat].lines[this.textNum];
     }

     //Si hemos llegado a unas opciones de dialogo...
     else {
       //renderizamos el retrato del inspector
       this.changePortrait(0);

       //Escribimos las opciones de dialogo, separadas entre ellas
       this.textNum++;
       this.label.text = this.myData.Dialogues[this.id].scenes[this.chat].lines[this.textNum];

       if (this.textNum < this.myData.Dialogues[this.id].scenes[this.chat].lines.length) {
         this.textNum++;
         this.label2.text = this.myData.Dialogues[this.id].scenes[this.chat].lines[this.textNum];
       }
     }

     this.finishText();
   }

   //Metodo para finalizar el dialogo
   finishText() {

     //Comprobamos que no hay elecciones de dialogo y 
     //que no quedan lineas de dialogo por decir
     if (this.textNum >= this.myData.Dialogues[this.id].scenes[this.chat].lines.length &&
       this.myData.Dialogues[this.id].scenes[this.chat].opciones == -1) {
       //Comprobamos el booleano de reloj, y si esta activado,
       //disminuimos el contador de reloj
       if (this.myData.Dialogues[this.id].scenes[this.chat].clock) {
         this.scene.scene.get('boot').consultClock().decreaseTime(this.scene);
       }

       //Si no es el ultimo dialogo que pueden tener, aumentamos 
       //el numero del dialogo actual
       if (this.myData.Dialogues[this.id].ultDialogo == false &&
         this.myData.Dialogues[this.id].isObject == false) {
         this.id++;
         this.currentNpc.cambiarScene();
       } else {
         //Irritacion solo si existe un npc 
         if (this.myData.Dialogues[this.id].isObject == false) {
           this.currentNpc.aumentarIrritacion(this.myData.Dialogues[this.id].scenes[this.chat].irritacion);
         }
       }

       this.chat = 0;

       //Eliminamos el retrato
       this.changePortrait();

       //Destruimos los cuadros de opciones
       this.graphics.destroy();
       this.graphics2.destroy();

       //Y permitimos al jugador moverse otra vez
       if (this.scene.player != null) {
         this.scene.player.canMove = true;
       }

       this.scene.locked = false;

     }
   }

   dialogoIrritacionMax() {
     //Bloqueamos el movimiento del jugador
     if (this.scene.player != null) {
       this.scene.player.canMove = false;
     }

     this.scene.locked = true;

     //renderizamos la imagen del npc
     this.changePortrait(this.currentNpc.image);

     this.label.text = "No pienso seguir hablando";
   }

   interaccionDialogo(n) {
     if (this.currentNpc !== undefined) {
       if (this.currentNpc.getIrritacion() < 100) {
         if (this.textNum >= this.myData.Dialogues[this.id].scenes[this.chat].lines.length - 1 &&
           this.myData.Dialogues[this.id].scenes[this.chat].opciones != -1) {
           this.chat = this.chat + n;
           //Modificar la irritacion del npc segun el dialogo
           this.currentNpc.aumentarIrritacion(this.myData.Dialogues[this.id].scenes[this.chat].irritacion);

           this.talk()
         } else {
           this.nextText();
         }
       } else {
         if (this.chat == 0) {
           this.label.text = "";
         } else {
           this.label.text = "Fuera de mi vista";
           this.chat = 0;
         }

         if (this.scene.player != null) {
           this.scene.player.canMove = true;
         }

         this.scene.locked = false;
       }

     } else {
       this.nextText();
     }
   }

   createBox() {
     //Establecemos cuadros de texto interactivos donde 
     //apareceran las respuestas 

     //Primer bloque
     this.graphics = new Phaser.GameObjects.Rectangle(this.scene, 200, 400, 1600, 50, 0xfffffff, 0xfffffff);
     this.graphics.setInteractive();

     //Segundo bloque
     this.graphics2 = new Phaser.GameObjects.Rectangle(this.scene, 200, 450, 1600, 50, 0xfffffff, 0xfffffff);
     this.graphics2.setInteractive();

     //Dependiendo del rectangulo que pulsemos, si es una respuesta 
     //conducira al siguiente bloque de dialogo y reseteara valores

     //Primer bloque
     this.graphics.on('pointerdown', () => {
       this.interaccionDialogo(1);
     });

     //Segundo bloque
     this.graphics2.on('pointerdown', () => {
       this.interaccionDialogo(2);
     });
   }

   /** Cambia el retrato que aparece a la izquierda del cuadro de dialogo
    * @param {number} image Frame correspondiente al npc en la spritesheet de npcs (dejar en blanco o en valor negativo para borrar el retrato)
    */
   changePortrait(image = -1) {
     //Borramos el retrato anterior
     if (this.portrait !== undefined) {
       this.portrait.destroy();
     }

     //Si image es positivo, renderizamos otro sprite
     if (image >= 0) {

       this.portrait = this.scene.add.sprite(120, 480, 'npcs', [image]);

       this.portrait.setCrop(0, 0, 120, 108);

       //La imagen del inspector (0) esta dada la vuelta con respecto a los demas npcs
       this.portrait.flipX = image !== 0 ? true : false;
     }
   }
 }