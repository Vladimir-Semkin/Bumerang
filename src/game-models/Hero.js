// Наш герой.
const Boomerang = require('./Boomerang')

class Hero {
  constructor({ position }) {
    this.skin = '🏎️'
    this.position = position
    this.boomerang = new Boomerang(-1)
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
      console.log('YOU ARE DEAD!💀🌈')

      process.exit()
    }, 150)
  }
}

module.exports = Hero
