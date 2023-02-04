// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().
const ourFunction = require('./keyboard');
const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Counter = require('./Counter');
// const Boomerang = require('./game-models/Boomerang');
const View = require('./View');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero({ position: 0 }); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy({ position: 30 });
    this.view = new View();
    this.count = new Counter();
    this.track = [];
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = new Array(this.trackLength).fill(' ');
    this.track[this.enemy.position] = this.enemy.skin;
    this.track[this.hero.boomerang.position] = this.hero.boomerang.skin;
    this.track[this.hero.position] = this.hero.skin;
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }
    if (
      this.enemy.position === this.hero.boomerang.position ||
      this.enemy.position === this.hero.boomerang.position + 1 ||
      this.enemy.position === this.hero.boomerang.position - 1
    ) {
      this.enemy.die();
      this.count.addCount();
    }
  }

  play() {
    ourFunction(this.hero, this.enemy);

    setInterval(() => {
      this.check();
      this.enemy.moveLeft(this.hero);
      this.regenerateTrack();
      this.view.render(this.track, this.count.count);
    }, 300);
    this.check();
  }
}

module.exports = Game;
