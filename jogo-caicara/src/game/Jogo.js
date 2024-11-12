import Phaser from 'phaser';
import Personagem from './Personagem';
import Bairro from './Bairro';
import Interface from './Interface';
import { bairros } from './bairros';

export default class Jogo extends Phaser.Scene {
  constructor() {
    super('jogo');
  }

  preload() {
    // Carregar imagens e áudios
    this.load.image('chorao', '/chorao.png');
    this.load.image('mapa', '/map.png');
    this.load.image('bandeira', '/bandeira2.png');
    this.load.audio('musicaFundo', '/musica.ogg');
  }

  create() {
    // Inicializar a física arcade
    this.physics.world.setBounds(0, 0, 1319, 680); // Ajuste os limites da física conforme necessário

    // Inicializar o áudio usando Phaser
    this.music = this.sound.add('musicaFundo');
    this.music.play({ loop: true });

    // Inicializar o personagem
    this.chorao = new Personagem(this, -200, 50, 'chorao');
    
    // Defina a física para o personagem, se necessário
    this.physics.world.enable(this.chorao); // Habilitar física para o personagem
    this.chorao.body.setCollideWorldBounds(true); // Impede o personagem de sair da tela

    // Inicializar a interface
    this.interface = new Interface(this, this.chorao);

    // Configurar as teclas de movimentação
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    // Atualizar o personagem e a interface
    this.chorao.mover(this.cursors);
    this.interface.atualizar();
  }
}


