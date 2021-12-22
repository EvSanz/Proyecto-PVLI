
/**
 * @class Clock
 * @classdesc Se encarga de contar 12 acciones determinadas, dar información sobre las acciones restantes y saltar a la escena de selección de asesino cuando llegan a 0
 * @param {Phaser.Scene} scene La escena en la que se crea el reloj (Hará falta un referencia constante)
 */

  /**
   * @public
   * @method decreaseTime
   * @description Decrementa el número de acciones restantes y llama a la escena de selección de asesino cuando no quedan
   * @param {Wagon} scenenow Vagón desde la que se llama a éste método
   * @memberof Clock
   */
  
  /**
   * @public
   * @method resetTime
   * @description Reinicia el número de acciones a su valor inicial
   * @memberof Clock
   */
  
  /**
   * @public
   * @method getTime
   * @description Devuelve el número de acciones restantes
   * @returns {number} El número de acciones restantes
   * @memberof Clock
   */
  
  /**
   * @public
   * @method showTime
   * @description Muestra el sprite del reloj correspondiente al número de acciones restantes
   * @param {Phaser.Scene} scenenow Escena en la que mostrar el reloj
   * @memberof Clock
   */


//Asignamos el valor maximo de reloj
 const Total_Time = 12;

 export default class Clock {

    constructor(scene) {
         this.scene = scene;
         this.time = Total_Time;
         this.selectKillerScene = null;
     }

    create() {}


    //Método para disminuir el valor de tiempo 
    decreaseTime(scenenow) {

        //Llamamos al metodo playwhistle de la escena
        this.scene.scene.get(scenenow).playwhistle()
        this.scenenow = scenenow;

        //Si queda tiempo, lo disminuimos
        if (this.time > 0) { this.time--;}
             
        this.showTime(scenenow);

        //Si no queda tiempo...
        if (this.time <= 0) {

            //Cambiamos a la escena de seleccion de asesino 
            this.scenenow.scene.start('selectscene');
           
        }
    }


    //Método para resetear el valor de tiempo
    resetTime() {this.time = Total_Time; }


    //Metodo para devolver el valor del tiempo
    getTime() {return this.time; }
     

    //Método para mostrar el tiempo en pantalla
    showTime(scenenow) {

        //Añadimos el sprite de reloj, asegurandonos que no 
        //supera el valor maximo
        if (this.time < 12) {
            this.scene.scene.get(scenenow).add.sprite(50, 40, 'clockanim', [this.time]); }
        else {
            this.scene.scene.get(scenenow).add.sprite(50, 40, 'clockanim', [11]).alpha = 0.5; }
    }
 }