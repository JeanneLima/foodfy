import { goToRecipeDetailsPage } from './utils.js';

// Global variables
const recipeCardsList = document.querySelectorAll('.recipes__list-item');

// General functions
recipeCardsList !== null && goToRecipeDetailsPage(recipeCardsList);
