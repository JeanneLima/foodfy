import { showRecipeModal, hideRecipeModal } from './utils.js';

// --- Global variables ---//
const modalOverlay = document.querySelector('.modal__overlay');
const recipeCardsList = document.querySelectorAll('.recipes__list-item');
const closeTriggerElement = document.querySelector('.modal__link--close');

// --- General functions ---//
showRecipeModal(modalOverlay, recipeCardsList);
hideRecipeModal(closeTriggerElement, modalOverlay);
