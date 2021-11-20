//Clase encargada de gestionar el diario
export default class Diary extends Phaser.Scene {
  constructor() { super({key: 'diary'});

      //Desactivamos los objetos que aparecen en el diario
      this.tetera; 

      this.objectList = [];
  }

  //Cargamos la escena inicial
  init (actualScene) { this.currentScene = actualScene;}

  activacionTetera (teteraActivada) { this.tetera = teteraActivada;}

  create() 
  {
    //Añadimos el sprite del boton del diario
    this.add.sprite(500, 260, 'diary');

    //Por cada elemento del array de objetos se dibuja en el orden que se han obtenido
    this.objectList.forEach(function a(element, index) {

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

    //Añadimos el comando para desactivar el diario 
    this.q = this.input.keyboard.addKey('Q'); 
    this.q.on('down', cierraDiario => {
      this.scene.stop();
      this.scene.resume(this.currentScene);
    })
  }
  
  addObject(obj)
  {
      this.objectList.push(obj);
  }
}
