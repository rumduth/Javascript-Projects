import icons from "url:../../img/icons.svg"; // Ensure this import is correct
class ResultsView {
  #parentElement = document.querySelector(".results");
  #errMessage = "No recipe found for your query! Please try again";
  #message = "Success";
  #previousChosen = null;
  constructor() {
    this.#parentElement.addEventListener("click", (e) => {
      const foodBtn = e.target.closest(".preview__link");
      if (!foodBtn) return;
      const previewLinkShare = document.querySelector(".preview__link--share");
      if (previewLinkShare) {
        previewLinkShare.classList.remove("preview__link--active");
      }
      if (this.#previousChosen === null) this.#previousChosen = foodBtn;
      else {
        this.#previousChosen.classList.remove("preview__link--active");
        this.#previousChosen = foodBtn;
      }
      foodBtn.classList.add("preview__link--active");
    });
    // window.addEventListener("hashchange", (e) => {});
  }
  _renderItem(item, id_chosen) {
    const id = id_chosen || window.location.hash.slice(1);
    let info = `<li class="preview">
        <a class="preview__link ${
          id === item.id ? "preview__link--active preview__link--share" : ""
        }" href="#${item.id}">
          <figure class="preview__fig">
            <img src="${item.image_url}" alt="${item.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${item.title}</h4>
            <p class="preview__publisher">${item.publisher}</p>
            <div class="preview__user-generated ${item.key ? "" : "hidden"}">
            <svg>
              <use href="${icons}#icon-user"></use>
            </svg>
          </div>
          </div>
        </a>
      </li>`;
    return info;
  }

  render(items, id) {
    if (items.length === 0) {
      return this.renderError();
    }
    console.log(window.location.hash.slice(1));
    let info = items.map((el) => this._renderItem(el, id)).join("");

    this.#parentElement.innerHTML = ""; // Clear previous content
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

  addBookmarkRender(bookmarkRender) {
    this.#parentElement.addEventListener("click", (e) => {
      const foodBtn = e.target.closest(".preview__link");
      if (!foodBtn) return;
      bookmarkRender(foodBtn.href.split("#")[1]);
    });
  }
}

export default new ResultsView();
