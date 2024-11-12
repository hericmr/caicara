import Phaser from 'phaser';
import TelaInicial from './TelaInicial';
import Jogo from './Jogo';

const config = {
  type: Phaser.AUTO,
  width: 1319,   // Largura especificada
  height: 680,   // Altura especificada
  scene: [TelaInicial, Jogo],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
};

const game = new Phaser.Game(config);
