import Npc from '../NPCs/npc.js'
import Dialog from '../Utils/dialog.js';



export default class DialogManager {

    /**Gestioamos todos los dialogos del juego desde aqui
    * @param {NPC} npc aqui se crean los npcs y se les asignan sus respectivos dialogos
    * @param {Dialog}dialog cada npc creara su dialogo en la clase npc pero los gestionaremos todos desde aqui
    * @param {NPC[]} npcholder aqui se almacenan todos los npcs del juego con su dialogo asociado;
    */
constructor()
 { 
     
     let npcholder=[];
     /*for( let i=0;i<12;i++)
     {
    //leeremos los datos del np del json de personajes
    let x=0;
    let y=i;
    let scene='clasebaja';
     
      //let dialog= new Dialog('clasebaja',1);
     
       npcholder.push(npc);
     } */
     let npc=new Npc('clasebaja',100,100,1);

     npcholder.push(npc);
 }

}
    