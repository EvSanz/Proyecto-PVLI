//Js importados
import Dialog from './dialog.js';
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

    //Creamos el dialogo
    this.dialog = new Dialog(this.scene);
  }

  create() {}

  /**
   * @override
   */

  preUpdate() 
  {
    super.preUpdate();
    
    //Si el jugador esta en el rango del objeto...
    if (this.scene.physics.overlap(this.scene.player, this)) {
      this.on('pointerdown', ()=>
    {
        this.tetera = true; 
        this.dialog.talk();
        this.destroy();
    });
  }

  else
    { this.on('pointerdown', ()=> { this.setTint(0x00ff00);});}
  }
}
