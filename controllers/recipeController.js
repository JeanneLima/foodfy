const dataJSON = require('../data.json');

// Global variables
const recipesData = dataJSON.recipes;

// GET - Returns the page and list data of all recipes
exports.getRecipes = (req, res) => {
  const recipes = recipesData.map((recipe, index) => {
    const recipeId = index;
    return { ...recipe, id: recipeId };
  });

  return res.status(200).render('recipe/recipes', { recipes });
};

// GET - Returns the page and list data of all most accessed recipes
exports.getMostAccessedRecipes = (req, res) => {
  const quantityRecipesToShow = 6; // show only the first 6 recipes
  const reducedRecipesList = recipesData.slice(0, quantityRecipesToShow);
  const recipes = reducedRecipesList.map((recipe, index) => {
    const recipeId = index;
    return { ...recipe, id: recipeId };
  });

  return res.status(200).render('home', { recipes });
};

// GET - Returns the selected recipe detail page and data
exports.getRecipeDetails = (req, res) => {
  const recipeIndex = req.params.index;
  const selectedRecipeData = recipesData[recipeIndex];

  if (!selectedRecipeData) {
    return res.status(404).send('Desculpe, mas a receita não foi encontrada.');
  }

  return res.status(200).render('recipe/recipeDetails', { recipe: selectedRecipeData });
};
