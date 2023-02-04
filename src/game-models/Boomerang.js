// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!


class Boomerang {
  constructor(position) {
    this.skin = '🌀'
   
    this.position = position
  }

  // fly(position) {
  //   this.position = position + 1;
  //   this.moveRight();
  //   // setTimeout(() => {
  //   //   this.moveLeft();
  //   // }, 10);
  // }

  // async moveLeft() {
  //   for (let i = 0; i < 5; i += 1) {
  //     await new Promise((r) => setTimeout(r, 100));
  //     this.position -= 1;
  //   }
  // }

  async moveRight(hero) {
    this.position = hero.position + 1
    for (let i = 0; i < 5; i += 1) {
      await new Promise((r) => setTimeout(r, 100))
      this.position += 1
    }

    for (let i = this.position; i > hero.position; i--) {
      await new Promise((r) => setTimeout(r, 100))

      this.position -= 1
    }
    this.position = -8
  }
}

module.exports = Boomerang
