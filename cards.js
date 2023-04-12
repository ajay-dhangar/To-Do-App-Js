// to store the card data
export const addCardBtn = document.getElementById("add-card-btn");
export const mainContain = document.querySelector(".main");
export const main2Contain = document.querySelector(".main-2");
export const cardsContainer = document.querySelector(".cards-container");
export const popupContainer = document.getElementById("popup-container");
export const popup = document.querySelector(".popup");
export const cancelBtn = document.getElementById("cancel");
export const addCardBtnPopup = document.getElementById("add-card");
export const noitem = document.querySelector(".no-item");
export const heading = document.querySelector("#head");
export const newText = document.querySelector("#new-text");
export const head2 = document.querySelector("#head-2");
export let cards = []; //  an array (empty)
// open popup when add button is clicked
addCardBtn.addEventListener("click", () => {
  popupContainer.style.display = "block";
  noitem.style.display = "none";
});
// close popup when cancel button is clicked
cancelBtn.addEventListener("click", () => {
  popupContainer.style.display = "none";
});
