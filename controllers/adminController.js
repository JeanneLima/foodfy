const recipesData = require('../data');

// GET - Returns the page and list data of all recipes
exports.getRecipes = (req, res) => {
  const recipes = recipesData.map((recipe, index) => {
    const recipeId = index;
    return { ...recipe, id: recipeId };
  });

  return res.render('admin/recipesList', { recipes });
};

// GET - Returns the selected recipe detail page and data
exports.getRecipeDetails = (req, res) => {
  const recipeIndex = req.params.id;
  const selectedRecipeData = recipesData[recipeIndex];

  if (!selectedRecipeData) {
    return res.send('Desculpe, mas a receita não foi encontrada.');
  }

  return res.render('admin/recipeDetails', { recipe: selectedRecipeData });
};
