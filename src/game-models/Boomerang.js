// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {

  constructor(position1, position2) {
    this.skin = '🌀';

    this.position1 = position1;
    this.position2 = position2;

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
    this.position1 = hero.position1;
    this.position2 = hero.position2 + 1;
    for (let i = 0; i < 5; i += 1) {
      await new Promise((r) => setTimeout(r, 100));
      this.position2 += 1;
    }

    this.position1 = hero.position1;

    for (let i = this.position2; i > hero.position2; i--) {
      await new Promise((r) => setTimeout(r, 100));

      this.position2 -= 1;
    }
    this.position2 = -8;
  }
}

module.exports = Boomerang;
