export default class Levelpt extends Phaser.Scene {
    /**
     * Constructor de la escena
     */
    constructor() {
      super({ key: 'levelpt' });
    }
    create()
    {
      this.add.sprite(500,200,'fondopt');
     console.log("ESTOY DIBUJANDO LA ESCENA");
    }

}