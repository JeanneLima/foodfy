export const insertRecipeModalContent = (
  recipeImageFileName,
  recipeTitle,
  recipeAuthor,
) => {
  document.querySelector('.modal__image').src = `${recipeImageFileName}`;
  document.querySelector('.modal__title').firstChild.nodeValue = recipeTitle;
  document.querySelector('.modal__author').firstChild.nodeValue = recipeAuthor;
};

export const showRecipeModal = (
  modalOverlay,
  recipeCardsList,
) => {
  for (const recipeCard of recipeCardsList) {
    recipeCard.addEventListener('click', () => {
      const recipeImageFileName = recipeCard.getElementsByClassName('recipes__list-item-image',)[0].getAttribute('src');
      const recipeTitle = recipeCard.getElementsByClassName('recipes__list-item-title',)[0].firstChild.nodeValue;
      const recipeAuthor = recipeCard.getElementsByClassName('recipes__list-item-author',)[0].firstChild.nodeValue;

      insertRecipeModalContent(
        recipeImageFileName,
        recipeTitle,
        recipeAuthor,
      );

      modalOverlay.classList.add('modal__overlay--active');
    });
  }
};

export const hideRecipeModal = (closeTriggerElement, modalOverlay) => {
  closeTriggerElement.addEventListener('click', () => modalOverlay.classList.remove('modal__overlay--active'),);
};
