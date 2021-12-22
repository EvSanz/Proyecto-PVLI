//Clase encargada de gestionar el diario
export default class Diary extends Phaser.Scene {
  constructor() {
    super({
      key: 'diary'
    });

    //Creamos un array de objetos y otro de personajes
    this.objectList = [];
    this.characterList = [];

    this.letterSize = 20;
    this.itemboxSize = 80;
  }


  /** 
  * Variables: 
  * @param {bool} active ¿Mostramos el cuadro de texto?
  * @param {string} text Texto que mostramos
  * @param {GameObject} obj Objeto que agregamos
  * @param {Struct} char Nombre e informacion del npc que agregamos
  * Metodos
  * @method showInfoPanel Mostrar descripcion en pantalla
  * @method addObject Añadir obj al array 
  * @method addCharacter Añadir char al array
  */


  //Cargamos la escena
  init(actualScene) {this.currentScene = actualScene; }

  create() {

    //Añadimos el sprite del diario
    this.add.sprite(500, 260, 'diary');

    //Dibujamos cada elemento del array en el orden que los desbloqueamos
    this.objectList.forEach(function showObjects(element, index) {

      let yPos;

      //Cambiamos la posicion Y del objeto dependiendo de su
      //su posicion en el array
      if (index < 4) {yPos = 135; } 
      else if (index < 8) {yPos = 240; } 
      else {yPos = 345; }

      //Añadimos el sprite del objeto en la posicion Y escogida, lo
      //hacemos interactuable y ajustamos su tamaño
      this.item = this.add.sprite(105 + ((index % 4) * 105), yPos, 
      'objects', [element.sprite]).setInteractive();
      this.item.displayWidth = this.itemboxSize;
      this.item.displayHeight = this.itemboxSize;

      //Si pasamos el cursor por encima, nos muestra su informacion...
      this.item.on('pointerover', () => {this.showInfoPanel(true, element.desc); })
      //Que desaparecera cuando el cursor no este encima
      this.item.on('pointerout', () => {this.showInfoPanel(false); })
    
    }, this);


    //Escribimos informacion de cada personaje del array en el orden que lo desbloqueamos
    this.characterList.forEach(function showSuspects(element, index) {

      let xPos;

      //Cambiamos la posicion X del texto dependiendo de su posicion en el array  
      if (index < 6) {xPos = 540; }
      else {xPos = 740; }
        
      //Escribimos de forma interactuable el nombre del personaje
      this.name = this.add.text(xPos, 100 + (index % 6) * (this.letterSize * 2.5), 
        element.name, {fontSize: this.letterSize, color: 'black', fontStyle: 'bold', 
        wordWrap: {width: 400 }}).setInteractive();

      //Mostramos la informacion del npc al pasar el puntero por encima..
      this.name.on('pointerover', () => {this.showInfoPanel(true, element.desc); })
      //Y la eliminamos cuando el puntero ya no está encima
      this.name.on('pointerout', () => {this.showInfoPanel(false); })

    }, this);

    //Añadimos los comandos para desactivar el diario 
    this.q = this.input.keyboard.addKey('Q');
    this.esca = this.input.keyboard.addKey('Esc');

    //Si pulsamos cualquiera de los comandos, volvemos a la pantalla d ejuego
    this.q.on('down', () => {
      this.scene.stop();
      this.scene.resume(this.currentScene);
    })
    this.esca.on('down', () => {
      this.scene.stop();
      this.scene.resume(this.currentScene);
    })
  }


  //Muestra el panel de descripcion 
  showInfoPanel(active, text = ' ') {

    //Si el panel esta activado
    if (active) {

      //Añadimos el sprite y el texto en la parte inferior de la pantalla
      this.panel = this.add.sprite(500, 475, 'infopanel');
      this.description = this.add.text(200, 410, text, {fontSize: this.letterSize * 0.8, 
        color: 'white', wordWrap: {width: 600 }}); 
    } 
    
    //Si el panel esta desativado
    else {

      //Destruimos el sprite y la descripcion 
      this.panel.destroy();
      this.description.destroy();
    }
  }


  //Metodo para añadir objetos al array
  addObject(obj) {
    let valido = true;

    //Si existe un sprite y una descripcion del objeto
    if (obj.sprite != null && obj.desc != null) {

      //Comprobamos que el nombre del objeto no coincide
      //con alguno de los que han sido almacenados en el array
      this.objectList.forEach(element => {
        if (valido && element.name === obj.name) {valido = false; }}); 
    }

    //Si no esta en el array, lo introducimos
    if (valido) {this.objectList.push(obj); }      
  }


  //Metodo para añadir informacion de los personajes al array
  addCharacter(char) {
    let valido = true;

    //Si existe un nombre y una descripcion del objeto
    if (char.name != null && char.desc != null) {

      //Comprobamos que el nombre del personaje no coincide
      //con alguno de los que han sido almacenados en el array
      this.characterList.forEach(element => {
        if (valido && element.name === char.name) {valido = false; }});
    }

    //Si no esta en el array, lo introducimos
    if (valido) {this.characterList.push(char); }   
  }
}