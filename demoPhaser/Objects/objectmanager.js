
/**
 * @class ObjectManager
 * @classdesc Guarda todos los objetos del juego a través de las escenas
 */

  /**
   * @public
   * @method acoplarObj
   * @description Añade un objeto al array
   * @memberof ObjectManager
   * @param {Phaser.GameObject} go Objeto a añadir
   */
  
  /**
   * @public
   * @method consultarObj
   * @description Devuelve el objeto que está en la posición indicada
   * @memberof ObjectManager
   * @param {number} id Posición del objeto deseado en el array
   * @returns {Phaser.GameObject} El objeto en la posición
   */

//Manager de los objetos
export default class ObjectManager {
   
    constructor()
    { 
        this.goholder=[];
    }


    //Metodo para añadir un objeto al array
    acoplarObj(go) {this.goholder.push(go); }

    
    //Método para obtener el objeto según su identificador
    consultarObj(id) {return this.goholder[id]; }
}

    