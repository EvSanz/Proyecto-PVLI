//Js importados
import Boot from './boot.js';
import End from './end.js';
import Level from './scene.js';
import Levelpt from './scenept.js';
import Diary from './diario.js';
import Clock from './clock.js';
import Wagon from './wagon.js';
import ClaseBaja from './clasebaja.js';
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
    scene: [Boot, Level, Levelpt, Wagon, ClaseBaja, Diary, End],

    //Establecemos las fisicas del juego
    physics: { 
        default: 'arcade', 
        debug: true,
        arcade: { 
            gravity: { y: 400 }, 
            debug: true } 
    }
    
};

new Phaser.Game(config ,'gameholder');