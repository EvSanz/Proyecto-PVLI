import Wagon from "../Wagons/wagon.js";
import Sus from "./sus.js";
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

    this.pj = this.scene.get('boot').myCharacters;

    this.characters = [];
    this.frames = [];
    this.labels = [];

    for (let j = 0; j < this.pj.Personajes.length; ++j) {
      this.labels[j] = this.scene.scene.add.text(10 + 90 * j, 350, " ", {
        wordWrap: {
          width: 50
        }
      });
      this.labels[j].setDepth(1);
    }

    let posX = 50;

    for (let i = 0; i < this.pj.Personajes.length; ++i) {
      if (this.pj.Personajes[i].culpable) {
        this.characters[i] = new Sus(this, 40 + 90 * i, this.pj.Personajes[i].posY, 'goodend', this.pj.Personajes[i].name, this.pj.Personajes[i].frame);
      } else {
        this.characters[i] = new Sus(this, 40 + 90 * i, this.pj.Personajes[i].posY, 'badend', this.pj.Personajes[i].name, this.pj.Personajes[i].frame);
      }
      this.frames[i] = this.add.sprite(50 + 90 * i, 365, 'infopanel');
      this.frames[i].displayWidth = 90;
      this.frames[i].displayHeight = 40;
      this.labels[i].text = this.characters[i].name;
      this.add.existing(this.characters[i]);
    }
  }

}