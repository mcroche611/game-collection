/**
 * Escena para la precarga de los assets que se usarán en el juego.
 * Esta escena se puede mejorar añadiendo una imagen del juego y una 
 * barra de progreso de carga de los assets
 * @see {@link https://gamedevacademy.org/creating-a-preloading-screen-in-phaser-3/} como ejemplo
 * sobre cómo hacer una barra de progreso.
 */
export default class Boot extends Phaser.Scene {
  /**
   * Constructor de la escena
   */
  constructor() {
    super({ key: 'boot' });
  }

  /**
   * Carga de los assets del juego
   */
  preload() {
    // Con setPath podemos establecer el prefijo que se añadirá a todos los load que aparecen a continuación
    
    this.load.setPath('assets/sprites/');
    this.load.image('platform', 'platform.png');
    this.load.image('base', 'base.png');
    this.load.image('star', 'star.png');
    this.load.image('player', 'player.png');
    this.load.spritesheet('playeranim', 
    'NicePng_sprite-png_2007324.png',
    { frameWidth: 64, frameHeight: 64 });

    this.load.spritesheet('guy', 'guy1400.png',
    { frameWidth: 200, frameHeight: 342 });

    this.load.spritesheet('botones', 'botones.png', {
      frameWidth: 240,
      frameHeight: 48
    });
    
    //Cargamos los fondos
    this.load.image('sky', 'sky-clouds.jpg');
    this.load.image('mountains', 'mountains1000.png');
    this.load.image('menuprincipal', 'menuprincipal.png');
        
    
    
  }

  /**
   * Creación de la escena. En este caso, solo cambiamos a la escena que representa el
   * nivel del juego
   */
  create() {
    this.scene.start('mainmenu');
  }
}