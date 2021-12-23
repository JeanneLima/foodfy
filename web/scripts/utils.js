const modalOverlay = document.querySelector('.modal__overlay');
const recipeCardsList = document.querySelectorAll('.recipes__list-item');

for (let recipeCard of recipeCardsList) {
  recipeCard.addEventListener('click', () => {
    const recipeImageFileName = recipeCard.getAttribute('id').split("--")[1];
    const recipeTitle = recipeCard.getElementsByClassName('recipes__list-item-title')[0].firstChild.nodeValue;
    const recipeAuthor = recipeCard.getElementsByClassName('recipes__list-item-author')[0].firstChild.nodeValue

    console.log('recipeTitle:', recipeTitle)

    document.querySelector('.modal__image').src = `./assets/${recipeImageFileName}.png`;
    document.querySelector('.modal__title').firstChild.nodeValue = recipeTitle;
    document.querySelector('.modal__author').firstChild.nodeValue = recipeAuthor;

    modalOverlay.classList.add('modal__overlay--active')
  });


}

document.querySelector('.modal__link--close').addEventListener('click', () => modalOverlay.classList.remove('modal__overlay--active'));
