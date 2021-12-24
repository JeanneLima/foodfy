import { showRecipeModal, hideRecipeModal } from './utils.js'

//--- Global variables ---//
const modalOverlay = document.querySelector('.modal__overlay');
const recipeCardsList = document.querySelectorAll('.recipes__list-item');
const closeTriggerElement = document.querySelector('.modal__link--close');
const recipeAssetsDir = './assets/';

//--- General functions ---//
showRecipeModal(modalOverlay, recipeCardsList, recipeAssetsDir);
hideRecipeModal(closeTriggerElement, modalOverlay);