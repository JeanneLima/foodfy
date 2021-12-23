const modalOverlay = document.querySelector('.modal__overlay');
const recipeCardsList = document.querySelectorAll('.recipes__list-item');

for (let recipeCard of recipeCardsList) {
  recipeCard.addEventListener('click', () => modalOverlay.classList.add('modal__overlay--active'));
}

document.querySelector('.modal__link--close').addEventListener('click', () => modalOverlay.classList.remove('modal__overlay--active'));
