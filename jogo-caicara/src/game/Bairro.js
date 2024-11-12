import Phaser from 'phaser';

export default class Bairro extends Phaser.GameObjects.Image {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        scene.add.existing(this);
        this.setOrigin(0.5, 0.5);
        this.setInteractive();
    }
}
  