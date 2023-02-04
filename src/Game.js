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
const writeDb=require('../db1')

// const Boomerang = require('./game-models/Boomerang');
const View = require('./View');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor(trackLength, name) {
    this.name = name;
    this.trackLength = trackLength;
    this.hero = new Hero({ position: 0 }); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy({ position: 30 });
    this.view = new View();
    this.count = new Counter();
    this.track = [];
    this.regenerateTrack();
    this.audio = 0;
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = new Array(this.trackLength).fill(' ');
    this.track[this.enemy.position] = this.enemy.skin;
    this.track[this.hero.boomerang.position] = this.hero.boomerang.skin;
    this.track[this.hero.position] = this.hero.skin;
    this.enemy[this.enemy.position] = this.enemy.skin;
  }

  check() {
    if (this.hero.position === this.enemy.position) {
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
      this.enemy.position === this.hero.boomerang.position ||
      this.enemy.position === this.hero.boomerang.position + 1 ||
      this.enemy.position === this.hero.boomerang.position - 1
    ) {
      this.enemy.die();
      this.count.addCount();
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
    this.audio = player.play('./src/sounds/muzik.wav', (err) => {
      if (err && !err.killed) throw err;
    });

    ourFunction(this.hero, this.enemy);

    setInterval(() => {
      this.check();
      this.enemy.moveLeft(this.hero);
      this.regenerateTrack();
      this.view.render(this.track, this.count.count, this.name);
    }, 250);
    this.check();
  }
}

module.exports = Game;
