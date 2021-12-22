

/** Constructor:
* Variables:
* @param {Time} time Tiempo  
* @param {Total_Time} Total_Time Tiempo máximo 
* Metodos:
* @method decreaseTime disminuye el tiempo que queda
* @method resetTime el tiempo actual vuelve a ser el maximo original
* @method getTime delvuelve el tiempo que queda
* @method showTime muestra el tiempo actual en pantalla
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