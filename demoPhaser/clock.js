 /**Time
  * @param {Time} time Tiempo que queda del reloj en esta ronda
  * @param {Total_Time} Total_Time Tiempo del reloj completo
  */

  const Total_Time = 12;
  let time = 12;

  export default class Clock
  {
    constructor(scene, x, y) 
    {
        //Commented until sprite is added
        // super(scene,x,y, 'clock',true,true)
        // this.scene.add.existing(this);    
    }
}

function decreaseTime()
{
    time--;
    showTime();
}

function resetTime()
{
    time = Total_Time;
}

function getTime()
{
    return time;
}

function showTime()
{
    //uses clockX.jpg, X being time, to change the image shown. 
    //Unsure how to change the sprite of an object
    //Graphics still not-added
}