import Npc from '../NPCs/npc'
import Dialog from '../Utils/dialog';



export default class DialogManager extends Phaser.GameObjects.Sprite {

    /**Gestioamos todos los dialogos del juego desde aqui
    * @param {NPC} npc aqui se crean los npcs y se les asignan sus respectivos dialogos
    * @param {Dialog}} dialog dialogo que se asignará a cada npc
    * @param {NPC[]} npcholder aqui se almacenan todos los npcs del juego con su dialogo asociado;
    */
constructor(npc,dialog)
 {
     let npcholder=[];
     for( i=0;i<12;i++)
     {
    //leeremos los datos del np del json de personajes
    let x=0;
    let y=0;
    let scene= 'level';
     
      let dialog= new Dialog(scene,i);
      let npc=new Npc(secene,x,y,i,dialog);
      npcholder.push(npc);
     } 



 }

}
    