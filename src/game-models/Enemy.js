// Враг.

class Enemy {
  constructor(position1, position2) {
    this.generateSkin();
    this.position1 = position1;
    this.position2 = position2;
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

  moveLeft() {
    this.position2 -= 1;
    // if (hero.position === this.position) {
    //   hero.die();
    // }
  }

  die() {
    this.generateSkin();
    this.position2 = 50;
    console.log('Enemy is dead!');
  }
}

module.exports = Enemy;
