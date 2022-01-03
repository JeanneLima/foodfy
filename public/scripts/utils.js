export const showRecipeDetails = (recipeCardsList) => {
  recipeCardsList.forEach((recipeCard, index) => {
    recipeCard.addEventListener('click', () => {
      window.location.href = `/recipes/${index}`;
    });
  });
};
