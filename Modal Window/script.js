"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const closeModal = function () {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
};
const openModal = function () {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
};

for (let btnOpen of btnsOpenModal) btnOpen.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
