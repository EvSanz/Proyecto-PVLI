//Js importados
import Boot from './boot.js';
import Menu from './Menus/mainmenu.js';
import Settings from './Menus/settingsmenu.js';
import Credits from './Menus/credits.js';
import End from './end.js';
import Diary from './Utils/diario.js';
//import Wagon from './Wagons/wagon.js';
import ClaseBaja from './Wagons/clasebaja.js';
import ClaseMedia from './Wagons/clasemedia.js';
import Cafeteria from './Wagons/cafeteria.js';
import ClaseAlta from './Wagons/clasealta.js';
import Locomotora from './Wagons/locomotora.js';
//import GameObject from './Objects/gameobject.js'
import HabitacionMorton from './Wagons/Rooms/habitacionmorton.js'
import HabitacionCollins from './Wagons/Rooms/habitacioncollins.js'
import HabitacionBold from './Wagons/Rooms/habitacionbold.js'
import HabitacionYan from './Wagons/Rooms/habitacionyan.js'
import HabitacionAnthony from './Wagons/Rooms/habitacionanthony.js'
import HabitacionHaines from './Wagons/Rooms/habitacionhaines.js'
import SelectScene from './End/selectscene.js'
import GoodEnd from './End/goodend.js'
import BadEnd from './End/badend.js'

let config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 512,
    parent: "gameholder",
    scale: {
        //mode: Phaser.Scale.FIT,  
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
    },

    pixelArt: true,

    //Establecemos todas las escenas del juego
    scene: [Boot, Menu, Settings, Credits,
        ClaseBaja, ClaseMedia, ClaseAlta, Cafeteria, Locomotora,
        HabitacionMorton, HabitacionCollins, HabitacionBold, HabitacionYan,
        HabitacionAnthony, HabitacionHaines,
        SelectScene, GoodEnd, BadEnd, Diary, End
    ],

    //Establecemos las fisicas del juego
    physics: {
        default: 'arcade',
        debug: false,
        arcade: {
            gravity: {
                y: 400
            },
            debug: false
        }
    },
};



new Phaser.Game(config, 'gameholder');