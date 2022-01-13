const recipesData = require('../data');

// GET - Return a list of all recipes
exports.getRecipes = (req, res) => {
  const recipes = recipesData.map((recipe, index) => {
    const recipeId = index;
    return { ...recipe, id: recipeId };
  });

  return res.render('recipe/recipes', { recipes });
};

// GET - Return a list of most accessed recipes
exports.getMostAccessedRecipes = (req, res) => {
  const quantityRecipesToShow = 6; // show only the first 6 recipes
  const reducedRecipesList = recipesData.slice(0, quantityRecipesToShow);
  const recipes = reducedRecipesList.map((recipe, index) => {
    const recipeId = index;
    return { ...recipe, id: recipeId };
  });

  return res.render('home', { recipes });
};

// GET - Return details of selected recipe
exports.getRecipeDetails = (req, res) => {
  const recipeIndex = req.params.index;
  const selectedRecipeData = recipesData[recipeIndex];

  if (!selectedRecipeData) {
    return res.send('Desculpe, mas a receita não foi encontrada.');
  }

  return res.render('recipe/recipeDetails', { recipe: selectedRecipeData });
};
