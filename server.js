  // servers.js is only for the making of the socketio server and the express server.

const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
const socketio = require('socket.io');
const expressServer = app.listen(5500);
const io = socketio(expressServer);
const helmet = require('helmet');
app.use(helmet());

// We can export an object instead of a variable! Good to know!
module.exports = {
  app,
  io,
};
