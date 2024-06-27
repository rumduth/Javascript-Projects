"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

const allSections = document.querySelectorAll(".section");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const section2 = document.querySelector("#section--2");
const section3 = document.querySelector("#section--3");
btnScrollTo.addEventListener("click", (e) => {
  section1.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".nav__links").addEventListener("click", (e) => {
  e.preventDefault();
  let section = document.querySelector(e.target.getAttribute("href"));
  section && section.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".operations").addEventListener("click", (e) => {
  const tabNumber = e.target.dataset.tab;
  if (!tabNumber) return;
  // console.log(e.target.parentElement.children[0].classList);
  [...e.target.parentElement.children].forEach((tab) =>
    tab.classList.remove("operations__tab--active")
  );
  e.target.classList.add("operations__tab--active");

  document
    .querySelectorAll(`.operations__content`)
    .forEach((el) => el.classList.remove("operations__content--active"));

  document
    .querySelectorAll(`.operations__content`)
    [tabNumber - 1].classList.add("operations__content--active");
});

const nav = document.querySelector(".nav");
const logo = nav.querySelector("#logo");

const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    e.target
      .closest(".nav")
      .querySelectorAll(".nav__link")
      .forEach((el) => {
        if (el !== e.target) el.style.opacity = this;
      });
    logo.style.opacity = this;
  }
};

nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

const obsCallback = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const obsOption = {
  root: null,
  rootMargin: `-${nav.getBoundingClientRect().height}px`,
  threshold: 0,
};

const observer = new IntersectionObserver(obsCallback, obsOption);
observer.observe(document.querySelector("header"));

const obsSectionCallback = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const obsSectionOptions = {
  root: null,
  threshold: 0.15,
};
const sections = document.querySelectorAll(".section");
const sectionObserver = new IntersectionObserver(
  obsSectionCallback,
  obsSectionOptions
);

sections.forEach((sec) => {
  sectionObserver.observe(sec);
  sec.classList.add("section--hidden");
});

const obsImageCallback = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      entry.target.addEventListener("load", (e) => {
        entry.target.classList.remove("lazy-img");
      });
      observer.unobserve(entry.target);
    }
  });
};

const obsImageOptions = {
  root: null,
  threshold: 0,
  rootMargin: "200px",
};
const imgTargets = document.querySelectorAll("img[data-src]");

const imgObserver = new IntersectionObserver(obsImageCallback, obsImageOptions);
imgTargets.forEach((img) => imgObserver.observe(img));

const leftBtn = document.querySelector(".slider__btn--left");
const rightBtn = document.querySelector(".slider__btn--right");
const slides = document.querySelectorAll(".slide");
slides.forEach((slide, i) => {
  slide.style.transform = `translateX(${100 * i}%)`;
});

let currentSlideNumber = 1;
let maxSlideNumber = slides.length;
const slider = document.querySelector(".slider");
const dotsContainer = document.querySelector(".dots");

const createDots = function () {
  slides.forEach((_, i) =>
    dotsContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide=${i + 1}></button>`
    )
  );
  document.querySelector(".dots__dot").classList.add("dots__dot--active");
};
createDots();

const currentTransformCalculating = (slide) => {
  const start = slide.style.transform.indexOf("(") + 1;
  const end = slide.style.transform.indexOf("%");
  return slide.style.transform.slice(start, end);
};

const moveToSlide = (slideNumber) => {
  if (slideNumber === maxSlideNumber + 1) slideNumber = 1;
  else if (slideNumber === 0) slideNumber = maxSlideNumber;
  let numberSlides = slideNumber - currentSlideNumber;
  slides.forEach((slide) => {
    let currentTransform = currentTransformCalculating(slide);
    slide.style.transform = `translateX(${
      currentTransform * 1 - numberSlides * 100
    }%)`;
  });
  currentSlideNumber = slideNumber;
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));
  document
    .querySelectorAll(".dots__dot")
    [currentSlideNumber - 1].classList.add("dots__dot--active");
};

leftBtn.addEventListener("click", () => moveToSlide(currentSlideNumber - 1));
rightBtn.addEventListener("click", () => moveToSlide(currentSlideNumber + 1));

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") moveToSlide(currentSlideNumber + 1);
  else if (e.key === "ArrowLeft") moveToSlide(currentSlideNumber - 1);
});

dotsContainer.addEventListener("click", (e) => {
  if (!e.target.dataset.slide) return;
  moveToSlide(e.target.dataset.slide * 1);
});

// window.addEventListener("beforeunload", (e) => {
//   e.preventDefault();
//   e.returnValue = "";
// });
