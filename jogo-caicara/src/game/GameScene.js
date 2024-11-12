import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('gameScene');
  }

  preload() {
    // Carregar assets do jogo aqui (imagens, sons, etc.)
    this.load.image('background', 'path/to/background-image.png');
    this.load.image('player', 'path/to/player-image.png');
  }

  create() {
    // Adicionar imagens e objetos no jogo
    this.add.image(400, 300, 'background');

    this.player = this.add.sprite(100, 100, 'player');
    
    // Configuração de movimentação do jogador
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    // Lógica de atualização (movimento do jogador)
    if (this.cursors.left.isDown) {
      this.player.x -= 5;
    } else if (this.cursors.right.isDown) {
      this.player.x += 5;
    }

    if (this.cursors.up.isDown) {
      this.player.y -= 5;
    } else if (this.cursors.down.isDown) {
      this.player.y += 5;
    }
  }
}
