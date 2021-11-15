//Clase encargada de crear las plataformas
export default class Platform extends Phaser.GameObjects.Sprite {
  
  /**Constructor de la Plataforma
   * @param {Phaser.Scene} scene Escena 
   * @param {Player} player Jugador 
   * @param {Phaser.GameObjects.Group} baseGroup Grupo 
   * @param {number} x Coordenada X
   * @param {number} y Coordenada Y
   */

  constructor(scene, player, baseGroup, x, y) {
    super(scene, x, y, 'platform');

    //Creamos el suelo en la escena del juego, teniendo 
    //en cuenta que debemos añadir colliders para evitar 
    //que el jugador lo atraviese
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this, true);
    new Base(scene, this, x, y, baseGroup);
    this.scene.physics.add.collider(this, player);
  }
}
