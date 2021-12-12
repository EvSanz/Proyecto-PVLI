//Js archivados
import Clock from "./clock.js";
import Npc from "../NPCs/npc.js";

//Clase para gestionar los dialogos
export default class Dialog
{
  /** Constructor de Npc
  * @param {Phaser.Scene} scene Escena 
  * @param {number} id Identificador del dialogo que leeremos
  * @param {Npc} npc npc
  */

  constructor(scene, id, npc)
  {
    this.scene = scene;
    this.myData = null;

    //npc asociado a este dialogo
    this.currentNpc = npc;
    this.id = id;

    console.log("Se construye el dialog de " + this.id);
    console.log("npc: " + this.currentNpc);

    //this.readTextFile("Jsons/dialogues.json", this.onJsonRead, this); 
    //Linea de dialogo
    this.textNum = 0;

    //Bloque de dialogo
    this.chat = 0;
    //Textos
    this.label = this.scene.add.text(275, 375, " ", { wordWrap: { width: 400 } });
    this.label2 = this.scene.add.text(275, 425, " ", { wordWrap: { width: 400 } });
    this.label3 = this.scene.add.text(275, 475, " ", { wordWrap: { width: 400 } });
    this.graphics = null;  
  }

  initDialog()
  {
    console.log("Dialog: ", this.scene.scene.get('boot').myDialog); //Traza para comprobar que Dialogues es accesible y tiene contenido
    console.log("Id: " + this.id);
    this.myData = this.scene.scene.get('boot').myDialog;

    this.talk();
  }

  talk()
  {
    if (this.graphics !== undefined && this.graphics2 !== undefined && this.graphics3 !== undefined)
    {
      this.graphics.destroy();
      this.graphics2.destroy();
      this.graphics3.destroy();
    }
    //Bloqueamos el movimiento del jugador
    if (this.scene.player != null) {this.scene.player.canMove = false;}

    this.createBox();
    //Primera linea de dialogo
    console.log("Textnum inicio talk: " + this.textNum + " para " + this.id);
    this.textNum = 0;  

    console.log("Textnum final talk: " + this.textNum + " para " + this.id);
    //Texto
    this.label.text = this.myData.Dialogues[this.id].scenes[this.chat].lines[this.textNum];
    this.label2.text = "";
    this.label3.text = "";
  }

  nextText()
  {
    console.log("Textnum inicio nextText: " + this.textNum + " para " + this.id);
      //Comprobamos si no ha llegado a las opciones de dialogo
      if (this.textNum != this.myData.Dialogues[this.id].scenes[this.chat].opciones - 1)
    {
      this.textNum++;
      this.label.text = this.myData.Dialogues[this.id].scenes[this.chat].lines[this.textNum];
    }
    
    else
    {
      //Escribimos las opciones de dialogo, separadas entre ellas
      this.textNum++;
      this.label.text = this.myData.Dialogues[this.id].scenes[this.chat].lines[this.textNum];

      if (this.textNum < this.myData.Dialogues[this.id].scenes[this.chat].lines.length)
      {
        this.textNum++;
        this.label2.text = this.myData.Dialogues[this.id].scenes[this.chat].lines[this.textNum];
      }

      //No siempre habra tres opciones, asi que ponemos una condicion para 
      //escribir la tercera respuesta si hay
      if (this.textNum < this.myData.Dialogues[this.id].scenes[this.chat].lines.length)
      {
        this.textNum++;
        this.label3.text = this.myData.Dialogues[this.id].scenes[this.chat].lines[this.textNum];
      }   
    }
    
    console.log("Textnum final nextText: " + this.textNum + " para " + this.id);

    this.finishText();
  }

  //Metodo para finalizar el dialogo
  finishText()
  {
    //Comprobamos que no hay elecciones de dialogo y 
    //que no quedan lineas de dialogo por decir
    if (this.textNum >= this.myData.Dialogues[this.id].scenes[this.chat].lines.length
       && this.myData.Dialogues[this.id].scenes[this.chat].opciones == -1) 
    {
      //Comprobamos el booleano de reloj, y si esta activado,
      //disminuimos el contador de reloj
      if (this.myData.Dialogues[this.id].scenes[this.chat].clock)
      {
        this.scene.scene.get('boot').consultClock().decreaseTime(this.scene);
      }

      //Si no es el ultimo dialogo que pueden tener, aumentamos 
      //el numero del dialogo actual
      if (this.myData.Dialogues[this.id].ultDialogo == false 
        && this.myData.Dialogues[this.id].isObject == false)
      {
        this.id++;
      }
        
      else
      {
        //Irritacion solo si existe un npc 
        if (this.myData.Dialogues[this.id].isObject == false)
        {
          this.currentNpc.aumentarIrritacion(this.myData.Dialogues[this.id].scenes[this.chat].irritacion);
          console.log("Irritacion: " + this.myData.Dialogues[this.id].scenes[this.chat].irritacion);
        }
      }

      this.chat = 0;

      this.graphics.destroy();
      this.graphics2.destroy();
      this.graphics3.destroy();

      //Y permitimos al jugador moverse otra vez
      if (this.scene.player != null) {this.scene.player.canMove = true;}
    }
  }

