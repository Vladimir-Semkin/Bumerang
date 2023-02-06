// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().
const wait = require('wait-sync');
const { Gamer } = require('../db/models');
const player = require('play-sound')((opts = {}));

const ourFunction = require('./keyboard');
const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Counter = require('./Counter');

// const Boomerang = require('./game-models/Boomerang');
const View = require('./View');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor(trackLength, name) {
    this.name = name;
    this.trackLength = trackLength;
    this.hero = new Hero(0, 0); // Герою можно аргументом передать бумеранг.
    this.enemy1 = new Enemy(0, 29);
    this.enemy2 = new Enemy(1, 50);
    this.enemy3 = new Enemy(2, 15);
    this.view = new View();
    this.count = new Counter();
    this.track = [];
    this.regenerateTrack();
    this.audio = 0;
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных

    const M = 3;
    const N = this.trackLength;
    this.track = [
      Array(this.trackLength).fill(' '),
      Array(this.trackLength).fill(' '),
      Array(this.trackLength).fill(' '),
    ];

    this.track[this.enemy1.position1][this.enemy1.position2] = this.enemy1.skin;
    this.track[this.enemy2.position1][this.enemy2.position2] = this.enemy2.skin;
    this.track[this.enemy3.position1][this.enemy3.position2] = this.enemy3.skin;
    this.track[this.hero.boomerang.position1][this.hero.boomerang.position2] =
      this.hero.boomerang.skin;
    this.track[this.hero.position1][this.hero.position2] = this.hero.skin;
    // this.track[this.enemy.position1][this.enemy.position2] = this.enemy.skin;
  }

  check() {
    if (
      (this.hero.position1 === this.enemy1.position1 &&
        this.hero.position2 === this.enemy1.position2) ||
      (this.hero.position1 === this.enemy2.position1 &&
        this.hero.position2 === this.enemy2.position2) ||
      (this.hero.position1 === this.enemy3.position1 &&
        this.hero.position2 === this.enemy3.position2)
    ) {
      const writeDb = async () => {
        await Gamer.create({
          name: this.name,
          scores: this.count.count,
        });
      };
      writeDb();
      this.audio.kill();
      this.hero.die();
    }
    if (
      (this.enemy1.position1 === this.hero.boomerang.position1 &&
        this.enemy1.position2 === this.hero.boomerang.position2) ||
      (this.enemy1.position1 === this.hero.boomerang.position1 &&
        this.enemy1.position2 === this.hero.boomerang.position2 + 1) ||
      (this.enemy1.position1 === this.hero.boomerang.position1 &&
        this.enemy1.position2 === this.hero.boomerang.position2 - 1)
    ) {
      this.enemy1.die();
      this.count.addCount();
    }
    if (
      (this.enemy2.position1 === this.hero.boomerang.position1 &&
        this.enemy2.position2 === this.hero.boomerang.position2) ||
      (this.enemy2.position1 === this.hero.boomerang.position1 &&
        this.enemy2.position2 === this.hero.boomerang.position2 + 1) ||
      (this.enemy2.position1 === this.hero.boomerang.position1 &&
        this.enemy2.position2 === this.hero.boomerang.position2 - 1)
    ) {
      this.enemy2.die();
      this.count.addCount();
    }

    if (
      (this.enemy3.position1 === this.hero.boomerang.position1 &&
        this.enemy3.position2 === this.hero.boomerang.position2) ||
      (this.enemy3.position1 === this.hero.boomerang.position1 &&
        this.enemy3.position2 === this.hero.boomerang.position2 + 1) ||
      (this.enemy3.position1 === this.hero.boomerang.position1 &&
        this.enemy3.position2 === this.hero.boomerang.position2 - 1)
    ) {
      this.enemy3.die();
      this.count.addCount();
    }
    if (this.enemy1.position2 < 0) {
      this.enemy1.die();
    }
    if (this.enemy2.position2 < 0) {
      this.enemy2.die();
    }
    if (this.enemy3.position2 < 0) {
      this.enemy3.die();
    }
  }

  play() {
    console.clear();
    console.log(`Привет! Давно тебя не было в уличных гонках, ${this.name}!`);
    wait(3);
    console.clear();
    console.log('Только помни, дома тебя ждёт мама');
    wait(3);
    console.clear();
    console.log('Первая фаза, Вы готовы?');
    wait(3);
    console.clear();
    console.log('Бобры 🦫, я Вас не слышу');
    wait(3);
    console.clear();
    console.log('поехали!');
    wait(2);
    console.clear();
    console.log('99...');
    wait(1);
    console.clear();
    console.log('98...');
    wait(1);
    console.clear();
    console.log('97...');
    wait(1);
    console.clear();
    console.log('96...');
    wait(1);
    console.clear();
    console.log('95...');
    wait(1);
    console.clear();
    console.log('94...');
    wait(1);
    console.clear();
    console.log('93...');
    wait(1);
    console.clear();
    console.log('92...');
    wait(1);
    for (let i = 91; i > 3; i--) {
      console.clear();
      console.log(`${i}...`);
      wait(0, 1);
    }
    console.clear();
    console.log('3...');
    wait(1);
    console.clear();
    console.log('2...');
    wait(1);
    console.clear();
    console.log('1...');
    wait(3);
    this.audio = player.play('./src/sounds/muzik.wav', () => {});

    ourFunction(this.hero, this.enemy);

    setInterval(() => {
      this.check();
      this.enemy1.moveLeft(this.hero);
      this.enemy2.moveLeft(this.hero);
      this.enemy3.moveLeft(this.hero);
      this.regenerateTrack();
      this.view.render(this.track, this.count.count, this.name);
    }, 100);
    this.check();
  }
}

module.exports = Game;
