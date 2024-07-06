import icons from "url:../../img/icons.svg"; // Adjust the import as needed
class RecipeView {
  #parentElement = document.querySelector(".recipe");
  #errMessage = "We could not find that recipe. Pleae try again!";
  #message = "Success";
  _renderIngredient(ingredient, k) {
    return `<li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${icons}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${
        ingredient.quantity * k
          ? decimalToMixedNumberString(ingredient.quantity * k + "")
          : ""
      }</div>
      <div class="recipe__description">
        <span class="recipe__unit">${ingredient.unit || ""}</span>
        ${ingredient.description}
      </div>
    </li>`;
  }

  render(recipe, bookmarks) {
    const isBookmarked = bookmarks.some((b) => b.id === recipe.id);
    const bookmarkicon = isBookmarked
      ? `${icons}#icon-bookmark-fill`
      : `${icons}#icon-bookmark`;

    // <div class="preview__user-generated">
    //             <svg>
    //               <use href="src/img/icons.svg#icon-user"></use>
    //             </svg>
    //           </div>
    console.log(recipe.key);
    const info = `
      <figure class="recipe__fig">
        <img src="${recipe.image}" alt="${recipe.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${recipe.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${icons}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${
            recipe.cookingTime
          }</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${icons}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${
            recipe.servings * recipe.k
          }</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--decrease-servings">
              <svg>
                <use href="${icons}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="${icons}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated ${recipe.key ? "" : "hidden"}">
            <svg>
              <use href="${icons}#icon-user"></use>
            </svg>
        </div>
        <button class="btn--round btn--bookmark">
          <svg class="">
            <use href="${bookmarkicon}"></use>
          </svg>
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${recipe.ingredients
            .map((ing) => this._renderIngredient(ing, recipe.k))
            .join("")}
        </ul>
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${
            recipe.publisher
          }</span>. Please check out directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${recipe.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `;
    this.#parentElement.innerHTML = "";
    this.#parentElement.insertAdjacentHTML("afterbegin", info);
  }

  renderSpinner() {
    let info = `<div class="spinner">
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
  </div>`;
    this.#parentElement.innerHTML = "";
    this.#parentElement.insertAdjacentHTML("afterbegin", info);
  }

  addHandlerRender(handler) {
    ["hashchange", "load"].forEach((ev) =>
      window.addEventListener(ev, handler)
    );
  }

  renderError(message = this.#errMessage) {
    let info = ` <div class="error">
      <div>
        <svg>
          <use href="${icons}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${message}</p>
    </div>`;
    this.#parentElement.innerHTML = "";
    this.#parentElement.insertAdjacentHTML("afterbegin", info);
  }

  renderMessage(message = this.#message) {
    let info = ` <div class="error">
        <div class='message'>
        <svg>
            <use href="${icons}#icon-alert-triangle"></use>
        </svg>
        </div>
        <p>${message}</p>
    </div>`;
    this.#parentElement.innerHTML = "";
    this.#parentElement.insertAdjacentHTML("afterbegin", info);
  }

  addUpdateServings(increase, decrease) {
    this.#parentElement.addEventListener("click", (e) => {
      const btn = e.target.closest(".btn--tiny");
      if (!btn) return;
      if (btn.classList.contains("btn--increase-servings")) increase();
      if (btn.classList.contains("btn--decrease-servings")) decrease();
    });
  }

  addHandleBookmarks(handle) {
    this.#parentElement.addEventListener("click", (e) => {
      const btn = e.target.closest(".btn--bookmark");
      if (!btn) return;
      handle();
    });
  }
}

function decimalToMixedNumberString(decimal) {
  // Get the integer part
  const integerPart = Math.floor(decimal);

  // Get the fractional part
  const fractionalPart = decimal - integerPart;

  // If there's no fractional part, return the integer as a string
  if (fractionalPart === 0) return integerPart.toString();

  // Convert the fractional part to a simplified fraction
  const tolerance = 1.0e-6;
  let h1 = 1,
    h2 = 0,
    k1 = 0,
    k2 = 1,
    b = fractionalPart;

  do {
    let a = Math.floor(b);
    let aux = h1;
    h1 = a * h1 + h2;
    h2 = aux;
    aux = k1;
    k1 = a * k1 + k2;
    k2 = aux;
    b = 1 / (b - a);
  } while (Math.abs(fractionalPart - h1 / k1) > fractionalPart * tolerance);

  // Combine the integer part with the fraction
  const numerator = h1;
  const denominator = k1;

  // If there's no integer part, return just the fraction
  if (integerPart === 0) return `${numerator}/${denominator}`;

  return `${integerPart} ${numerator}/${denominator}`;
}
export default new RecipeView();
