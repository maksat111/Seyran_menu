const changeCategories = () => {
  if (window.scrollY >= 110) {
    document
      .getElementById("categoriesCardContainer")
      .classList.replace(
        "categories-card-container",
        "toggled-categories-card-container"
      );
    document
      .getElementById("scrolledMenuCategories")
      .classList.replace(
        "non-scrolled-menu-categories",
        "scrolled-menu-categories"
      );
  }
  if (window.scrollY <= 110) {
    document
      .getElementById("categoriesCardContainer")
      .classList.replace(
        "toggled-categories-card-container",
        "categories-card-container"
      );
    document
      .getElementById("scrolledMenuCategories")
      .classList.replace(
        "scrolled-menu-categories",
        "non-scrolled-menu-categories"
      );
  }
};

window.addEventListener("scroll", changeCategories);

function isElementOnViewport(element) {
  // Get the element's boundingClientRect.
  const boundingClientRect = element.getBoundingClientRect();

  // Check if the element is completely visible in the viewport.
  return boundingClientRect.top >= 200 || boundingClientRect.bottom >= 200;
}

// Example usage:
const ErtirlikElement = document.getElementById("Ertirlik");
const GarnirlarElement = document.getElementById("Garnirlar");
const SaladlarElement = document.getElementById("Saladlar");

window.addEventListener("scroll", () => {
  const isErtirlikVisible = isElementOnViewport(ErtirlikElement);
  const isGarnirlarVisible = isElementOnViewport(GarnirlarElement);
  const isSaladlarVisible = isElementOnViewport(SaladlarElement);

  if (isErtirlikVisible) {
    ertirlik = document.getElementsByName('Ertirlik')[0].classList.add('border-category');
    garnirlar = document.getElementsByName('Garnirlar')[0].classList.remove('border-category');
  } else if (isGarnirlarVisible) {
    ertirlik = document.getElementsByName('Ertirlik')[0].classList.remove('border-category');
    garnirlar = document.getElementsByName('Garnirlar')[0].classList.add('border-category');
    saladlar = document.getElementsByName('Saladlar')[0].classList.remove('border-category');
  } else if (isSaladlarVisible) {
    saladlar = document.getElementsByName('Saladlar')[0].classList.add('border-category');
    garnirlar = document.getElementsByName('Garnirlar')[0].classList.remove('border-category');
  }
});
