/**
 * Clase para gestionar diálogos
 * @see {@link https://stackoverflow.com/questions/19706046/how-to-read-an-external-local-json-file-in-javascript} como ejemplo
 * sobre cómo leer jsons
 */

export default class Dialog
{
  constructor(scene)
  {
    this.scene = scene;
    this.myData = null;
    //this.myData = JSON.parse(this.cache.getText('dialogue'));
    this.readTextFile("Jsons/dialogues.json", this.onJsonRead, this); // 'dialogue' no funciona
    //Linea de dialogo
    this.textNum = 0;
    //Bloque de dialogo
    this.chat = 0; 
    //Textos
    this.label = this.scene.add.text(275, 375, "");
    this.label2 = this.scene.add.text(275, 425, "");
    this.label3 = this.scene.add.text(275, 475, "");
    this.graphics = null;
  }

  readTextFile(file, callback, dialog) 
  {
    let rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() 
    {
        if (rawFile.readyState === 4 && rawFile.status == "200") 
        {
            callback(rawFile.responseText, dialog);
        }
    }
    rawFile.send(null);
  }

  onJsonRead(text, dialog)
  {
    dialog.myData = JSON.parse(text);
    //console.log(dialog.myData);
    //console.log(dialog.myData.Dialogues[0].char);
  }

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

      //No siempre habra 3 opciones, asi que ponemos una condicion para 
      //escribir la tercera respuesta solo si hay
      if (this.textNum < this.myData.Dialogues[0].scenes[this.chat].lines.length)
      {
        this.textNum++;
        this.label3.text = this.myData.Dialogues[0].scenes[this.chat].lines[this.textNum];
      }
    }
    }
  }

  createBox()
  {
      //this.graphics = this.scene.add.rectangle(200, 450, 1600, 200, 0xff6699, 0xff6699); //Debug para mirar tamaño de caja de texto
      
      //Establecemos 3 cuadros de texto, donde apareceran las diferentes respuestas
      //y los hacemos interactivos
      this.graphics = new Phaser.GameObjects.Rectangle(this.scene, 200, 400, 1600, 50, 0xfffffff, 0xfffffff);
      this.graphics.setInteractive();
      this.graphics2 = new Phaser.GameObjects.Rectangle(this.scene, 200, 450, 1600, 50, 0xfffffff, 0xfffffff);
      this.graphics2.setInteractive();
      this.graphics3 = new Phaser.GameObjects.Rectangle(this.scene, 200, 500, 1600, 50, 0xfffffff, 0xfffffff);
      this.graphics3.setInteractive();

      //Dependiendo del rectangulo que pulsemos, si es una respuesta 
      //conducira al siguiente bloque de dialogo y reseteara valores
      this.graphics.on('pointerdown', () => 
      { 
          console.log('pointer1over');

          //Si no hay mas lineas de dialogo y es una opcion de respuestas
          //reseteamos valores y cambiamos el bloque del dialogo al siguiente
          if (this.textNum == this.myData.Dialogues[0].scenes[this.chat].lines.length - 1
            && this.myData.Dialogues[0].scenes[this.chat].opciones != -1)
          {
            this.chat++;
            this.talk()
          }

          else
          {
            this.nextText();
          }
      });

      this.graphics2.on('pointerdown', () => 
      { 
          console.log('pointer2over');

          //Si no hay mas lineas de dialogo y es una opcion de respuestas
          //reseteamos valores y cambiamos el bloque del dialogo al siguiente
          if (this.textNum == this.myData.Dialogues[0].scenes[this.chat].lines.length - 1
            && this.myData.Dialogues[0].scenes[this.chat].opciones != -1)
          {
            this.chat = this.chat + 2;
            this.talk()
          }

          else
          {
            this.nextText();
          }
      });

      this.graphics3.on('pointerdown', () => 
      { 
          console.log('pointer3over');

          //Si no hay mas lineas de dialogo y es una opcion de respuestas
          //reseteamos valores y cambiamos el bloque del dialogo al siguiente
          if (this.textNum == this.myData.Dialogues[0].scenes[this.chat].lines.length - 1
            && this.myData.Dialogues[0].scenes[this.chat].opciones != -1)
          {
            this.chat = this.chat + 3;
            this.talk()
          }

          else
          {
            this.nextText();
          }
      });
  }

}