import { API_URL, APIKEY, RES_PER_PAGE } from "./config";
import { getJSON, sendJSON } from "./helpers";
export const state = {
  recipe: {},
  search: {
    query: "",
    results: [],
    resultsPerPage: RES_PER_PAGE,
    page: 1,
  },
  bookmarks: [],
};

const createRecipeObject = function (data) {
  let { recipe } = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    k: 1,
    ...(recipe.key && { key: recipe.key }),
  };
};

export const loadRecipe = async function (id) {
  // renderSpinner(recipeContainer);
  try {
    const data = await getJSON(`${API_URL}/${id}?key=${APIKEY}`);
    state.recipe = createRecipeObject(data);
  } catch (err) {
    throw err;
  }
};

export const updateServings = function (direction) {
  if (state.recipe.servings * state.recipe.k + direction <= 0) return;
  let currentServings = state.recipe.servings * state.recipe.k + direction;
  state.recipe.k = currentServings / +state.recipe.servings;
};

// showRecipe();
export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}?search=${query}&key=${APIKEY}`);
    state.search.results = data.data.recipes;
  } catch (err) {
    throw err;
  }
};

export const getSearchResultPage = function (page = 1) {
  return state.search.results.slice(
    (page - 1) * state.search.resultsPerPage,
    page * state.search.resultsPerPage
  );
};

export const addBookmark = function (recipe) {
  if (state.bookmarks.some((b) => b.id === recipe.id)) {
    state.bookmarks = state.bookmarks.filter((b) => b.id !== recipe.id);
  } else {
    state.bookmarks.push(recipe);
  }
  localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
};

export const uploadRecipe = async function (newRecipe) {
  const recipe = {
    title: newRecipe.title,
    cooking_time: newRecipe.cookingTime,
    publisher: newRecipe.publisher,
    source_url: newRecipe.sourceUrl,
    image_url: newRecipe.image,
    servings: newRecipe.servings,
    ingredients: [],
  };
  for (let [k, v] of Object.entries(newRecipe)) {
    if (k.includes("ingredient") && v !== "") {
      if (v.split(",").length !== 3) {
        throw new Error("The ingredients in the wrong format");
      }
      const [quantity, unit, description] = v.split(",");
      recipe.ingredients.push({ quantity, unit, description });
    }
  }
  const data = await sendJSON(`${API_URL}/?key=${APIKEY}`, recipe);
  state.recipe = createRecipeObject(data);

  addBookmark(state.recipe);
  return state.recipe.id;
};
