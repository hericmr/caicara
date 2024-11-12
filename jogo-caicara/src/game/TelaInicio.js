import Phaser from 'phaser';

export default class TelaInicio extends Phaser.Scene {
  constructor() {
    super('telaInicio');
  }

  preload() {
    // Carregar imagens e áudios que serão usados na tela de introdução
    this.load.image('chorao', '/chorao.png');
    this.load.image('mapa', '/map.png');
    this.load.audio('musicaFundo', '/musica.ogg');
  }

  create() {
    this.music = this.sound.add('musicaFundo');
    // Fundo do mapa
    this.add.image(0, 0, 'mapa').setOrigin(0, 0);

    // Título do jogo
    const textoTitulo = this.add.text(this.scale.width / 2, 50, 'Aprenda a Geografia de Santos', {
      font: '32px Arial',
      fill: '#ffffff',
      align: 'center'
    }).setOrigin(0.5);

    // Botão "Iniciar Jogo"
    const botaoIniciar = this.add.rectangle(320, 550, 200, 100, 0x008000).setInteractive();
    this.add.text(320, 550, 'Iniciar Jogo', {
      font: '32px Arial',
      fill: '#000000'
    }).setOrigin(0.5);

    botaoIniciar.on('pointerdown', () => {
      this.scene.start('jogo'); // Muda para a cena principal do jogo
    });

    // Botão "Sair"
    const botaoSair = this.add.rectangle(800, 550, 200, 100, 0xff0000).setInteractive();
    this.add.text(800, 550, 'Sair', {
      font: '32px Arial',
      fill: '#ffffff'
    }).setOrigin(0.5);

    botaoSair.on('pointerdown', () => {
      this.game.destroy(true); // Fecha o jogo ao clicar em "Sair"
    });

    // Animação do personagem "Chorão"
    this.chorao = this.add.sprite(100, 100, 'chorao');
    this.tweens.add({
      targets: this.chorao,
      x: 600,
      y: 400,
      duration: 5000,
      yoyo: true,
      repeat: -1
    });
  }
}
