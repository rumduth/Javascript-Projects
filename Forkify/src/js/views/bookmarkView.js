import icons from "url:../../img/icons.svg"; // Ensure this import is correct

class BookmarkView {
  #parentElement = document.querySelector(".bookmarks__list");
  #errMessage = "No bookmarks yet. Find a nice recipe and bookmark it :)";
  #previousChosen = null;

  constructor() {
    this.#parentElement.addEventListener("click", (e) => {
      const foodBtn = e.target.closest(".preview__link");
      if (!foodBtn) return;
      const previewLinkShare = document.querySelector(
        ".preview__link--share-bookmark"
      );
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
  }
  _renderItem(item, check_id) {
    const id = check_id || window.location.hash.slice(1);
    let info = `<li class="preview">
        <a class="preview__link ${
          id === item.id
            ? "preview__link--active preview__link--share-bookmark"
            : ""
        }" href="#${item.id}">
          <figure class="preview__fig">
            <img src="${item.image}" alt="${item.title}" />
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
    let info = items.map((el) => this._renderItem(el, id)).join("");

    this.#parentElement.innerHTML = ""; // Clear previous content
    this.#parentElement.insertAdjacentHTML("afterbegin", info);
  }

  renderError(message = this.#errMessage) {
    let info = `<div class="message">
    <div>
      <svg>
        <use href="${icons}#icon-smile"></use>
      </svg>
    </div>
    <p>
      ${message}
    </p> </div>`;
    this.#parentElement.innerHTML = "";
    this.#parentElement.insertAdjacentHTML("afterbegin", info);
  }

  addHandleChooseBookmark(handler) {
    this.#parentElement.addEventListener("click", (e) => {
      const foodBtn = e.target.closest(".preview__link");
      if (!foodBtn) return;
      handler(foodBtn.href.split("#")[1]);
    });
  }
}

export default new BookmarkView();
