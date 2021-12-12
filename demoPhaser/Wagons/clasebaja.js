//Js importados
import Player from '../player.js';
import Door from '../Utils/door.js'
import Wagon from './wagon.js';
import Npc from '../NPCs/npc.js';
import GameObject from '../Objects/gameobject.js';
import DialogManager  from '../Test/dialogmanager.js'
/**Escena principal del juego
 * @extends Wagon
 */

//Clase para crear y gestionar un nivel 
export default class ClaseBaja extends Wagon {
  constructor() { 
    
    super('clasebaja', false, 'ventanas', 'ventanas','ventanas', 'clasebaja', 'clasemedia',);
  }

  //Sobreescribimos los métodos que estan en wagon
  spawnNPCs(){
      //añadir un array dnde en id del npc es el indice 
    //this.npc = new Npc (this, 650, 230, 1);
    //this.dmanager= new DialogManager();
    //this.dmanager.Acoplarnpc(this.npc);
   // this.npc = this.dmanager.consultarnpc(0,this); //devuelve el npc que es YAY
   


   this.npc=new Npc(this, 160, 238, 0, this.scene.get('boot').dmanager.npcinfoholder[0].anger, 9, 0);
   this.npc2=new Npc(this, 390, 238, 1, this.scene.get('boot').dmanager.npcinfoholder[7].anger, 22, 7);

   //this.add.Npc(this,200,262,1,this.scene.get('boot').dmanager.npcinfoholder[1].anger)
    //console.log("EJECUTANDO SPAWNPCS");
    //this.scene.add(this.npc);
    

  }

  spawnObjects(){    

    // this.objs = this.scene.get('boot').myObjects;
    // console.log("Objs: ", this.objs.Objetos);

    // this.objects = []; 

    //   let j = 0;

    //   for (let i = 0; i < this.objs.Objetos.length; ++i)
    //   {
    //     if(this.objs.Objetos[i].vagon == this.scene.key)
    //       this.objects[j++] = new GO(this, this.objs.Objetos[i].posX, this.objs.Objetos[i].posY, this.objs.Objetos[i].desc, true, false);
    //   }
  
    //   console.log("Objetos en escena: ", this.objects);

    //this.tetera = new Tetera (this, 60, 200);
    //this.game.npcholder[0].x;
   // this.game.x;
   //console.log(this.scene.get('boot').dmanager.npcinfoholder[1].id); DEVUELEVE LO QEU TOCA YAY
    this.add.sprite(320, 262, 'objects', [2]);
    this.add.sprite(520, 262, 'objects', [2]);
    this.add.sprite(830, 262, 'objects', [2]);

  }
 
}
