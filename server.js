const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

// Template engine configurations
server.use(express.static('public'));

server.set('view engine', 'html');

nunjucks.configure('views', { express: server });

// Routes
server.get('/', (req, res) => res.send('root route'));

// Port configuration
server.listen('5000', () => {
  console.log('Server is running');
});
