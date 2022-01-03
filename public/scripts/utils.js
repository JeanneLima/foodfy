// --- General functions ---//
export const goToRecipeDetailsPage = recipeCardsList => {
  recipeCardsList.forEach((recipeCard, index) => {
    recipeCard.addEventListener('click', () => {
      window.location.href = `/recipes/${index}`;
    });
  });
};
