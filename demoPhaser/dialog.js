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
    this.readTextFile("jsons/dialogues.json", this.onJsonRead, this);
    this.textNum = 0;
    this.label = this.scene.add.text(200, 375, "");
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
    this.textNum = 0;
    this.label.text = this.myData.Dialogues[0].scenes[0].lines[this.textNum];
  }

  nextText()
  {
    if (this.textNum < this.myData.Dialogues[0].scenes[0].lines.length)
    {
      this.textNum++;
      this.label.text = this.myData.Dialogues[0].scenes[0].lines[this.textNum];
    }
    else
    {
      //textNum = 0; initText
    }
   
  }

  createBox()
  {
      //this.graphics = this.scene.add.rectangle(200, 450, 1600, 200, 0xff6699, 0xff6699); //Debug para mirar tamaño de caja de texto
      this.graphics = new Phaser.GameObjects.Rectangle(this.scene, 200, 450, 1600, 200, 0xfffffff, 0xfffffff);
      this.graphics.setInteractive();

      this.graphics.on('pointerdown', () => 
      { 
          console.log('pointerover'); 
          this.nextText();
      });
  }

}