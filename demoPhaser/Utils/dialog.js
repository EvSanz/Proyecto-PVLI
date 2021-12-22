 //Js archivados
 import Npc from "../NPCs/npc.js";

 //Clase para gestionar los dialogos
 export default class Dialog {

  /** Constructor:
  * Variables:
  * @param {Phaser.Scene} scene Escena 
  * @param {number} id Identificador 
  * @param {Npc} npc Npc con el que interactuamos
  * @param {number} image Frame del personaje
  * @param {number} newValue Valor auxiliar 
  * Metodos: 
  * @method initDialog Inicia el dialogo
  * @method talk Inicia el bloque de dialogo
  * @method nextText Pasa a la siguiente linea de dialogo
  * @method finishText Finaliza el dialogo
  * @method dialogoIrritacionMax Dialogo que sucede con irritacion al maximo
  * @method interaccionDialogo Cambia el dialogo dependiendo de la opcion escogida
  * @method createBox Permite interactuar con las opciones
  * @method showDetails Muestra los aspectos visuales del dialogo 
  * @method cambiarRetrato Cambia el frame del personaje que habla
  * @method mostrarNombre Escribe el nombre del npc 
  * @method actualizaIrritacion Muestra la irritacion del npc
  */

  constructor(scene, id, npc) {

    this.myData = null;

    //Asignamos la escena, el dialogo y el npc a variables
    this.scene = scene;
    this.currentNpc = npc;
    this.id = id;

    //Creamos variables para el bloque y linea de dialogo
    this.textNum = 0;
    this.chat = 0;

    //Añadimos los textos donde apareceran los dialogos, pero vacios
    this.label = this.scene.add.text(270, 380, " ", {
      wordWrap: {width: 400 }});

    this.label2 = this.scene.add.text(270, 425, " ", {
      wordWrap: {width: 400 }});

    //Creamos graphics y lo iniciamos como null
    this.graphics = null;
  }


  //Metodo para iniciar el dialogo
  initDialog() {

    //Bloqueamos el movimiento del jugador y la escena
    if (this.scene.player != null) {this.scene.player.canMove = false; }
    this.scene.locked = true;

    //Creamos una variable para llamar al dialogo guardado en el json
    this.myData = this.scene.scene.get('boot').myDialog;

    //Llamamos al metodo talk
    this.talk();
  }


  //Metodo para renderizar el inicio del bloque de dialogo
  talk() {

    //Eliminamos los bloques de seleccion de dialogo 
    //si no han sido eliminados o existen 
    if (this.graphics !== undefined && this.graphics2 !== undefined) {
      this.graphics.destroy();
      this.graphics2.destroy();
    }

    //Llamamos al metodo de creacion de bloques de interaccion
    this.createBox();

    //Reseteamos el valor de la linea de dialogo
    this.textNum = 0;

    //Si el dialogo es con un npc, mostramos su nombre, imagen
    //e irritacion en pantalla 
    if (this.myData.Dialogues[this.id].isObject == false) {
      this.showDetails(this.currentNpc.image, this.currentNpc, this.currentNpc.getIrritacion());
    }

    //Si no lo es, mostramos retrato del inspector y hacemos
    //desaparecer el nombre
    else {
      this.showDetails(0);
    }

    //Cargamos la primera linea de dialogo y borramos la segunda (Si hay)
    this.label.text = this.myData.Dialogues[this.id].scenes[this.chat].lines[this.textNum];
    this.label2.text = "";
  }

  
  //Metodo para renderizar la siguiente linea de dialogo
  nextText() {

    //Si no hemos llegado a las opciones de dialogo...
    if (this.textNum != this.myData.Dialogues[this.id].scenes[this.chat].opciones - 1) {

      //Y el dialogo es con un personaje
      if (this.myData.Dialogues[this.id].isObject == false) {

        //Mostramos la imagen y el nombre del personaje
        this.showDetails(this.currentNpc.image, this.currentNpc, this.currentNpc.getIrritacion());
      }

      //Y el dialogo es con un objeto
      else {

        //Mostramos la imagen del inspector y hacemos
        //desaparecer el nombre
        this.showDetails(0);
      }

      //Aumentamos las lineas de dialogo y escribimos el texto
      this.textNum++;
      this.label.text = this.myData.Dialogues[this.id].scenes[this.chat].lines[this.textNum];
    }

    //Si hemos llegado a las opciones de dialogo...
    else {

      //Mostramos la imagen del inspector y hacemos
      //desaparecer el nombre
      this.showDetails(0);

      //Aumentamos las lineas de dialogo y escribimos el texto
      this.textNum++;
      this.label.text = this.myData.Dialogues[this.id].scenes[this.chat].lines[this.textNum];

      //Comprobamos que haya otra opcion disponible. En el caso de haber
      //aumentamos las lineas de dialogo y escribimos el nuevo texto 
      if (this.textNum < this.myData.Dialogues[this.id].scenes[this.chat].lines.length) {
        this.textNum++;
        this.label2.text = this.myData.Dialogues[this.id].scenes[this.chat].lines[this.textNum];
      }
    }

    //Llamamos al metodo para finalizar dialogos, que comprobara 
    //si el dialogo ha terminado 
    this.finishText();
  }


  //Metodo encargado de finalizar el dialogo
  finishText() {

    //Si el bloque de texto carece de opciones y ha terminado
    //de mostrar todas sus lineas de dialogo...
    if (this.textNum >= this.myData.Dialogues[this.id].scenes[this.chat].lines.length &&
      this.myData.Dialogues[this.id].scenes[this.chat].opciones == -1) {

      //Si el reloj esta activado en el dialogo, disminuimos el tiempo
      if (this.myData.Dialogues[this.id].scenes[this.chat].clock) {
        this.scene.scene.get('boot').consultClock().decreaseTime(this.scene); }

      //Si no es el ultimo dialogo, cambiamos el proximo dialogo
      if (this.myData.Dialogues[this.id].ultDialogo == false) {
         this.id++;
         this.currentNpc.cambiarScene();
       } 
       
       else {
        
        //Si no es un objeto, actualizamos el valor de irritacion 
        //porque puede aumentar en el ultimo bloque
        if (this.myData.Dialogues[this.id].isObject == false) {
          this.currentNpc.aumentarIrritacion(this.myData.Dialogues[this.id].scenes[this.chat].irritacion);
          this.actualizaIrritacion(this.currentNpc.getIrritacion());
        }
      }

      //Reseteamos el bloque de dialogo
      this.chat = 0;

      //Eliminamos la representacion del nombre, la imagen y
      //el nivel de irritacion en la pantalla
      this.showDetails();

      //Destruimos los cuadros de opciones
      this.graphics.destroy();
      this.graphics2.destroy();

      //Activamos el movimiento del jugador y la escena
      if (this.scene.player != null) {this.scene.player.canMove = true; }
      this.scene.locked = false;
    }
  }


  //Método para escribir el dialogo de irritacion
  dialogoIrritacionMax() {

    //Bloqueamos el movimiento del jugador y la escena
    if (this.scene.player != null) {this.scene.player.canMove = false; }
    this.scene.locked = true;
   
    //Llamamos al metodo de creacion de bloques de interaccion 
    this.createBox();
  
    //Mostramos la imagen, el nombre y el nivel de irritacion del personaje
    this.showDetails(this.currentNpc.image, this.currentNpc, this.currentNpc.getIrritacion());

    this.label.text = "No pienso seguir hablando";
  }


  //Metodo para interactuar con las opciones
  interaccionDialogo(n) {

    //Si el dialogo es con un npc...
    if (this.currentNpc !== undefined) {

      //Y su nivel de irritacion no ha llegado al máximo...
      if (this.currentNpc.getIrritacion() < 100) {

        //Comprobamos que han acabado las lineas de dialogo del bloque y
        //que hay opciones de dialogo
        if (this.textNum >= this.myData.Dialogues[this.id].scenes[this.chat].lines.length - 1 
          && this.myData.Dialogues[this.id].scenes[this.chat].opciones != -1) {
           
          //Aumentamos el bloque de dialogo n veces, siendo n el 
          //valor del texto que has seleccionado
          this.chat = this.chat + n;

          //Actualizamos la irritacion del personaje
          this.currentNpc.aumentarIrritacion(this.myData.Dialogues[this.id].scenes[this.chat].irritacion);
          this.actualizaIrritacion(this.currentNpc.getIrritacion());

          //Llamamos al metodo talk, para iniciar el siguiente bloque de dialogo
          this.talk()
        } 
        
        //Si hay lineas de dialogo, llamamos a nextText
        else {this.nextText(); }
      }

      //Y su nivel de irritacion ha llegado al máximo...
      else {

        //Si el valor del bloque de dialogo es 0
        if (this.chat == 0) {

          //Borramos el texto que pudiese haber
          this.label.text = " ";

          //Destruimos los bloques de interaccion
          this.graphics.destroy();
          this.graphics2.destroy();
  
          //Desbloqueamos el movimiento del jugador y la escena
          if (this.scene.player != null) {this.scene.player.canMove = true; }
          this.scene.locked = false;

          //Eliminamos la representacion del nombre, la imagen y
          //el nivel de irritacion en la pantalla
          this.showDetails();
        } 
        
        //Si el valor del bloque de dialogo es 1
        else {

          //Escribimos un texto y cambiamos el valor del bloque a 0
          this.label.text = "Fuera de mi vista";
          this.chat = 0;
        }
      }

    } 
    
    //Si el dialogo es con un objeto, cargamos la siguiente linea
    //porque los objetos no tienen bloques extras de dialogo
    else {this.nextText(); }
  }


  //Metodo para crear e interactuar con bloques de interaccion 
   createBox() {

    //Creamos bloques de interaccion 
    this.graphics = new Phaser.GameObjects.Rectangle(this.scene, 200, 400, 1600, 50, 0xfffffff, 0xfffffff);
    this.graphics.setInteractive();
    this.graphics2 = new Phaser.GameObjects.Rectangle(this.scene, 200, 450, 1600, 50, 0xfffffff, 0xfffffff);
    this.graphics2.setInteractive();

    //Si hacemos click en algun bloque de interaccion, llamaremos 
    //al metodo interaccionDialogo pero con valores diferentes
    this.graphics.on('pointerdown', () => {this.interaccionDialogo(1); });
    this.graphics2.on('pointerdown', () => {this.interaccionDialogo(2); });
  }

  
  //Metodo para mostrar los detalles del personaje
  showDetails(image, npc, newValue)
  {
    this.cambiarRetrato(image);
    this.mostrarNombre(npc);
    this.actualizaIrritacion(newValue); 
  }


  //Metodo para cambiar el retrato del personaje
  cambiarRetrato(image = -1) {

    //Destruimos el retrato si existe
    if (this.portrait !== undefined) {this.portrait.destroy(); }

    //Añadimos el retrato del personaje recortado si el valor no es nulo
    if (image >= 0) {
      this.portrait = this.scene.add.sprite(120, 480, 'npcs', [image]);
      this.portrait.setCrop(0, 0, 120, 108);

      //Si el retrato es del inspector, cambiamos su orientacion
      this.portrait.flipX = image !== 0 ? true : false;
    }
  }


  //Metodo para mostrar el nombre del npc
  mostrarNombre(npc) {

    //Destruimos el nombre del personaje y la imagen 
    //donde aparece si existe
    if (this.talkingTo !== undefined) {
      this.talkingTo.destroy();
      this.frame.destroy();
    }

    //Si es un npc...
    if (npc !== undefined) {
      
      //Añadimos el sprite donde aparecera el nombre del personaje
      //y escribimos su nombre
      this.frame = this.scene.add.sprite(337, 367, 'infopanel');
      this.frame.displayWidth = 170;
      this.frame.displayHeight = 24;
      this.talkingTo = this.scene.add.text(260, 360, npc.name, {fontStyle: 'bold'});
    }
  }


  //Metodo para actualizar la irritacion de forma visual 
  actualizaIrritacion(newValue = -1) {

    //Destruimos la barra de irritacion si existe
    if (this.barra !== undefined) {this.barra.destroy(); }

    //Si el valor es superior a 0...
    if (newValue >= 0)
    {
      //Convertimos en 100 el valor en caso de superarlo
      if (newValue > 100) {newValue = 100; }

      //Y añadimos el sprite correspondiente al valor de la irritacion
      this.barra = this.scene.add.sprite(110, 493, 'irritacion', [newValue / 5])
    }
  }
}