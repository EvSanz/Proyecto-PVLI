//Js importados
import Wagon from './wagon.js';
import Door from '../Utils/door.js';

//Escena de la clase media
export default class ClaseMedia extends Wagon {
  constructor() {
    super('clasemedia', {
      isPointAndClick: false,
      spriteFondo1: 26,
      spriteFondo2: 26,
      spriteFondo3: 26,
      wagonIzq: 'clasebaja',
      wagonDer: 'cafeteria'
    });
  }


  create(playerX) {
    super.create(playerX);

    //Creamos las opciones de texto
    this.labels();

    this.placas = [];
    let i = 0;

    //Creamos las puertas de las habitaciones
    this.door = new Door(this, 120, 222, 'habitacionmorton', 'puertafun');
    this.placaPuerta(this.placas[i++], 120, 222, "Morton");
    this.door2 = new Door(this, 440, 222, 'habitacioncollins', 'puertafun');
    this.placaPuerta(this.placas[i++], 440, 222, "Collins");
    this.door3 = new Door(this, 780, 222, 'habitacionbold', 'puertafun');
    this.placaPuerta(this.placas[i++], 780, 222, "Bold");

    //Creamos el telefono
    this.createPhone();

    //Añadimos los npc
    this.addScenesNpc();
  }

  //Metodo para escribir los textos
  labels() {
    this.label0 = this.scene.scene.add.text(275, 375, " ", {
      wordWrap: {width: 400 }});
    this.label = this.scene.scene.add.text(275, 435, " ", {
      wordWrap: {width: 400 }});
    this.label2 = this.scene.scene.add.text(275, 470, " ", {
      wordWrap: {width: 400 }});
  }


  //Metodo para crear el telefono
  createPhone() {

    //Creamos un sprite interactivo, que llamara a createOptions si hacemos click
    this.phone = this.add.sprite(560, 250, 'objects', [23]).setDepth(1);
    this.phone.setInteractive();
    this.phone.on('pointerdown', () => {
      this.createOptions(); 
    });
  }


  //Metodo para crear opciones de telefono
  createOptions() {

    //Bloqueamos el movimiento del player
    this.player.canMove = false;

    this.label0.text = "Es el teléfono para llamar a la policía. Debes usarlo cuando sepas la identidad del asesino";
    this.label.text = "Llamar a la policía";
    this.label2.text = "Todavía no";

    //Creamos los bloques de interaccion
    this.graphics = new Phaser.GameObjects.Rectangle(this, 510, 425, 510, 50, 0xfffffff, 0xfffffff);
    this.graphics.setInteractive();
    this.graphics2 = new Phaser.GameObjects.Rectangle(this, 510, 470, 510, 50, 0xfffffff, 0xfffffff);
    this.graphics2.setInteractive();

    //Si hacemos click en la primera opcion
    this.graphics.on('pointerdown', () => {

      //Escribimos texto
      this.label.text = "Selecciona al sospechoso";
      this.label2.text = "";

      //Destruimos las cajas de interaccion
      this.graphics.destroy();
      this.graphics2.destroy();

      //Cambiamos de escena
      this.scene.start('selectscene');
    });

    //Si hacemos click en la segunda
    this.graphics2.on('pointerdown', () => {

      //Eliminamos el texto
      this.label0.text = "";
      this.label.text = "";
      this.label2.text = "";

      //Destruimos las cajas de interaccion
      this.graphics.destroy();
      this.graphics2.destroy();
      
      //Desbloqueamos el movimiento del player
      this.player.canMove = true;
    });
  }
}