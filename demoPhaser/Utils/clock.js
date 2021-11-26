 /**Time
  * @param {Time} time Tiempo que queda 
  * @param {Total_Time} Total_Time Tiempo total 
  */

  const Total_Time = 12;

export default class Clock 
{
    constructor(scene) {
        this.scene = scene;
        this.time = Total_Time;
        this.label = this.scene.add.text(10, 2, "", 
        { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });

        //Commented until sprite is added
        // super(scene,x,y, 'clock',true,true)
        // this.scene.add.existing(this);    
    }

    create() { }

    //Método para disminuir el tiempo 
    decreaseTime() 
    {
        this.time--;
        console.log("TIME: ", this.time);
        this.showTime();
    }

    //Método para resetear el tiempo
    resetTime() { this.time = Total_Time;}

    getTime() { return this.time;}

    //Método para mostrar el tiempo en pantalla
    showTime() { this.label.text = "Time: " + this.time;}

    outOfTime(){}
}