  dialogoIrritacionMax()
  {
    console.log("Dentro del dialogoIrritacionMax");

    //Bloqueamos el movimiento del jugador
    if (this.scene.player != null) {this.scene.player.canMove = false;}

    this.label.text = "No pienso seguir hablando"; 
  }

  createBox()
  {
      //Establecemos cuadros de texto interactivos donde 
      //apareceran las respuestas 

      //Primer bloque
      this.graphics = new Phaser.GameObjects.Rectangle
      (this.scene, 200, 400, 1600, 50, 0xfffffff, 0xfffffff);
      this.graphics.setInteractive();

      //Segundo bloque
      this.graphics2 = new Phaser.GameObjects.Rectangle
      (this.scene, 200, 450, 1600, 50, 0xfffffff, 0xfffffff);
      this.graphics2.setInteractive();
      
      //Tercer bloque
      this.graphics3 = new Phaser.GameObjects.Rectangle
      (this.scene, 200, 500, 1600, 50, 0xfffffff, 0xfffffff);
      this.graphics3.setInteractive();
      
      //Dependiendo del rectangulo que pulsemos, si es una respuesta 
      //conducira al siguiente bloque de dialogo y reseteara valores


      //IMPORTANTE: ESTO ESTA CONECTADO A DIALOG, NO A BOOT, A DIALOG LE TIENE Q LLEGAR EL JSON
      //Primer bloque
      this.graphics.on('pointerdown', () => 
      {
        if (this.currentNpc === undefined)
        {
          this.nextText();
          return;
        }
        if (this.currentNpc.getIrritacion() < 100)
        {
          //Si no hay mas lineas de dialogo y es una opcion de respuestas
          //reseteamos valores y cambiamos el bloque del dialogo al siguiente
          if (this.textNum >= this.myData.Dialogues[this.id].scenes[this.chat].lines.length - 1
            && this.myData.Dialogues[this.id].scenes[this.chat].opciones != -1)
          {
            this.chat++;
            //Modificar la irritacion del npc segun el dialogo
            this.currentNpc.aumentarIrritacion(this.myData.Dialogues[this.id].scenes[this.chat].irritacion);
            console.log("Irritacion: " + this.myData.Dialogues[this.id].scenes[this.chat].irritacion);
            
            this.talk()
          }

          //Si hay, cargamos el siguiente texto
          else
          { this.nextText();}
        }

        else
          {
            console.log("Elimino el texto de cabreo"); 

            if (this.chat == 0) { this.label.text = "";}
            else 
            {   
              this.label.text = "Fuera de mi vista";
              this.chat = 0; 
            }

            if (this.scene.player != null) {this.scene.player.canMove = true;} 
          }
      });

      //Segundo bloque
      this.graphics2.on('pointerdown', () => 
      { 
        if (this.currentNpc.getIrritacion() < 100) {
          if (this.textNum >= this.myData.Dialogues[this.id].scenes[this.chat].lines.length - 1
            && this.myData.Dialogues[this.id].scenes[this.chat].opciones != -1)
          {
            this.chat = this.chat + 2;
            //Modificar la irritacion del npc segun el dialogo
            this.currentNpc.aumentarIrritacion(this.myData.Dialogues[this.id].scenes[this.chat].irritacion);
            console.log("Irritacion: " + this.myData.Dialogues[this.id].scenes[this.chat].irritacion);

            this.talk()
          }

          else 
          { this.nextText();}
        }

        else
          {
            console.log("Elimino el texto de cabreo");

            if (this.chat == 0) { this.label.text = "";}
            else 
            {   
              this.label.text = "Fuera de mi vista";
              this.chat = 0; 
            }

            if (this.scene.player != null) {this.scene.player.canMove = true;} 
          }
      });

      //Tercer bloque
      this.graphics3.on('pointerdown', () => 
      { 
        if (this.currentNpc.getIrritacion() < 100)
        {
          if (this.textNum >= this.myData.Dialogues[this.id].scenes[this.chat].lines.length - 1
            && this.myData.Dialogues[this.id].scenes[this.chat].opciones != -1)
          {
            this.chat = this.chat + 3;
            //Modificar la irritacion del npc segun el dialogo
            this.currentNpc.aumentarIrritacion(this.myData.Dialogues[this.id].scenes[this.chat].irritacion);
            console.log("Irritacion: " + this.myData.Dialogues[this.id].scenes[this.chat].irritacion);
            
            this.talk()
          }

          else 
          { this.nextText();}
        }

        else
          {
            console.log("Elimino el texto de cabreo"); 
            
            if (this.chat == 0) { this.label.text = "";}
            else 
            {   
              this.label.text = "Fuera de mi vista";
              this.chat = 0; 
            }
            
            if (this.scene.player != null) {this.scene.player.canMove = true;} 
          }
      });
  }
}




