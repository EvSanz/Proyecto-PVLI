//Js importados
import Boot from './boot.js';
import End from './end.js';
import Level from './Test/scene.js';
import Levelpt from './Test/scenept.js';
import Diary from './Utils/diario.js';
import Wagon from './Wagons/wagon.js';
import ClaseBaja from './Wagons/clasebaja.js';
import ClaseMedia from './Wagons/clasemedia.js';
import Cafeteria from './Wagons/cafeteria.js';
import ClaseAlta from './Wagons/clasealta.js';
import Locomotora from './Wagons/locomotora.js';
import HabitacionMorton from './Wagons/Rooms/habitacionmorton.js'
import HabitacionCollins from './Wagons/Rooms/habitacioncollins.js'
import HabitacionBold from './Wagons/Rooms/habitacionbold.js'
import HabitacionYan from './Wagons/Rooms/habitacionyan.js'
import HabitacionAnthony from './Wagons/Rooms/habitacionanthony.js'
import HabitacionHaines from './Wagons/Rooms/habitacionhaines.js'
//Inicio del juego en Phaser, creando para ello el archivo 
//de configuración del juego y la clase Game, encargada de 
//crear e iniciar el juego 

let config = {
    type: Phaser.AUTO,
    width:  1000,
    height: 500,
    parent:"gameholder",
    scale: {
        //mode: Phaser.Scale.FIT,  
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY },

    pixelArt: true,

    //Establecemos todas las escenas del juego
    scene: [Boot, Level, Levelpt, Wagon, ClaseBaja,ClaseMedia,ClaseAlta,Cafeteria,Locomotora,HabitacionMorton,HabitacionCollins,HabitacionBold,HabitacionYan,HabitacionAnthony,HabitacionHaines, Diary, End],

    //Establecemos las fisicas del juego
    physics: { 
        default: 'arcade', 
        debug: true,
        arcade: { 
            gravity: { y: 400 }, 
            debug: true } 
    },
     
};
new Phaser.Game(config ,'gameholder');

//let npcholder={x=0,y=0}; 
let x=0;