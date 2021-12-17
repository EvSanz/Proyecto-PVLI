import Wagon from "../Wagons/wagon.js";
import Sus from "./sus.js";
export default class SelectScene extends Wagon {
  constructor() {
    super('selectscene', {
      isPointAndClick: true,
      spriteFondo1: 38,
      spriteFondo2: 39,
      spriteFondo3: 40,
      wagonIzq: 'clasealta'
    });
  }
  spawnObjects() {

    this.norma = new Sus(this, 200, 220, 'goodend', [19]);
    this.add.existing(this.norma);
    this.larry = new Sus(this, 290, 220, 'badend', [9]);
    this.add.existing(this.larry);
  }

}