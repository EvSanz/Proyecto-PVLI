import Wagon from './wagon.js';
export default class Cafeteria extends Wagon {
    constructor() { 
      super('cafeteria', false, 'ventanas', 'ventanas', 'ventanas', 'clasemedia', 'clasealta',);
    }
     //Sobreescribimos los métodos que estan en wagon
  spawnNPCs(){
      
    //this.npc = new Npc (this, 650, 230, 1);
    //this.dmanager= new DialogManager();
    //this.dmanager.Acoplarnpc(this.npc);
    this.npc = this.dmanager.consultarnpc(0); //devuelve el npc que es YAY
    // this.scene.add(this.npc);

  }

  spawnObjects(){    
    this.add.sprite(180, 262, 'objects', [3]);
    this.add.sprite(320, 262, 'objects', [2]);
    this.add.sprite(520, 262, 'objects', [2]);
    this.add.sprite(690, 262, 'objects', [3]);
    this.add.sprite(830, 262, 'objects', [2]);
    
  }
}