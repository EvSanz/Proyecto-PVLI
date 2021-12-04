//Js importados
import GO from './GameObject.js';

//Clase para crear y gestionar la tetera
export default class Tetera extends GO {
  
  /**Constructor de la tetera
   * @param {Scene} scene Escena
   * @param {Base} base Objeto 
   * @param {number} x Coordenada X
   * @param {number} y Coordenada 
   */

  constructor(scene, x, y ) {
    super(scene, x, y, 'tetera', true, true)

    this.scene.add.existing(this);
  }
}
