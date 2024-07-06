class PaginationView {
  #parentElement = document.querySelector(".pagination");
  #maxPage;
  #currentPage;

  setPage(page) {
    this.#currentPage = 1;
    this.#maxPage = page;
  }

  _renderNextPagination() {
    if (this.#currentPage < this.#maxPage) {
      return ` <button class="btn--inline pagination__btn--next">
        <span>Page ${this.#currentPage + 1}</span>
        <svg class="search__icon">
          <use href="src/img/icons.svg#icon-arrow-right"></use>
        </svg>
      </button>`;
    }
    return "";
  }

  _renderPreviousPagination() {
    if (this.#currentPage > 1) {
      return `<button class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="src/img/icons.svg#icon-arrow-left"></use>
      </svg>
      <span>Page ${this.#currentPage - 1}</span>
    </button>`;
    }
    return "";
  }

  render() {
    this.#parentElement.innerHTML = "";
    if (this.#maxPage === 1) return;
    let info = `${this._renderPreviousPagination()} ${this._renderNextPagination()}`;
    this.#parentElement.insertAdjacentHTML("beforeend", info);
  }

  addHandlePagination(handleNext, handlePrev) {
    this.#parentElement.addEventListener("click", (e) => {
      const btn = e.target.closest(".btn--inline");
      if (!btn) return;
      if (btn.classList.contains("pagination__btn--next")) {
        if (this.#currentPage < this.#maxPage) {
          handleNext();
          this.#currentPage++;
          this.render();
        }
      }
      if (btn.classList.contains("pagination__btn--prev")) {
        if (this.#currentPage >= 2) {
          handlePrev();
          if (this.#currentPage >= 2) this.#currentPage--;
          this.render();
        }
      }
    });
  }
}

export default new PaginationView();
