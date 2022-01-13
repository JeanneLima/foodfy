const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');

const server = express();

server.use(routes);

// Template engine configurations
server.use(express.static('public'));
server.set('view engine', 'njk');

nunjucks.configure('views', {
  express: server,
  noCache: true,
});

// Port configuration
server.listen('5000', () => {
  console.log('Server is running');
});
