// Умеешь работать с keypress? Попробуй разобраться в этом файле.
// Вместо keypress можно использовать и стандартный readline.
// Главное не используй всё вместе!
const player = require('play-sound')((opts = {}))
const keypress = require('keypress');
const Hero = require('./game-models/Hero');


// Управление.
// Настроим соответствия нажатий на клавиши и действий в игре.

// Какая-то функция.

const keyboard = {
  a: () => console.log('q'),
  d: () => console.log('w'),
  w: () => console.log('e'),
  s: () => console.log('r'),
  e: () => console.log('t'),
  y: () => console.log('y'),
};

const ourFunction = function runInteractiveConsole(hero, enemy) {
  keypress(process.stdin);
  process.stdin.on('keypress', (ch, key) => {
    if (key) { 
      // Вызывает команду, соответствующую нажатой кнопке.
      if (key.name === 'd') {
        hero.position += 1;
      }

      if (key.name === 'a') {
        hero.position -= 1;
      }

      if (hero.position === enemy.position) {
        hero.die();
      }
      if (key.name === 'e') {
        hero.boomerang.moveRight(hero);
        player.play('congratulations.wav', { timeout: 500 }, function (err) {
          // if (err) throw err
        })
       
        
      }
      // Прерывание программы.
      if (key.ctrl && key.name === 'c') {
        process.exit();
      }
    }
  });
  process.stdin.setRawMode(true);
};

// Давай попробуем запустить этот скрипт!

module.exports = ourFunction;
