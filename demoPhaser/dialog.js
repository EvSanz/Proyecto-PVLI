//Js archivados
import Clock from "./clock.js";

//Clase para gestionar los dialogos
export default class Dialog
{
  /** Constructor de Npc
  * @param {Phaser.Scene} scene Escena 
  * @param {Clock} clock el reloj que modifica el dialogo
  */
  constructor(scene)
  {
    this.scene = scene;
    this.myData = null;
    this.readTextFile("Jsons/dialogues.json", this.onJsonRead, this); 
    //Linea de dialogo
    this.textNum = 0;
    //Bloque de dialogo
    this.chat = 0; 
    //Textos
    this.label = this.scene.add.text(275, 375, "");
    this.label2 = this.scene.add.text(275, 425, "");
    this.label3 = this.scene.add.text(275, 475, "");
    this.graphics = null;
    //this.scene.player.clock.decreaseTime();
    //this.clock=this.scene.player.clock;
    //this.clock.decreaseTime(); da undefined :(

    
  }

  readTextFile(file, callback, dialog) 
  {
    let rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() 
    {
        if (rawFile.readyState === 4 && rawFile.status == "200") 
        { callback(rawFile.responseText, dialog);}
        
    }

    rawFile.send(null);
  }

  onJsonRead(text, dialog) { dialog.myData = JSON.parse(text);}

  talk()
  {
    this.createBox();

    //Primera linea de dialogo
    this.textNum = 0;  
    //Texto
    this.label.text = this.myData.Dialogues[0].scenes[this.chat].lines[this.textNum];
    this.label2.text = "";
    this.label3.text = "";
  }

  nextText()
  {
    //Comprobamos si queda frases por mostrar
    if (this.textNum < this.myData.Dialogues[0].scenes[this.chat].lines.length)
    {

      //Comprobamos si no ha llegado a las opciones de dialogo
      if (this.textNum != this.myData.Dialogues[0].scenes[this.chat].opciones - 1)
    {
      this.textNum++;
      this.label.text = this.myData.Dialogues[0].scenes[this.chat].lines[this.textNum];
    }

    else
    {
      //Escribimos las opciones de dialogo, separadas entre ellas
      this.textNum++;
      this.label.text = this.myData.Dialogues[0].scenes[this.chat].lines[this.textNum];
      this.textNum++;
      this.label2.text = this.myData.Dialogues[0].scenes[this.chat].lines[this.textNum]

      //No siempre habra tres opciones, asi que ponemos una condicion para 
      //escribir la tercera respuesta si hay
      if (this.textNum < this.myData.Dialogues[0].scenes[this.chat].lines.length)
      {
        this.textNum++;
        this.label3.text = this.myData.Dialogues[0].scenes[this.chat].lines[this.textNum];
      }
    }
    }
    //si se ha terminado la conversacion y es una conversacion no trivial que gasta tiempo , modificamos el reloj
    else {
     // this.reloj.decreaseTime();
      console.log('FIN');
    }
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

      //Primer bloque
      this.graphics.on('pointerdown', () => 
      { 
          //Si no hay mas lineas de dialogo y es una opcion de respuestas
          //reseteamos valores y cambiamos el bloque del dialogo al siguiente
          if (this.textNum == this.myData.Dialogues[0].scenes[this.chat].lines.length - 1
            && this.myData.Dialogues[0].scenes[this.chat].opciones != -1)
          {
            this.chat++;
            this.talk()
          }

          //Si hay, cargamos el siguiente texto
          else
          { this.nextText();}
      });

      //Segundo bloque
      this.graphics2.on('pointerdown', () => 
      { 
          if (this.textNum == this.myData.Dialogues[0].scenes[this.chat].lines.length - 1
            && this.myData.Dialogues[0].scenes[this.chat].opciones != -1)
          {
            this.chat = this.chat + 2;
            this.talk()
          }

          else { this.nextText();}
      });

      //Tercer bloque
      this.graphics3.on('pointerdown', () => 
      { 
          if (this.textNum == this.myData.Dialogues[0].scenes[this.chat].lines.length - 1
            && this.myData.Dialogues[0].scenes[this.chat].opciones != -1)
          {
            this.chat = this.chat + 3;
            this.talk()
          }

          else { this.nextText();}
      });
  }

}