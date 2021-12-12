//Clase encargada de gestionar el diario
export default class Diary extends Phaser.Scene {
  constructor()
  { 
    super({key: 'diary'});

    this.objectList = [];

    this.characterList = [];

    this.letterSize = 20;
  }

  //Cargamos la escena inicial
  init (actualScene) { this.currentScene = actualScene;}

  create() 
  {
    //Añadimos el sprite del diario
    this.add.sprite(500, 260, 'diary');

    //Por cada elemento del array de objetos se dibuja en el orden que se han obtenido
    this.objectList.forEach(function showObjects(element, index) {

      let yPos;

      //si el objeto se sale de la línea, la cambiamos
      if (index < 4){
        yPos = 125;
      }
      else if (index < 8){
        yPos = 230;
      }
      else{
        yPos = 335;
      }

      this.item = this.add.sprite(105 + ((index % 4) * 105), yPos, element.sprite).setInteractive();

      this.item.on('pointerover', () => 
      {

        this.showInfoPanel(true, element.desc)

      })
      this.item.on('pointerout', () => 
      {

        this.showInfoPanel(false)

      })

    }, this);


    //Por cada personaje interrogado sale un poco de informacion de ellos
    this.characterList.forEach(function showSuspects(element, index) {

      let xPos;

      if (index < 6)
        xPos = 540;
      else
        xPos = 740;


      //Mostramos el nombre...
      this.name = this.add.text(xPos, 100 + (index % 6) * (this.letterSize * 2.5), element.name,
        { fontSize: this.letterSize, color: 'black', fontStyle: 'bold', wordWrap: { width: 400 } }).setInteractive();

      this.name.on('pointerover', () => 
      {

        this.showInfoPanel(true, element.desc)

      })
      this.name.on('pointerout', () => 
      {

        this.showInfoPanel(false)

      })

    }, this);

    //Añadimos el comando para desactivar el diario 
    this.q = this.input.keyboard.addKey('Q'); 
    this.q.on('down', () => {
      this.scene.stop();
      this.scene.resume(this.currentScene);
    })
  }

  showInfoPanel(active, text = ' ')
  {
    if (active)
    {
      this.panel = this.add.sprite(500, 475, 'infopanel');
      this.description = this.add.text(200, 410, text, { fontSize: this.letterSize * 0.8, color: 'white', wordWrap: { width: 600 } });
    }
    else 
    {
      this.panel.destroy();
      this.description.destroy();
    }
  }

  /** Agrega un objeto al array de objetos en el orden que se recogen
  * @param {GameObject} obj Objeto a agregar
  */
  addObject(obj)
  {
    if (obj.sprite !== null && obj.desc !== null)
      this.objectList.push(obj);
  }

  /** Agrega un personaje al array de personajes, pero primero se asegura que tiene los parametros necesarios
  * @param {Struct} char Struct que contiene el nombre (name) y la coartada (desc)
  */
  addCharacter(char)
  {
    let valido = true;

    if (char.name != null && char.desc != null)

      this.characterList.forEach(element => 
      {
        if (valido && element.name === char.name)
          valido = false
      });

    if (valido)
      this.characterList.push(char);
  }
}
