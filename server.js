const express = require('express');
const nunjucks = require('nunjucks');
const recipesData = require('./data.js');

const server = express();

// Template engine configurations
server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
  express: server,
  noCache: true,
});

// Routes
server.get('/', (req, res) => {
  const quantityRecipesToShow = 6; // show only the first 6 recipes
  const reducedRecipesList = recipesData.slice(0, quantityRecipesToShow);
  const recipes = reducedRecipesList.map((recipe, index) => {
    const recipeId = index;
    return { ...recipe, id: recipeId };
  });

  return res.render('home', { recipes });
});

server.get('/about', (req, res) => res.render('about'));

server.get('/recipes', (req, res) => {
  const recipes = recipesData.map((recipe, index) => {
    const recipeId = index;
    return { ...recipe, id: recipeId };
  });

  return res.render('recipes', { recipes });
});

server.get('/recipes/:index', (req, res) => {
  const recipeIndex = req.params.index;
  const selectedRecipeData = recipesData[recipeIndex];

  if (!selectedRecipeData) {
    return res.send('Desculpe, mas a receita não foi encontrada.');
  }

  return res.render('recipeDetails', { recipe: selectedRecipeData });
});

// Port configuration
server.listen('5000', () => {
  console.log('Server is running');
});
