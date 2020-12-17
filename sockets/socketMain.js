// Because we export an object from server.js, so here we can require from the key value pair.
const io = require('../server').io;
const Orb = require('./classes/orb');

let orbs = [];

initGame();

io.on('connect', (socket) => {
  socket.emit('init', { orbs });
});

// Generate orbs at the beginning of the game.
function initGame() {
  for (let i = 0; i < 500; i++) {
    orbs.push(new Orb());
  }
}

module.exports = io;
