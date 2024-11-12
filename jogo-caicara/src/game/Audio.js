export default class Audio {
    constructor(scene) {
      this.scene = scene;
    }
  
    carregarMusicaDeFundo(caminho) {
      this.scene.sound.add('musicaFundo', { loop: true, volume: 0.5 });
      this.scene.sound.play('musicaFundo');
    }
  }
  