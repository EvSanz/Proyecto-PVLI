//Js importados
import Player from '../player.js';
import Door from '../Utils/door.js'
import Npc from '../NPCs/npc.js';
import GameObject from '../Objects/gameobject.js';

/**
 * @extends Phaser.Scene
 * @class Wagon
 * @param {string} wagonKey key del vagon
 * @param {object} wagonConfig Datos para generar el vagón
 * @param {boolean} wagonConfig.isPointAndClick ¿Es una escena PointAndClick?
 * @param {string} wagonConfig.spriteFondo1 Sprite de la izquierda del fondo
 * @param {string} wagonConfig.spriteFondo2 Sprite central del fondo
 * @param {string} wagonConfig.spriteFondo3 Sprite de la derecha del fondo
 * @param {string} wagonConfig.wagonIzq Vagon a la izquierda del actual
 * @param {string} wagonConfig.wagonDer Vagon a la derecha del actual
 * @classdesc Escenas principales del juego
 */

  /**
   * @public
   * @method playwhistle
   * @description Metodo para reproducir el silbato
   * @memberof Wagon
   */

  /**
   * @public
   * @method stopMusic
   * @description Metodo para parar la musica
   * @memberof Wagon
   */

  /**
   * @protected
   * @method addSceneObjects
   * @description Añade los objetos ubicados en el vagon actual
   * @memberof Wagon
   */

  /**
   * @protected
   * @method addScenesNpc
   * @description Añade los npcs ubicados en el vagon actual
   * @memberof Wagon
   */

  /**
   * @protected
   * @method placaPuerta
   * @description Metodo para escribir en pantalla el nombre de las habitaciones
   * @memberof Wagon
   * @param {number} doorX Posicion x de la puerta correspondiente
   * @param {number} doorY Posicion y de la puerta correspondiente
   * @param {string} nombre Nombre del npc que aparecera en la placa
   */


//Clase para crear y gestionar un nivel 
export default class Wagon extends Phaser.Scene {

  constructor(wagonKey, wagonConfig) {
    super({
      key: wagonKey
    });
    this.isPT = wagonConfig.isPointAndClick
    this.spriteFondo1 = wagonConfig.spriteFondo1;
    this.spriteFondo2 = wagonConfig.spriteFondo2;
    this.spriteFondo3 = wagonConfig.spriteFondo3;
    this.wagonIzq = wagonConfig.wagonIzq;
    this.wagonDer = wagonConfig.wagonDer;
    this.wagonKey = wagonKey;
  }

