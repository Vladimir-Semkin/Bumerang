// Основной файл.
// Запускает игру.
const Game = require('./src/Game');

// const ourFunction = require('./src/keyboard');

// Инициализация игры с настройками.
const game = new Game(
   50,process.argv[2]
);

// Запуск игры.
game.play();
