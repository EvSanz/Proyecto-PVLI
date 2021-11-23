//Clase para crear las escenas de point and click
export default class SelectKillerScene extends Phaser.Scene {

    constructor() { super({ key: 'selectKillerScene' });}

    //Creamos los elementos de la escena
    create()
    {
      //this.add.sprite (500, 200, 'fondopt');

      let uisuelo; 
      uisuelo = this.add.sprite(500, 450, 'ui');
      this.add.sprite(170, 174, 'background', [28]);
      this.add.sprite(480, 174, 'background', [29]);
      this.add.sprite(830, 174, 'background', [27]);
    //   let goback
      //goback=this.add.sprite(30, 30, 'objects',[4]).setInteractive();
     
    //   goback.on('pointerdown',()=>
    //   {
    //      this.scene.start('level');



    //   });
      //Creamos la puerta
     // this.door = new Door(this, 140, 225, 'level');

      //Creacion del jugador
     // this.player = new Player(this, 300, 240, false);

      //Añadimos la fisicas y los colliders al suelo
    //   this.physics.add.existing(uisuelo, true);
      //this.physics.add.collider(this.player, uisuelo);
    }

}