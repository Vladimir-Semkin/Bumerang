const player = require('play-sound')((opts = {}))

player.play('congratulations.wav', { timeout: 500 }, function (err) {
  if (err) throw err
})
