//import Npc from '../NPCs/npc.js'
import Dialog from '../Utils/dialog.js';
import GO from './GameObject.js';



export default class ObjectManager {

    /**Gestioamos todos los dialogos del juego desde aqui
    * @param {GO} go aqui se crean los objetos y se les asignan sus respectivos dialogos
    * @param {Dialog}dialog cada objeto creara su dialogo en la clase npc pero los gestionaremos todos desde aqui
    * @param {GO[]} goholder aqui se almacenan todos los npcs del juego con su dialogo asociado;
    * @method acoplarobj mete el objeto que se le pasa como parametro en el goholder
    * @method consultarobj dado el identificador de un objeto , devuelve ese objeto
    */
constructor()
 { 
     
      this.goholder=[];
     /*for( let i=0;i<12;i++)
     {
    //leeremos los datos del np del json de personajes
    let x=0;
    let y=i;
    let scene='clasebaja';
     
      //let dialog= new Dialog('clasebaja',1);
     
       npcholder.push(npc);
     } */
     //let npc=new Npc('clasebaja',100,100,1);

     //npcholder.push(npc);
 }
acoplarobj(go)
{
    this.goholder.push(go);

}
consultarobj(id)
{

    return this.goholder[id];
}
}

    