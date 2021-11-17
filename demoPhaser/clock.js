 /**Time
  * @param {Time} time Tiempo que queda del reloj en esta ronda
  * @param {Total_Time} Total_Time Tiempo del reloj completo
  */

  const Total_Time = 12;
  let time = 12;

export default class Clock 
{
    constructor(scene) {
        this.scene = scene;
        //clock.js:14 Uncaught TypeError: Cannot read properties of undefined (reading 'text')
        //this.label = this.scene.add.text(50, 50, "", { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });

        //Commented until sprite is added
        // super(scene,x,y, 'clock',true,true)
        // this.scene.add.existing(this);    
    }

    create() { }


    decreaseTime() 
    {
        time--;
        showTime();
    }

    resetTime() 
    {
        time = Total_Time;
    }

    getTime() 
    {
        return time;
    }

    showTime() 
    {
        //this.label.text = "Time: " + time;
        
        //uses clockX.jpg, X being time, to change the image shown. 
        //Unsure how to change the sprite of an object
        //Graphics still not-added
    }

}