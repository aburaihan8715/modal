// variables
const modalOpenBtn = document.querySelector(".modal-open-btn");
const modalCloseBtn = document.querySelector(".modal-close-btn");
const backDrop = document.querySelector(".back-drop");
const modal = document.querySelector(".modal");

function close() {
  modal.classList.remove("open");
  backDrop.classList.remove("open");
}

modalOpenBtn.addEventListener("click", () => {
  modal.classList.add("open");
  modal.classList.add("zoom");
  backDrop.classList.add("open");
});

modalCloseBtn.addEventListener("click", () => {
  close();
});

backDrop.addEventListener("click", () => {
  close();
});
