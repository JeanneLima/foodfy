// Global variables
const recipeDetailsCollapseButtonsList = document.querySelectorAll(
  '.recipe__description-header-control',
);

// General functions
const toggleRecipeDetails = () => {
  for (const recipeDetailsCollapseButton of recipeDetailsCollapseButtonsList) {
    recipeDetailsCollapseButton.addEventListener('click', () => {
      const thisContent = recipeDetailsCollapseButton.parentElement.parentElement
        .querySelector('.recipe__description-content');

      const thisContentClassesList = thisContent.classList;

      if (thisContentClassesList.contains('recipe__description-content--hidden')) {
        thisContentClassesList.remove('recipe__description-content--hidden');
        recipeDetailsCollapseButton.textContent = 'Esconder';
      } else {
        thisContentClassesList.add('recipe__description-content--hidden');
        recipeDetailsCollapseButton.textContent = 'Mostrar';
      }
    });
  }
};

toggleRecipeDetails();