  create(playerX = 500) {

    //Asignamos los managers a variables
    // this.dmanager = this.scene.get('boot').dmanager;
    this.gomanager = this.scene.get('boot').gomanager;

    this.locked = false;

    //Dependiendo de si es una escena PointAndClick o no, cambiamos
    //la cancion que suena de fondo
    if (this.isPT) {
      this.musica = this.sound.add('musicafondopt', {
        volume: this.game.sound.volume * 0.4, loop: true });
      this.musica.play();
    } 
    
    else {
      this.musica = this.sound.add('musicafondo', {
        volume: this.game.sound.volume * 0.4, loop: true });
      this.musica.play();
    }
    
    //Creamos la animacion del fondo
    this.anims.create({
      key: 'backgroundwindows',
      frames: this.anims.generateFrameNumbers('background', {start: 0, end: 25 }),
      frameRate: 4,
      repeat: -1
    });

    //Establecemos un comando Q de teclado
    this.q = this.input.keyboard.addKey('Q');

    //Creamos un boton para interactuar con el diario
    this.botonDiario = new Phaser.GameObjects.Rectangle(this, 890, 430, 130, 115, 
      0x0000000, 0x0000000).setInteractive();

    //Si pulsamos Q o hacemos click en el boton, abrimos la escena de diario
    this.q.on('down', abreDiario => {
      this.scene.launch('diary', this);
      this.scene.pause();
    })

    this.botonDiario.on('pointerdown', abreDiario => {
      this.scene.launch('diary', this);
      this.scene.pause();
    })

    //Creamos el suelo y añadimos sus fisicas
    let uisuelo;
    uisuelo = this.add.sprite(500, 450, 'ui').setDepth(-1);
    this.physics.add.existing(uisuelo, true);


    //Comprobamos si los sprites del fondo deben animarse 
    //o no, y los creamos con animaciones en el caso de que deban
    if (typeof (this.spriteFondo1) == 'number') {
      this.a = this.add.sprite(170, 174, 'background', [this.spriteFondo1]);
    } 
    else {
      this.a = this.add.sprite(170, 174, this.spriteFondo1);
      if (this.spriteFondo1 === 'ventanas') {this.a.play('backgroundwindows'); }
    }

    if (typeof (this.spriteFondo2) == 'number') {
      this.a = this.add.sprite(500, 174, 'background', [this.spriteFondo2]);
    } 
    else {
      this.a = this.add.sprite(500, 174, this.spriteFondo2);
      if (this.spriteFondo2 === 'ventanas') {this.a.play('backgroundwindows'); }
    }

    if (typeof (this.spriteFondo3) == 'number') {
      this.a = this.add.sprite(833, 174, 'background', [this.spriteFondo3]);
    } else {
      this.a = this.add.sprite(833, 174, this.spriteFondo3);

      if (this.spriteFondo3 === 'ventanas') {this.a.play('backgroundwindows'); }
    }


    //Si es una escena PointAndClick...
    if (this.isPT) {

      //Comprobamos que es un vagon de habitacion
      if (this.wagonKey != "selectscene" && this.wagonKey != "badend" 
        && this.wagonKey != "goodend") {

        let goback;

        //Añadimos un boton para volver a la escena anterior
        goback = this.add.sprite(960, 50, 'objects', [4]).setInteractive();
        
        //Si lo pulsamos, hacemos disminuir el tiempo y comprobamos que 
        //aun podemos seguir jugando
        goback.on('pointerdown', () => {
          this.scene.get('boot').consultClock().decreaseTime(this);
          if (this.scene.get('boot').consultClock().getTime() > 0) {
            this.scene.start(this.wagonIzq, 500); }});
      }
    } 
    
    //Si no es un vagon de habitacion, es un vagon
    else {

      //Creamos las puertas laterales si existen
      if (this.wagonKey !== this.wagonIzq) { 
        new Door(this, 15, 222, this.wagonIzq, 'puertafunlat');}
      if (this.wagonKey !== this.wagonDer) {
        new Door(this, 985, 222, this.wagonDer, 'puertafunlat2'); }
        

      //Creamos el jugador con sus fisicas
      this.player = new Player(this, playerX, 240).setDepth(2);
      this.physics.add.collider(this.player, uisuelo);
    }

    //Mostramos el reloj
    this.scene.get('boot').consultClock().showTime(this.wagonKey);
  }

  //Metodo para reproducir el silbato
  playwhistle() {

    this.woo = this.sound.add('choochoo', {
      volume: this.game.sound.volume * 0.5,
      loop: false
    });

    this.woo.play();
  }

  //Metodo para parar la musica
  stopMusic() {this.musica.stop(); }

  //Añade los objetos ubicados en el vagon actual
  addSceneObjects() {

    //Variable para hacer referencia a los objetos cargados en el boot desde el json
    this.objs = this.scene.get('boot').myObjects;

    this.objects = [];
    let j = 0;

    //Hacemos un recorrido de todos los objetos para colocarlos en
    //las escenas segun sus caracteristicas
    for (let i = 0; i < this.objs.Objetos.length; ++i) {
      if (this.objs.Objetos[i].vagon == this.scene.key && this.scene.get('boot').presente[i])
        this.objects[j++] = new GameObject(this, this.objs.Objetos[i].posX, this.objs.Objetos[i].posY, 
          this.objs.Objetos[i].sprite, i, true, this.objs.Objetos[i].dialogo);
    }
  }

  //Añade los npcs ubicados en el vagon actual
  addScenesNpc() {

    //Variable para hacer referencia a los personajes cargados en el boot desde el json
    this.pj = this.scene.get('boot').myCharacters;

    this.characters = [];
    let j = 0;

    //Hacemos un recorrido de todos los objetos para colocarlos en
    //las escenas segun sus caracteristicas
    for (let i = 0; i < this.pj.Personajes.length; ++i) {
      if (this.pj.Personajes[i].scene == this.scene.key) {
        this.characters[j++] = new Npc(this, this.pj.Personajes[i].posX, this.pj.Personajes[i].posY, i + 1,
          this.game.npcholder[i].anger, this.pj.Personajes[i].frame,
          this.game.npcholder[i].dialogo);
      }
    }
  }

  //Metodo para escribir en pantalla el nombre de las habitaciones
  placaPuerta(placa, doorX, doorY, nombre) {
    placa = this.scene.scene.add.text(doorX + 105, doorY - 67, nombre, {
      fontStyle: 'bold', fontSize: 13, color: '#000000'});

    placa.setDepth(1);
  }
}