"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

class Workout {
  date = new Date();
  id = (Date.now() + "").slice(-10);
  clicks = 0;
  constructor(distance, duration, coords) {
    this.distance = distance;
    this.duration = duration;
    this.coords = coords;
  }
  click() {
    this.clicks++;
  }
}

class Running extends Workout {
  type = "running";
  constructor(distance, duration, coords, cadence) {
    super(distance, duration, coords);
    this.cadence = cadence;
    this.pace = this.calcPace();
  }

  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = "cycling";
  constructor(distance, duration, coords, elevationGain) {
    super(distance, duration, coords);
    this.elevationGain = elevationGain;
    this.calcSpeed();
  }
  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

class App {
  #map;
  #mapEvent;
  #workouts;
  constructor() {
    form.addEventListener("submit", this._newWorkout.bind(this));
    inputType.addEventListener("change", this._toggleElevationField);
    this.#workouts = [];
    this._getPosition();
    containerWorkouts.addEventListener(
      "click",
      this._moveToWorkoutPos.bind(this)
    );
  }

  _getPosition() {
    navigator.geolocation.getCurrentPosition(
      this._loadMap.bind(this),
      function () {
        alert("Could not get your position");
      }
    );
  }

  _loadMap(position) {
    const { latitude, longitude } = position.coords;
    const coords = [latitude, longitude];

    this.#map = L.map("map").setView(coords, 9);
    L.tileLayer("https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on("click", this._showForm.bind(this));
    this._getLocalStorage();
  }

  _showForm(e) {
    this.#mapEvent = e;
    form.classList.remove("hidden");
    inputDistance.focus();
  }

  _moveToWorkoutPos(e) {
    const workoutEl = e.target.closest(".workout");
    if (!workoutEl) return;
    const indexWorkout = this.#workouts.findIndex(
      (workout) => workout.id === workoutEl.dataset.id
    );
    this.#map.setView(this.#workouts[indexWorkout].coords, 9, {
      animation: true,
      pan: { duration: 1 },
    });
    this.#workouts[indexWorkout].click();
  }
  _toggleElevationField() {
    inputCadence.parentElement.classList.toggle("form__row--hidden");
    inputElevation.parentElement.classList.toggle("form__row--hidden");
  }

  _hideForm() {
    form.style.display = "none";
    form.classList.add("hidden");
    setTimeout(() => (form.style.display = "grid"), 1000);
  }

  _renderWorkoutList() {
    document
      .querySelectorAll(".workout")
      .forEach((workout) => workout.remove());
    this.#workouts.forEach((workout) => {
      let running = workout.type === "running";
      let info = `<li class="workout workout--${
        running ? "running" : "cycling"
      }" data-id=${workout.id}>
          <h2 class="workout__title">${running ? "Running" : "Cycling"} on ${
        months[new Date(workout.date).getMonth()]
      } ${new Date(workout.date).getDate()} </h2>
          <div class="workout__details">
            <span class="workout__icon">${running ? "🏃‍♂️" : "🚴‍♀️"}</span>
            <span class="workout__value">${workout.distance.toFixed(2)}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration.toFixed(2)}</span>
          <span class="workout__unit">min</span>
          </div>
          <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${
            running ? workout.cadence.toFixed(2) : workout.speed.toFixed(2)
          }</span>
          <span class="workout__unit">${running ? "min/km" : "KM/H"}</span>
          </div>
          <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">${
            running ? workout.pace.toFixed(2) : workout.elevationGain.toFixed(2)
          }</span>
          <span class="workout__unit">${running ? "spm" : "m"}</span>
          </div>
         </li>`;
      form.insertAdjacentHTML("afterend", info);
    });
  }

  _renderWorkoutMarker() {
    this.#workouts.forEach((workout) => {
      L.marker(workout.coords)
        .addTo(this.#map)
        .bindPopup(
          L.popup({
            maxWidth: 250,
            minWidth: 10,
            autoClose: false,
            content: `${
              workout instanceof Running ? "🏃‍♂️ Running" : "🚴‍♀️ Cycling"
            } on ${months[new Date(workout.date).getMonth()]} ${new Date(
              workout.date
            ).getDate()}`,
            closeOnClick: false,
            className: `${
              workout instanceof Running ? "running-popup" : "cycling-popup"
            }`,
          })
        )
        .openPopup();
    });
  }

  _newWorkout(e) {
    e.preventDefault();

    const validInputs = (...inputs) =>
      inputs.every((input) => Number.isFinite(input) && input > 0);
    const { lat, lng } = this.#mapEvent.latlng;
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    if (type === "running") {
      const cadence = +inputCadence.value;
      if (!validInputs(distance, duration, cadence)) {
        return alert("Inputs have to be positive numbers");
      }

      this.#workouts.push(new Running(distance, duration, [lat, lng], cadence));
    } else {
      const elevation = +inputElevation.value;
      if (!validInputs(distance, duration, elevation))
        return alert("Inputs have to be positive numbers");
      this.#workouts.push(
        new Cycling(distance, duration, [lat, lng], elevation)
      );
    }

    this._renderWorkoutMarker();
    this._renderWorkoutList();
    this._setLocalStorage();
    this._hideForm();
    resetForm();
  }
  _setLocalStorage() {
    localStorage.setItem("workouts", JSON.stringify(this.#workouts));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem("workouts"));
    if (!data) return;

    for (let i = 0; i < data.length; i++) {
      if (data[i].type === "running") {
        Object.setPrototypeOf(data[i], Running.prototype);
      } else Object.setPrototypeOf(data[i], Cycling.prototype);
    }

    this.#workouts = data;
    this._renderWorkoutList();
    this._renderWorkoutMarker();
  }

  reset() {
    localStorage.removeItem("workouts");
    location.reload();
  }
}

function resetForm() {
  inputDistance.value = "";
  inputDuration.value = "";
  inputCadence.value = "";
  inputElevation.value = "";
  inputType.value = "running";
}

const app = new App();
document.addEventListener("keydown", (e) => {
  if (e.code === "Escape") app.reset();
});
