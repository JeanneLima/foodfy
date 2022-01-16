const express = require('express');
const recipeActions = require('./controllers/recipeController');
const adminActions = require('./controllers/adminController');

const routes = express.Router();

// General routes
routes.get('/', recipeActions.getMostAccessedRecipes);
routes.get('/about', (req, res) => res.render('about'));

// Recipes routes
routes.get('/recipes', recipeActions.getRecipes);
routes.get('/recipes/:index', recipeActions.getRecipeDetails);

// Admin routes
routes.get('/admin/recipes', adminActions.getRecipes);
routes.get('/admin/recipes/create', adminActions.createRecipe);
routes.get('/admin/recipes/:id', adminActions.getRecipeDetails);
routes.get('/admin/recipes/:id/edit', adminActions.editRecipe);

module.exports = routes;
