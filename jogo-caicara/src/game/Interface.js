export default class Interface {
    constructor(scene, chorao) {
      this.scene = scene;
      this.chorao = chorao;
  
      this.pontuacao = 0;
      this.textoPontuacao = this.scene.add.text(10, 10, 'Pontuação: 0', {
        font: '24px Arial',
        fill: '#FFFFFF',
      });
  
      this.textoDistancia = this.scene.add.text(10, 40, 'Distância: 0', {
        font: '24px Arial',
        fill: '#FFFFFF',
      });
    }
  
    atualizar() {
      // Exibe a pontuação e a distância
      this.textoPontuacao.setText('Pontuação: ' + this.pontuacao);
      this.textoDistancia.setText('Distância: ' + Math.round(this.chorao.x));
    }
  
    incrementarPontuacao(valor) {
      this.pontuacao += valor;
    }
  }
  