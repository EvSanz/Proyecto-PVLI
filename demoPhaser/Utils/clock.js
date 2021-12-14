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

export default class Clock 
{
    constructor(scene) {
        this.scene = scene;
        this.time = Total_Time;
        this.selectKillerScene = null;
      
        

        //Commented until sprite is added
        // super(scene,x,y, 'clock',true,true)
        // this.scene.add.existing(this);    
    }

    create() { }

    //Método para disminuir el tiempo 
    decreaseTime(scenenow) 
    {
        this.scenenow=scenenow;
        if (this.time > 0)
            this.time--;
        console.log("TIME: ", this.time);
        this.showTime(scenenow);

        if (this.time <= 0)
        {
            console.log("out of time");
           this.scenenow.scene.start('selectscene');
            this.outOfTime();
        }
            
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

        this.scene.scene.get(scenenow).add.sprite(45,35,'clockanim',[this.time]);
       /* this.label = null;
        this.label = this.scene.scene.get(scenenow).add.text(10, 2, "",
        { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' }).setDepth(1); 
        this.label.text = "        "; //Borra el tiempo anterior
        this.label = this.scene.scene.get(scenenow).add.text(10, 2, "",
    { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' }).setDepth(1); 
        this.label.text = "Time: " + this.time;*/
    }

    outOfTime()
    {
        console.log("select killer");
        this.selectKillerScene = new SelectKillerScene();
        this.scene.scene.start(this.selectKillerScene);
    }
}