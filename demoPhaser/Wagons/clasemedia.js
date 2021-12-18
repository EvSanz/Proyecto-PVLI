import Wagon from './wagon.js';
import Door from '../Utils/door.js';
import Npc from '../NPCs/npc.js';
import GameObject from '../Objects/gameobject.js';
import Dialog from '../Utils/dialog.js';

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

  labels()
  {
        //Textos
        this.label0 = this.scene.scene.add.text(275, 375, " ", {
          wordWrap: {
            width: 400
          }
        });
        this.label = this.scene.scene.add.text(275, 435, " ", {
          wordWrap: {
            width: 400
          }
        });
        this.label2 = this.scene.scene.add.text(275, 470, " ", {
          wordWrap: {
            width: 400
          }
        });
  }

  spawnNPCs() {
    this.addScenesNpc();
  }

  spawnObjects() {

    this.labels();

    let mortondoor;
    this.mortondoor = new Door(this, 120, 222, 'habitacionmorton', 'puertafun');
    this.mortondoor2 = new Door(this, 440, 222, 'habitacioncollins', 'puertafun');
    this.mortondoor3 = new Door(this, 780, 222, 'habitacionbold', 'puertafun');

    this.createPhone();
  }

  createPhone()
  {
    this.phone = this.add.sprite(560, 250, 'objects', [23]).setDepth(1);
    this.phone.setInteractive();
    this.phone.on('pointerdown', () => {

      this.createOptions()
    });
  }

  createOptions() {
    this.label0.text = "Es el teléfono para llamar a la policía. Debes usarlo cuando sepas la identidad del asesino";
    this.label.text = "Llamar a la policía";
    this.label2.text = "Todavía no";

    //Primer bloque
    this.graphics = new Phaser.GameObjects.Rectangle(this, 200, 425, 1600, 50, 0xfffffff, 0xfffffff);
    this.graphics.setInteractive();

    //Segundo bloque
    this.graphics2 = new Phaser.GameObjects.Rectangle(this, 200, 470, 1600, 50, 0xfffffff, 0xfffffff);
    this.graphics2.setInteractive();

    //Primer bloque
    this.graphics.on('pointerdown', () => {
      this.label.text = "Selecciona al sospechoso";
      this.label2.text = "";
      //escena sospechosos
      this.scene.start('selectscene');
    });

    //Segundo bloque
    this.graphics2.on('pointerdown', () => {
      //Borrar las opciones
      this.label.text = "";
      this.label2.text = "";
    });
  }
}