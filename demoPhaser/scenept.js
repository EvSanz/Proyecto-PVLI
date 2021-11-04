export default class Levelpt extends Phaser.Scene {
    /**
     * Constructor de la escena
     */
    constructor() {
      super({ key: 'levelpt' });
    }
    create()
    {
      this.add.sprite(0,0,'fondopt');
     console.log("ESTOY DIBUJANDO LA ESCENA");
    }

}