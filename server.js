const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

// Template engine configurations
server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', { express: server });

// Routes
server.get('/sobre', (req, res) => res.render('about'));

// Port configuration
server.listen('5000', () => {
  console.log('Server is running');
});
