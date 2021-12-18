//Clase para crear las escenas de point and click
export default class SelectKillerScene extends Phaser.Scene {

  constructor() {
    super({
      key: 'selectKillerScene'
    });
  }

  //Creamos los elementos de la escena
  create() {
    this.add.sprite(500, 200, 'fondopt');
    
    let uisuelo = this.add.sprite(500, 450, 'ui');
  }

}