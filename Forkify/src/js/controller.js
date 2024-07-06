import "core-js/stable";
import "regenerator-runtime/runtime";
import * as model from "./model";
import recipeView from "./views/recipeView";
import searchView from "./views/searchView";
import resultsView from "./views/resultsView";
import paginationView from "./views/paginationView";
import bookmarkView from "./views/bookmarkView";
import addRecipeView from "./views/addRecipeView";
function handleNextPagination() {
  resultsView.render(model.getSearchResultPage(++model.state.search.page));
}
function handlePreviousPagination() {
  resultsView.render(model.getSearchResultPage(--model.state.search.page));
}

function increaseServing() {
  model.updateServings(1);
  recipeView.render(model.state.recipe, model.state.bookmarks);
}

function decreaseServing() {
  model.updateServings(-1);
  recipeView.render(model.state.recipe, model.state.bookmarks);
}

async function searchResultController() {
  try {
    resultsView.renderSpinner();
    const query = searchView.getQuery();
    if (!query) {
      throw new Error("Please enter keywords");
    }
    await model.loadSearchResults(query);
    model.state.search.page = 1;
    resultsView.render(model.getSearchResultPage());
    paginationView.setPage(
      Math.ceil(
        model.state.search.results.length / model.state.search.resultsPerPage
      )
    );

    paginationView.render();
  } catch (e) {
    resultsView.renderError(e.message);
  }
}
async function recipeController(id) {
  if (!id) return;
  try {
    recipeView.renderSpinner();
    await model.loadRecipe(id);
    recipeView.render(model.state.recipe, model.state.bookmarks);
  } catch (e) {
    recipeView.renderError();
  }
}

const controlAddBookmark = function () {
  model.addBookmark(model.state.recipe);
  recipeView.render(model.state.recipe, model.state.bookmarks);
  bookmarkView.render(model.state.bookmarks);
};

const handleChooseBookmark = function (id) {
  resultsView.render(model.getSearchResultPage(), id);
};

const bookmarkRender = function (id) {
  bookmarkView.render(model.state.bookmarks, id);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    const id = await model.uploadRecipe(newRecipe);
    bookmarkView.render(model.state.bookmarks, id);
    recipeView.render(model.state.recipe, model.state.bookmarks);
    window.history.pushState(null, "", `#${model.state.recipe.id}`);
  } catch (e) {
    throw e;
  }
};

function init() {
  recipeView.addHandlerRender(() =>
    recipeController(window.location.hash.slice(1))
  );
  recipeView.addUpdateServings(increaseServing, decreaseServing);
  recipeView.addHandleBookmarks(controlAddBookmark);

  searchView.addHandlerSearch(searchResultController);
  paginationView.addHandlePagination(
    handleNextPagination,
    handlePreviousPagination
  );

  bookmarkView.addHandleChooseBookmark(handleChooseBookmark);
  resultsView.addBookmarkRender(bookmarkRender);

  addRecipeView.addHandlerUpload(controlAddRecipe);
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

  if (bookmarks) {
    bookmarks.forEach((bookmark) => model.addBookmark(bookmark));
    bookmarkView.render(model.state.bookmarks);
  }
}

init();
