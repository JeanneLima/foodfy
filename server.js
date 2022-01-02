const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

// Template engine configurations
server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
  express: server,
  noCache: true,
});

// Routes
server.get('/', (req, res) => res.render('home'));

server.get('/about', (req, res) => res.render('about'));

server.get('/recipes', (req, res) => res.render('recipes'));

// Port configuration
server.listen('5000', () => {
  console.log('Server is running');
});
