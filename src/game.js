import Boot from './boot.js';
import End from './end.js';
import Parallax from './parallax.js';
import AnimationsScene from './animationsScene.js';
import Menu from './mainmenu.js';

/**
 * Inicio del juego en Phaser. Creamos el archivo de configuración del juego y creamos
 * la clase Game de Phaser, encargada de crear e iniciar el juego.
 */
let config = {
    type: Phaser.AUTO,
    //Tamaño del canvas en pantalla
    width:  800,
    height: 600,
    scale: {
        // mode: Phaser.Scale.FIT,  
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
    },
    pixelArt: true,
    scene: [Boot, Parallax, AnimationsScene, End, Menu],
    physics: { 
        default: 'arcade', 
        arcade: { 
            gravity: { y: 500 }, 
            debug: false 
        } 
    }
};

new Phaser.Game(config);