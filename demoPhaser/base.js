//Js importados
import Tetera from './tetera.js';

//Clase base
export default class Base extends Phaser.GameObjects.Sprite {
  
  /**
   * @param {Phaser.Scene} scene Escena 
   * @param {Platform} platform Plataforma 
   * @param {number} x Coordenada x
   * @param {number} y Coordenada y 
   * @param { Phaser.GameObjects.Group } baseGroup Grupo 
   */

  /*constructor(scene, platform, x, y, baseGroup) {
    super(scene, x, y, 'base');
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this, true);
    baseGroup.add(this);
    //this.y -= this.height / 2 + platform.height / 2;
  }*/

  constructor(scene, x, y) {
    super(scene, x, y, 'base');
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this, true);
    //baseGroup.add(this);
    //this.y -= this.height / 2 + platform.height / 2;
  }

  spawn() { this.scene.add.existing(new Star(this.scene, this, this.x, this.y)); }
}
