import { toogleRecipeModal} from './utils.js'

//--- Global variables ---//
const modalOverlay = document.querySelector('.modal__overlay');
const recipeCardsList = document.querySelectorAll('.recipes__list-item');
const recipeAssetsDir = './../assets/';

//--- General functions ---//
toogleRecipeModal(modalOverlay, recipeCardsList, recipeAssetsDir);
