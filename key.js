const player = require('play-sound')((opts = {}));

// $ mplayer foo.mp3
player.play('./src/game-models/congratulations.wav', (err) => {
  if (err) throw err;
});
