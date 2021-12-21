//Js importados 
import Wagon from "../Wagons/wagon.js";
import Sus from "./sus.js";

//Escena de seleccion del asesino 
export default class SelectScene extends Wagon {
  constructor() {
    super('selectscene', {
      isPointAndClick: true,
      spriteFondo1: 38,
      spriteFondo2: 39,
      spriteFondo3: 40,
      wagonIzq: 'goodend'
    });
  }

  create() {
    super.create();

    //Accedemos a los personajes previamente cargados en el boot
    this.pj = this.scene.get('boot').myCharacters;

    this.characters = [];
    this.frames = [];
    this.labels = [];

    //Realizamos un recorrido para cargar los personajes
    for (let i = 0; i < this.pj.Personajes.length; ++i) {
      
      //Si es el culpable, cargamos en su constructor la escena 
      //de good ending
      if (this.pj.Personajes[i].culpable) {
        this.characters[i] = new Sus(this, 40 + 90 * i, 
          this.pj.Personajes[i].posY, 'goodend', 
          this.pj.Personajes[i].name, this.pj.Personajes[i].frame);
      } 
      
      //Si no es el culpable, cargamos en su constructor la escena 
      //de bad ending
      else {
        this.characters[i] = new Sus(this, 40 + 90 * i, 
          this.pj.Personajes[i].posY, 'badend', 
          this.pj.Personajes[i].name, this.pj.Personajes[i].frame);
      }

      //Añadimos los sprites de los personajes
      this.frames[i] = this.add.sprite(50 + 90 * i, 365, 'infopanel');
      this.frames[i].displayWidth = 90;
      this.frames[i].displayHeight = 40;

      //Añadimos los nombres de los personajes debajo suya
      this.labels[i] = this.scene.scene.add.text(10 + 90 * i, 350, 
        this.characters[i].name, {wordWrap: {width: 50 }});
      this.labels[i].setDepth(1);

      //Terminamos de añadir al personaje, completo
      this.add.existing(this.characters[i]);
    }
  }
}