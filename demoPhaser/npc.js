
export default class Npc extends Phaser.GameObjects.Sprite 
{
        /** Constructor de Npc
     * @param {Sceme} scene Escena en la que aparece el npc
     *@param {string} sprite Sprite del objecto
     * @param {number} x Coordenada x
     * @param {number} y Coordenada y
     * @param {number} id Identificador del personaje
     * @param {number} irritacion Nivel de irritacion del npc
     */

    constructor(scene, x, y, irritacion) { 
        super(scene, x, y, irritacion, 'guille').setInteractive(); 

        //Se añade el personaje a la escena y se añaden fisicas
        this.scene.add.existing(this); 
        this.scene.physics.add.existing(this, true);

        //this.readTextFile("Jsons/personajes.json", this.onJsonRead, this);
    }

    //Metodo para crear el personaje
    /*createNPC(id, sprite) {
        //this.onJsonRead(id);

        //x = this.myData.Personajes[id].posX;
        //y = this.myData.Personajes[id].posY;
        //irritacion = this.myData.Personajes[id].tirria;

        let npc = new Npc(this, id, x, y, irritacion, sprite);
        return npc;
    }*/

    preUpdate()
    {
        super.preUpdate();

        if (this.scene.physics.overlap(this.scene.player, this)) {
            this.scene.starPickt(this.base);
            //this.destroy();
        }
    }

    //Metodos para leer el json
    /*readTextFile(file, callback) {
        let rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function() {
           if (rawFile.readyState === 4 && rawFile.status == "200") 
           {
               callback(rawFile.responseText);
           }
        }
        rawFile.send(null);
    }

    onJsonRead(id){
       myData = JSON.parse(id);
    }*/


}