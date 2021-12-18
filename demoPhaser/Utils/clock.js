 /**Time
  * @param {Time} time Tiempo que queda 
  * @param {Total_Time} Total_Time Tiempo total 
  * @method decreaseTime disminuye el tiempo que queda
  * @method resetTime el tiempo actual vuelve a ser el maximo original
  * @method getTime delvuelve el tiempo que queda
  * @method showTime muestra el tiempo actual en pantalla
  */

 import SelectKillerScene from "../Test/selectkillerscene.js";

 const Total_Time = 12;

 export default class Clock {
     constructor(scene) {
         this.scene = scene;
         this.time = Total_Time;
         this.selectKillerScene = null;   
     }

     create() {}

     //Método para disminuir el tiempo 
     decreaseTime(scenenow) {
         this.scene.scene.get(scenenow).playwhistle();
         this.scenenow = scenenow;
         if (this.time > 0)
             this.time--;
         this.showTime(scenenow);

         if (this.time <= 0) {
             this.scenenow.scene.start('selectscene');
             this.outOfTime();
         }
     }

     //Método para resetear el tiempo
     resetTime() {
         this.time = Total_Time;
     }

     getTime() {
         return this.time;
     }
     
     //Método para mostrar el tiempo en pantalla
     showTime(scenenow) {
         this.scene.scene.get(scenenow).add.sprite(50, 40, 'clockanim', [this.time]);
     }

     outOfTime() {
         this.selectKillerScene = new SelectKillerScene();
         this.scene.scene.start(this.selectKillerScene);
     }
 }