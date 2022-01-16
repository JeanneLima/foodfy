const fs = require('fs');
const recipesData = require('../data.json');

// GET - Returns the page and list data of all recipes
exports.getRecipes = (req, res) => {
  const recipes = recipesData.recipes.map((recipe, index) => {
    const recipeId = index;
    return { ...recipe, id: recipeId };
  });

  return res.render('admin/recipesList', { recipes });
};

// GET - Return the new recipe registration page
exports.createRecipe = (req, res) => res.render('admin/recipeCreation');

// GET - Returns the selected recipe detail page and data
exports.getRecipeDetails = (req, res) => {
  const recipeIndex = req.params.id;
  const selectedRecipeData = recipesData.recipes[recipeIndex];

  if (!selectedRecipeData) {
    return res.send('Desculpe, mas a receita não foi encontrada.');
  }

  return res.render('admin/recipeDetails', { recipe: selectedRecipeData });
};

// GET - Return recipe edition page
exports.editRecipe = (req, res) => {
  const recipeIndex = req.params.id;
  const selectedRecipeData = recipesData.recipes[recipeIndex];

  if (!selectedRecipeData) {
    return res.send('Desculpe, mas a receita não foi encontrada.');
  }

  return res.render('admin/recipeEdition', { recipe: selectedRecipeData });
};

// POST - Create a new recipe
exports.postRecipe = (req, res) => {
  const keys = Object.keys(req.body);

  // Validates form data by checking if mandatory fields are filled in
  for (key of keys) {
    if (
      (req.body[key] === '' || req.body[key] === [] || 
      (typeof req.body[key] === "object" && req.body[key][0] === '')) 
      && key !== 'information'
    ) {
      return res.send('Por favor, preencha todos os campos obrigatórios.');
    }
  };

  const newRecipeId = recipesData.recipes.length;

  const newRecipeData = {
    id: newRecipeId,
    ...req.body,
  };

  recipesData.recipes.push(newRecipeData);

  fs.writeFile('data.json', JSON.stringify(recipesData, null, 2), error => {
    if (error) return res.send('Erro ao escrever dados em arquivo');

    return res.redirect('/admin/recipes');
  });
};
