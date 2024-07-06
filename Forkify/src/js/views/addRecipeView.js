import icons from "url:../../img/icons.svg"; // Ensure this import is correct

class AddRecipeView {
  #parentElement = document.querySelector(".upload");
  #window = document.querySelector(".add-recipe-window");
  #overlay = document.querySelector(".overlay");
  #openFormBtn = document.querySelector(".nav__btn--add-recipe");
  #closeFormBtn = document.querySelector(".btn--close-modal");
  #errMessage = "Cannot upload the new recipe";
  #successMessage = `Congrats!\nUploaded recipe succesfully`;
  #formField;
  constructor() {
    this.#formField = this.#window.innerHTML;
    this.#openFormBtn.addEventListener("click", this._handleToggle.bind(this));
    this.#closeFormBtn.addEventListener("click", this._handleToggle.bind(this));
  }
  _handleToggle() {
    this.#overlay.classList.toggle("hidden");
    this.#window.classList.toggle("hidden");
  }
  _reset(handle) {
    this.#parentElement = document.querySelector(".upload");
    this.#parentElement.addEventListener("submit", (e) =>
      this._helper(e, handle)
    );
  }
  _helper = async (e, handle) => {
    try {
      e.preventDefault();
      const dataArr = [...new FormData(this.#parentElement)];
      const data = Object.fromEntries(dataArr);
      this.renderSpinner();
      await handle(data);
      this.renderSuccess();
      setTimeout(() => {
        this._handleToggle();
      }, 1000);
      setTimeout(() => {
        this.#window.innerHTML = this.#formField;
        this.#closeFormBtn = document.querySelector(".btn--close-modal");
        this.#closeFormBtn.addEventListener(
          "click",
          this._handleToggle.bind(this)
        );
      }, 1500);
    } catch (e) {
      this.renderError(e.message);
      window.history.pushState(null, "", `/`);

      setTimeout(() => {
        this._handleToggle();
      }, 1000);
      setTimeout(() => {
        this.#window.innerHTML = this.#formField;
        this.#closeFormBtn = document.querySelector(".btn--close-modal");
        this.#closeFormBtn.addEventListener(
          "click",
          this._handleToggle.bind(this)
        );
      }, 1500);
    }
    setTimeout(() => this._reset(handle), 2000);
  };
  addHandlerUpload(handle) {
    this.#parentElement.addEventListener("submit", (e) =>
      this._helper(e, handle)
    );
  }

  renderError(message = this.#errMessage) {
    let info = `<div class="error">
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
  renderSpinner() {
    let info = `<div class="spinner">
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
  </div>`;
    this.#parentElement.innerHTML = "";
    this.#parentElement.insertAdjacentHTML("afterbegin", info);
  }

  renderSuccess(message = this.#successMessage) {
    let info = ` <div class="error">
        <div class='message'>
        <svg>
            <use href="${icons}#icon-smile"></use>
        </svg>
        <p>${message}</p>
        </div>
       
    </div>`;
    this.#parentElement.innerHTML = "";
    this.#parentElement.insertAdjacentHTML("afterbegin", info);
  }
}

export default new AddRecipeView();
