//Js importados
import Dialog from '../Utils/dialog.js';
import GameObject from './gameobject.js';

//Manager de los objetos
export default class ObjectManager {

    /** Constructor: 
    * Variables:
    * @param {GameObject} go Objeto
    * @param {number} id Identificador
    * @param {GameObject[]} goholder Array de objetos
    * Metodos:
    * @method acoplarObj Añadimos el objeto a goholder
    * @method consultarObj Devolvemos un objeto del goholder 
    */
   
    constructor()
    { 
        this.goholder=[];
    }


    //Metodo para añadir un objeto al array
    acoplarObj(go) {this.goholder.push(go); }

    
    //Método para obtener el objeto según su identificador
    consultarObj(id) {return this.goholder[id]; }
}

    