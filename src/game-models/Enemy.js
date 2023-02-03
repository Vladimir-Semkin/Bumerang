// Враг.

class Enemy {
  constructor() {
    this.generateSkin();
    this.position = 29;
  }

  generateSkin() {
    const skins = [
      '👾',
      '👹',
      '👻',
      '👽',
      '👿',
      '💩',
      '🤡',
      '🤺',
      '🧛',
      '🧟',
      '🎃',
    ];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft(hero) {
    this.position -= 1;
    if (hero.position === this.position) {
      hero.die();
    }
  }

  die() {
    this.position = -1;
    console.log('Enemy is dead!');
  }
}

module.exports = Enemy;
