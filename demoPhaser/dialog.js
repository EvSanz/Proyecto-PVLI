/**
 * Clase para gestionar diálogos
 * @see {@link https://stackoverflow.com/questions/19706046/how-to-read-an-external-local-json-file-in-javascript} como ejemplo
 * sobre cómo leer jsons
 */

export default class Dialog
{
  constructor(scene)
  {
    this.lines = [];
    this.scene = scene;
    this.label = this.scene.add.text(200, 375, "");
    this.myData = null;
    this.readTextFile("jsons/dialogues.json", this.onJsonRead, this);
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
    console.log(dialog.myData);
    console.log(dialog.myData.Dialogues[0].char);
  }

  talk()
  {
    this.label.text = this.myData.Dialogues[0].scenes[0].lines[0];
  }
}