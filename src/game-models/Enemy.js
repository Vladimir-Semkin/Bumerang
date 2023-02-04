// Враг.

class Enemy {
  constructor() {
    this.generateSkin();
    this.position = 50;
  }

  generateSkin() {
    const skins = [
      '👬',
      '👬',
      '🫃',
      '👬',
      '👬',
      '👬',
      '👬',
      '👬',
      '👬',
      '🫃',
      '👬',
    ];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    this.position -= 1;
    // if (hero.position === this.position) {
    //   hero.die();
    // }
  }

  die() {
    this.generateSkin();
    this.position = 50;
    console.log('Enemy is dead!');
  }
}

module.exports = Enemy;
