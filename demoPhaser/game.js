//Js importados
import Boot from './boot.js';
import Menu from './Menus/mainmenu.js';
import Settings from './Menus/settingsmenu.js';
import Credits from './Menus/credits.js';
import End from './end.js';
//import Level from './Test/scene.js';
//import Levelpt from './Test/scenept.js';
import Diary from './Utils/diario.js';
import Wagon from './Wagons/wagon.js';
import ClaseBaja from './Wagons/clasebaja.js';
import ClaseMedia from './Wagons/clasemedia.js';
import Cafeteria from './Wagons/cafeteria.js';
import ClaseAlta from './Wagons/clasealta.js';
import Locomotora from './Wagons/locomotora.js';
import GameObject from './Objects/gameobject.js'
import HabitacionMorton from './Wagons/Rooms/habitacionmorton.js'
import HabitacionCollins from './Wagons/Rooms/habitacioncollins.js'
import HabitacionBold from './Wagons/Rooms/habitacionbold.js'
import HabitacionYan from './Wagons/Rooms/habitacionyan.js'
import HabitacionAnthony from './Wagons/Rooms/habitacionanthony.js'
import HabitacionHaines from './Wagons/Rooms/habitacionhaines.js'
import SelectScene from './End/selectscene.js'
import GoodEnd from './End/goodend.js'
import BadEnd from './End/badend.js'
//Inicio del juego en Phaser, creando para ello el archivo 
//de configuración del juego y la clase Game, encargada de 
//crear e iniciar el juego 

let config = {
    type: Phaser.AUTO,
    width:  1000,
    height: 512,
    parent:"gameholder",
    scale: {
        //mode: Phaser.Scale.FIT,  
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY },

    pixelArt: true,

    //Establecemos todas las escenas del juego
    scene: [Boot, Menu, Settings, Credits, Wagon, ClaseBaja,ClaseMedia,ClaseAlta,Cafeteria,Locomotora,HabitacionMorton,HabitacionCollins,HabitacionBold,HabitacionYan,HabitacionAnthony,HabitacionHaines,SelectScene,GoodEnd,BadEnd, Diary, End],

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
let test=0;
this.test=675;
//let npcholder;
//UN ARRAY CON LA INFORMACION DE LOS 11 NPCS EN EL ORDEN ESTABLECIDO EN EL GDD
let npcholder= [
    {id:0, dialogo:1, anger:0}, //0
    {id:1, dialogo:3, anger:0}, //1
    {id:2, dialogo:22, anger:0}, //2
    {id:3, dialogo:5, anger:0}, //3
    {id:4, dialogo:8, anger:0}, //4
    {id:5, dialogo:10, anger:0}, //5
    {id:6, dialogo:19, anger:0}, //6
    {id:7, dialogo:17, anger:0}, //7
    {id:8, dialogo:13, anger:0}, //8
    {id:9, dialogo:20, anger:0}, //9
    {id:10, dialogo:15, anger:0}, //10
];
//let prueba;
//this.prueba=678;