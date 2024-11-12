import Phaser from 'phaser';
import TelaInicio from './game/TelaInicio';
import Jogo from './game/Jogo';

const config = {
  type: Phaser.AUTO,
  width: '100%',   // Definindo largura como 100% da tela do navegador
  height: '100%',  // Definindo altura como 100% da tela do navegador
  scene: [TelaInicio, Jogo],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },
  scale: {
    mode: Phaser.Scale.RESIZE,  // Ajusta a tela conforme a janela
    autoCenter: Phaser.Scale.CENTER_BOTH  // Centraliza a tela automaticamente
  }
};

const game = new Phaser.Game(config);
