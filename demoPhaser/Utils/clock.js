 /**Time
  * @param {Time} time Tiempo que queda 
  * @param {Total_Time} Total_Time Tiempo total 
  * @method decreaseTime disminuye el tiempo que queda
  * @method resetTime el tiempo actual vuelve a ser el maximo original
  * @method getTime delvuelve el tiempo que queda
  * @method showTime muestra el tiempo actual en pantalla
  */

  const Total_Time = 12;

export default class Clock 
{
    constructor(scene) {
        this.scene = scene;
        this.time = Total_Time;
      
        

        //Commented until sprite is added
        // super(scene,x,y, 'clock',true,true)
        // this.scene.add.existing(this);    
    }

    create() { }

    //Método para disminuir el tiempo 
    decreaseTime(scenenow) 
    {
        this.time--;
        console.log("TIME: ", this.time);
        this.showTime(scenenow);
    }

    //Método para resetear el tiempo
    resetTime() 
    { 
        this.time = Total_Time;
    }

    getTime() 
    { 
        return this.time;
    }
q
    //Método para mostrar el tiempo en pantalla
    showTime(scenenow) 
    {   
       
        this.label = this.scene.scene.get(scenenow).add.text(10, 2, "",
    { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' }).setDepth(1); 
        this.label.text = "Time: " + this.time;
    }

    outOfTime(){}
}