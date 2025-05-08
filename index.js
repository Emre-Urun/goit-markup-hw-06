const modalOpenButton = document.getElementById("modal-open-button");
const modal = document.getElementById("backdrop");
const modalCloseButton = document.getElementById("modal-close-button");
modalOpenButton.addEventListener("click", function () {
  modal.classList.add("is-open");
});
modalCloseButton.addEventListener("click", function () {
  modal.classList.remove("is-open");
});
