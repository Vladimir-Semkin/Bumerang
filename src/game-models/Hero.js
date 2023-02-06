// Наш герой.
const Boomerang = require('./Boomerang')

class Hero {

  constructor(position1, position2) {
    this.skin = '🏎️';
    this.position1 = position1;
    this.position2 = position2;
    this.boomerang = new Boomerang(0, -1);

  }

  moveLeft() {
    // Идём влево.
    this.position -= 1
  }

  moveRight() {
    // Идём вправо.
    this.position += 1
  }

  attack() {
    // Атакуем.
    this.boomerang.fly()
    player.play('congratulations.wav', { timeout: 500 }, (err) => {
      if (err) throw err
    })
  }

  die() {
    this.skin = '💀'
    this.position -= 1
    setTimeout(() => {
      console.log('YOU ARE DEAD!💀')

      process.exit()
    }, 150)
  }
}

module.exports = Hero
