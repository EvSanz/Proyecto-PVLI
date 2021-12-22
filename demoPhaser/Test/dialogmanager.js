//Manager de Npcs
export default class DialogManager {

    /** Constructor:
     * Variables:
     * @param {NPC} npc NPC
     * @param {NPC[]} npcholder array de NPCs
     * @param {number} id Identificador
     * Metodos: 
     * @method acoplarNpc Añadimos el personaje al npcholder
     * @method asignarCabreo Establecemos el nuevo valor de irritacion 
     */

    constructor() {

        this.npcholder = [];

        //Establecemos los valores iniciales de los personajes
        this.npcinfoholder = [{
                id: 0,
                dialogo: 1,
                anger: 0
            }, 
            {
                id: 1,
                dialogo: 13,
                anger: 0
            }, 
            {
                id: 2,
                dialogo: 3,
                anger: 0
            }, 
            {
                id: 3,
                dialogo: 22,
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
                dialogo: 20,
                anger: 0
            }, 
            {
                id: 9,
                dialogo: 17,
                anger: 0
            }, 
            {
                id: 10,
                dialogo: 15,
                anger: 0
            },
            {
                id: 11,
                dialogo: 0,
                anger: 0
            }
        ];
    }


    //Metodo para añadir el npc al array
    acoplarNpc(npc) {this.npcholder.push(npc); }


    //Metodo para cambiar el valor de irritacion del
    //array de informacion de los npc
    asignaCabreo(id, cabreo) {this.npcinfoholder[id].anger = cabreo; }
}