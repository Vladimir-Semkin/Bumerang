// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor(position) {
    this.skin = '🌀';
    this.position = position;
  }

  fly(position) {
    this.position = position + 1;
    this.moveRight();
    this.moveLeft();
  }

  async moveLeft() {
    for (let i = 0; i < 5; i += 1) {
      await new Promise((r) => setTimeout(r, 100));
      if (this.position > position) {
        this.position -= 1;
      }
    }
  }

  async moveRight() {
    for (let i = 0; i < 5; i += 1) {
      await new Promise((r) => setTimeout(r, 200));
      this.position += 1;
    }
    this.position = -1;
  }
}

module.exports = Boomerang;
