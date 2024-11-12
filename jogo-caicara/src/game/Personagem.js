import Phaser from 'phaser';

export default class Personagem extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture) {
      super(scene, x, y, texture);
      scene.add.existing(this);
      scene.physics.world.enable(this);
      this.setOrigin(0.5, 0.5);
      this.setInteractive();
      this.setScale(0.5); // Ajustar escala do personagem
    }
  
    mover(cursors) {
      const speed = 5;
      if (cursors.left.isDown) {
        this.x -= speed;
      }
      if (cursors.right.isDown) {
        this.x += speed;
      }
      if (cursors.up.isDown) {
        this.y -= speed;
      }
      if (cursors.down.isDown) {
        this.y += speed;
      }
    }
  }
  