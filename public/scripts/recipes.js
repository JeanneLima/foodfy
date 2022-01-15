import { goToRecipeDetailsPage, goToRecipeDetailsAdminPage } from './utils.js';

// Global variables
const defaultRecipeCardsList = document.querySelectorAll('.recipes__list--default .recipes__list-item');
const adminRecipeCardsList = document.querySelectorAll('.recipes__list--admin .recipes__list-item');

// General functions
goToRecipeDetailsPage(defaultRecipeCardsList);
goToRecipeDetailsAdminPage(adminRecipeCardsList);
