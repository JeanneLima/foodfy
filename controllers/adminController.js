const fs = require('fs');
const dataJSON = require('../data.json');

// Global variables
let recipesData = dataJSON.recipes;

// GET - Returns the page and list data of all recipes
exports.getRecipes = (req, res) => {
  const recipes = recipesData.map((recipe, index) => {
    const recipeId = index;
    return { ...recipe, id: recipeId };
  });

  return res.status(200).render('admin/recipesList', { recipes });
};

// GET - Return the new recipe registration page
exports.createRecipe = (req, res) => res.render('admin/recipeCreation');

// GET - Returns the selected recipe detail page and data
exports.getRecipeDetails = (req, res) => {
  const recipeIndex = req.params.id;
  const selectedRecipeData = recipesData[recipeIndex];

  if (!selectedRecipeData) {
    return res.status(404).send('Desculpe, mas a receita não foi encontrada.');
  }

  return res.status(200).render('admin/recipeDetails', { recipe: selectedRecipeData });
};

// GET - Return recipe edition page
exports.editRecipe = (req, res) => {
  const recipeIndex = req.params.id;
  const selectedRecipeData = recipesData[recipeIndex];

  if (!selectedRecipeData) {
    return res.status(404).send('Desculpe, mas a receita não foi encontrada.');
  }

  return res.status(200).render('admin/recipeEdition', { recipe: selectedRecipeData });
};

// POST - Create a new recipe
exports.postRecipe = (req, res) => {
  const keys = Object.keys(req.body);

  // Validates form data by checking if mandatory fields are filled in
  keys.forEach(key => {
    if (
      (req.body[key] === '' || req.body[key] === [] || 
      (typeof req.body[key] === "object" && req.body[key][0] === '')) 
      && key !== 'information'
    ) {
      return res.status(422).send('Por favor, preencha todos os campos obrigatórios.');
    }
  });

  const { ingredients, preparation } = req.body;
  const newRecipeId = recipesData.length;
  const newRecipeIngredients = ingredients.filter(ingredient => ingredient); // Removes '', null and undefined values from array
  const newRecipePreparation = preparation.filter(step => step);
  const newRecipeData = {
    id: newRecipeId,
    ...req.body,
    ingredients: newRecipeIngredients,
    preparation: newRecipePreparation,
  };

  recipesData.push(newRecipeData);

  fs.writeFile('data.json', JSON.stringify(dataJSON, null, 2), error => {
    if (error) return res.status(500).send('Erro ao escrever dados em arquivo');

    return res.status(200).redirect('/admin/recipes');
  });
};

// PUT - Update an existing recipe
exports.putRecipe = (req, res) => {
  const { id, ingredients, preparation } = req.body;
  const currentId = Number(id);
  const currentIngredients = ingredients.filter(ingredient => ingredient);
  const currentPreparation = preparation.filter(step => step);
  let index = 0;

  const matchingRecipeFound = recipesData.find((recipe, foundIndex) => {
    if (currentId === recipe.id) {
      index = foundIndex;
      return true;
    }
  });

  if (!matchingRecipeFound) {
    return res.status(404).send('Desculpe, mas a receita não foi encontrada.');
  }

  const modifiedRecipeData = {
    ...matchingRecipeFound,
    ...req.body,
    id: currentId,
    ingredients: currentIngredients,
    preparation: currentPreparation,
  };

  recipesData[index] = modifiedRecipeData;

  fs.writeFile('data.json', JSON.stringify(dataJSON, null, 2), error => {
    if (error) return res.status(500).send('Erro ao escrever dados em arquivo');

    return res.status(200).redirect(`/admin/recipes/${currentId}`);
  });
};
