// Основной файл.
// Запускает игру.
const player = require('play-sound')((opts = {}));

const Game = require('./src/Game');

// const ourFunction = require('./src/keyboard');

// Инициализация игры с настройками.
const game = new Game({
  trackLength: 50,
});

// Запуск игры.
game.play();
