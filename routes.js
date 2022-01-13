const express = require('express');
const recipeActions = require('./controllers/recipeController');

const routes = express.Router();

// General routes
routes.get('/', recipeActions.getMostAccessedRecipes);
routes.get('/about', (req, res) => res.render('about'));

// Recipes routes
routes.get('/recipes', recipeActions.getRecipes);
routes.get('/recipes/:index', recipeActions.getRecipeDetails);

module.exports = routes;
