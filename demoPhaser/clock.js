 /**Time
  * @param {Time} time Tiempo que queda 
  * @param {Total_Time} Total_Time Tiempo total 
  */

  const Total_Time = 12;
  let time = 12;

export default class Clock 
{
    constructor(scene) {
        this.scene = scene;
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
        time--;
        this.showTime();
    }

    //Método para resetear el tiempo
    resetTime() { time = Total_Time;}

    getTime() { return time;}

    //Método para mostrar el tiempo en pantalla
    showTime() { this.label.text = "Time: " + time;}
}