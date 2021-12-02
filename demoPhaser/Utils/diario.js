//Clase encargada de gestionar el diario
export default class Diary extends Phaser.Scene {
  constructor()
  { 
    super({key: 'diary'});

    this.objectList = [];

    this.characterList = [];

    this.letterSize = 17;
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

      this.add.sprite(105 + ((index % 4) * 105), yPos, element.sprite);

    }, this);


    //Por cada personaje interrogado sale un poco de informacion de ellos
    this.characterList.forEach(function showSuspects(element, index) {

      //Mostramos el nombre...
      this.add.text(540, 90 + index * this.letterSize * 1.8, element.name,
        { fontSize: this.letterSize, color: 'black', fontStyle: 'bold', wordWrap: { width: 400 } });

      //Y su descripcion
      this.add.text(555, 90 + this.letterSize + index * this.letterSize * 1.8, element.desc,
        { fontSize: this.letterSize * 0.8, color: 'black', wordWrap: { width: 400 } });

    }, this);

    //Añadimos el comando para desactivar el diario 
    this.q = this.input.keyboard.addKey('Q'); 
    this.q.on('down', () => {
      this.scene.stop();
      this.scene.resume(this.currentScene);
    })
  }

  /** Agrega un objeto al array de objetos en el orden que se recogen
  * @param {GameObject} obj Objeto a agregar
  */
  addObject(obj)
  {
    if (obj.sprite !== null)
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
