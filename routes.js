const express = require('express');
const recipesData = require('./data');

const routes = express.Router();

routes.get('/', (req, res) => {
  const quantityRecipesToShow = 6; // show only the first 6 recipes
  const reducedRecipesList = recipesData.slice(0, quantityRecipesToShow);
  const recipes = reducedRecipesList.map((recipe, index) => {
    const recipeId = index;
    return { ...recipe, id: recipeId };
  });

  return res.render('home', { recipes });
});

routes.get('/about', (req, res) => res.render('about'));

routes.get('/recipes', (req, res) => {
  const recipes = recipesData.map((recipe, index) => {
    const recipeId = index;
    return { ...recipe, id: recipeId };
  });

  return res.render('recipes', { recipes });
});

routes.get('/recipes/:index', (req, res) => {
  const recipeIndex = req.params.index;
  const selectedRecipeData = recipesData[recipeIndex];

  if (!selectedRecipeData) {
    return res.send('Desculpe, mas a receita não foi encontrada.');
  }

  return res.render('recipeDetails', { recipe: selectedRecipeData });
});

module.exports = routes;
