"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = "") {
  let info = `
      <article class="country ${className} ">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} millions people</p>
          <p class="country__row"><span>🗣️</span>${
            data.languages[Object.keys(data.languages)[0]]
          }</p>
          <p class="country__row"><span>💰</span>${Object.keys(
            data.currencies
          )}</p>
        </div>
      </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", info);
};

const getJSON = function (url, errorMsg = `Something went wrong`) {
  return fetch(url).then((res) => {
    if (!res.ok) throw new Error(`${errorMsg} (${res.status})`);
    return res.json();
  });
};

///////////////////////////////////////
const getCountryData = function (country) {
  /// XML HTTP REQUEST
  //   const request = new XMLHttpRequest();
  //   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);

  //   request.send();
  //   request.addEventListener("load", function (e) {
  //     //   console.log(this.responseText);
  //     const [data] = JSON.parse(this.responseText);
  //     renderCountry(data);
  //   });

  /// FETCH
  const request = fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((res) => res.json())
    .then((res) => renderCountry(res[0]));
};

const getCountryAndNeighbor = function (country) {
  const request = getJSON(
    `https://restcountries.com/v3.1/name/${country}`,
    "Country not found"
  )
    .then((res) => {
      renderCountry(res[0]);
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${res[0].borders}`,
        "Neighbor not found"
      );
    })
    .then((res) => renderCountry(res[0], "neighbour"))
    .catch((err) => renderError(`Something went wrong 💥 ${err}`))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", function () {
  getCountryAndNeighbor("australia");
});
