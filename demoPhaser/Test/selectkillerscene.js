//Clase para crear las escenas de point and click
export default class SelectKillerScene extends Phaser.Scene {

    constructor() { super({ key: 'selectKillerScene' });
  console.log("creating killer scene")}

    //Creamos los elementos de la escena
    create()
    {
      this.add.sprite (500, 200, 'fondopt');

      let uisuelo; 
      uisuelo = this.add.sprite(500, 450, 'ui');
      // this.add.sprite(170, 174, 'background', [28]);
      // this.add.sprite(480, 174, 'background', [29]);
      // this.add.sprite(830, 174, 'background', [27]);
    }

}