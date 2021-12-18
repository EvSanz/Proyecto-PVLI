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
    constructor() {

        this.npcholder = [];
        this.npcinfoholder = [{
                id: 0,
                dialogo: 1,
                anger: 0
            }, 
            {
                id: 1,
                dialogo: 3,
                anger: 0
            }, 
            {
                id: 2,
                dialogo: 22,
                anger: 0
            }, 
            {
                id: 3,
                dialogo: 0,
                anger: 0
            },
            {
                id: 4,
                dialogo: 5,
                anger: 0
            }, 
            {
                id: 5,
                dialogo: 8,
                anger: 0
            }, 
            {
                id: 6,
                dialogo: 10,
                anger: 0
            }, 
            {
                id: 7,
                dialogo: 19,
                anger: 0
            }, 
            {
                id: 8,
                dialogo: 17,
                anger: 0
            }, 
            {
                id: 9,
                dialogo: 13,
                anger: 0
            }, 
            {
                id: 10,
                dialogo: 20,
                anger: 0
            }, 
            {
                id: 11,
                dialogo: 15,
                anger: 0
            }
        ];
    }

    acoplarnpc(npc) {
        this.npcholder.push(npc);
    }

    asignacabreo(id, cabreo) {
        this.npcinfoholder[id].anger = cabreo;
    }
}