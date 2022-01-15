// General functions
export const goToRecipeDetailsPage = recipeCardsList => {
  recipeCardsList.forEach((recipeCard, index) => {
    recipeCard.addEventListener('click', () => {
      window.location.href = `/recipes/${index}`;
    });
  });
};

export const goToRecipeDetailsAdminPage = recipeCardsList => {
  recipeCardsList.forEach((recipeCard, index) => {
    recipeCard.addEventListener('click', () => {
      window.location.href = `/admin/recipes/${index}`;
    });
  });
};

export const setActivePageStyle = () => {
  const currentPage = window.location.pathname;
  const navbarItems = document.querySelectorAll('.navbar__menu-list-item a');

  navbarItems.forEach(navbarItem => {
    if (currentPage.includes(navbarItem.getAttribute('href'))) {
      navbarItem.parentNode.classList.add('navbar__menu-list-item--active');
    }
  });
};
