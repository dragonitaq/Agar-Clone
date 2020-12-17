// servers.js is only for the making of the socketio server and the express server.
const express = require('express');
const socketio = require('socket.io');

const app = express();
app.use(express.static(__dirname + '/public'));
const expressServer = app.listen(5500);

const io = socketio(expressServer);

const helmet = require('helmet');
app.use(helmet());

// We can export an object instead of a variable! Good to know!
module.exports = {
  app,
  io,
};
