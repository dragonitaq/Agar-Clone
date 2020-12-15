// Because we export an object from server.js, so here we can require the key value pairs as below.
const io = require('../server').io;

module.exports = io;
