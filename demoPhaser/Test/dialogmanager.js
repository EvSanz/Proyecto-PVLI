import Npc from '../NPCs/npc.js'
import Dialog from '../Utils/dialog.js';



export default class DialogManager {

    /**Gestioamos todos los dialogos del juego desde aqui
    * @param {NPC} npc aqui se crean los npcs y se les asignan sus respectivos dialogos
    * @param {Dialog}dialog cada npc creara su dialogo en la clase npc pero los gestionaremos todos desde aqui
    * @param {NPC[]} npcholder aqui se almacenan todos los npcs del juego con su dialogo asociado;
    * @method acoplarnpc mete en npc que se le pasa como parametro en el npc holder
    * @method consultarnpc dado el identificador de un npc , devuelve ese npc 
    */
    constructor()
    { 
        
        this.npcholder=[];
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
        this.npcinfoholder = [
            {id:0, dialogo:1, anger:0}, //0
            {id:1, dialogo:3, anger:0}, //1
            {id:2, dialogo:22, anger:0}, //2
            {id:3, dialogo:5, anger:0}, //3
            {id:4, dialogo:8, anger:0}, //4
            {id:5, dialogo:10, anger:0}, //5
            {id:6, dialogo:19, anger:0}, //6
            {id:7, dialogo:17, anger:0}, //7
            {id:8, dialogo:13, anger:0}, //8
            {id:9, dialogo:20, anger:0}, //9
            {id:10, dialogo:15, anger:0}, //10
        ];
    }

    acoplarnpc(npc)
    {
        this.npcholder.push(npc);

    }
    
    consultarnpc(id,scena)
    {

       // this.escena = this.npcholder[id].getscene();
       //scene.add.existing(this.npcholder[id]);
       // return this.npcholder[id];
     //  scena.scene.add.exsting(new Npc(scena.scene.get('clasebaja'),650, 230, 1))
       
    }

    asignacabreo(id, cabreo) {this.npcinfoholder[id].anger = cabreo;}
}

    