import Wagon from './wagon.js';
import Npc from '../NPCs/npc.js';
import GameObject from '../Objects/gameobject.js';

export default class Cafeteria extends Wagon {
  constructor() {
    super('cafeteria', {
      isPointAndClick: false,
      spriteFondo1: 'ventanas',
      spriteFondo2: 'ventanas',
      spriteFondo3: 'ventanas',
      wagonIzq: 'clasemedia',
      wagonDer: 'clasealta'
    });
  }
  //Sobreescribimos los métodos que estan en wagon
  spawnNPCs() {

    //this.npc = new Npc (this, 650, 230, 1);
    //this.dmanager= new DialogManager();
    //this.dmanager.Acoplarnpc(this.npc);

    this.npc = new Npc(this, 160, 238, 6, this.scene.get('boot').dmanager.npcinfoholder[5].anger,
      27, this.scene.get('boot').dmanager.npcinfoholder[5].dialogo);

    this.npc2 = new Npc(this, 360, 238, 7, this.scene.get('boot').dmanager.npcinfoholder[6].anger,
      31, this.scene.get('boot').dmanager.npcinfoholder[6].dialogo);

    //this.addScenesNpc();
    // this.scene.add(this.npc);

  }

  spawnObjects() {

    this.add.sprite(180, 262, 'objects', [3]);
    this.add.sprite(320, 262, 'objects', [2]);
    this.add.sprite(520, 262, 'objects', [2]);
    this.add.sprite(690, 262, 'objects', [3]);
    this.add.sprite(830, 262, 'objects', [2]);
  }
}