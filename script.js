const addCardBtn = document.getElementById("add-card-btn");
const cardsContainer = document.querySelector(".cards-container");
const popupContainer = document.getElementById("popup-container");
const popup = document.querySelector(".popup");
const cancelBtn = document.getElementById("cancel");
const addCardBtnPopup = document.getElementById("add-card");
const noitem = document.querySelector(".no-item");

// to store the card data
let cards = []; //  an array (empty)

// display the cards on load
displayCards(); // function calling

// open popup when add button is clicked
addCardBtn.addEventListener("click", () => {
  popupContainer.style.display = "block";
  noitem.style.display = "none";
});

// close popup when cancel button is clicked
cancelBtn.addEventListener("click", () => {
  popupContainer.style.display = "none";
});

// add new card when add button in popup is clicked
addCardBtnPopup.addEventListener("click", () => {
  const cardName = document.getElementById("card-name").value;
  const cardDescription = document.getElementById("card-description").value;

  // if cardName and cardDescription is not empty then condition is gtrue
  if (cardName !== "" && cardDescription !== "") {
    // create object
    const card = {
      name: cardName,
      description: cardDescription,
      subItems: [], // create value as a form of array
    };

    cards.push(card); // push card object in cards array

    // clear the input fields and close the popup
    document.getElementById("card-name").value = "";
    document.getElementById("card-description").value = "";
    popupContainer.style.display = "none";

    // display the updated cards
    displayCards();
  }
});

// display the cards
function displayCards() {
  // clear the existing cards
  cardsContainer.innerHTML = "";

  cards.forEach((card, index) => {
    // create a new card element
    const cardElement = document.createElement("div"); // create a div tag
    cardElement.classList.add("card"); // class name is card
    cardElement.innerHTML = `
      <h3>${card.name}</h3> 
      <hr />
      <p>${card.description}</p>

      <ul class="sub-items"></ul>
      
      <button class="edit-btn">&#x270E;</button>
      <button class="delete-btn">&#x2715;</button>
      <button class="add-sub-item-btn">&#43;</button>
    `;

    // add event listeners for edit, delete and add sub-item buttons
    const editBtn = cardElement.querySelector(".edit-btn");
    editBtn.addEventListener("click", () => {
      editCard(index);
    });

    const deleteBtn = cardElement.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
      deleteCard(index);
    });

    const addSubItemBtn = cardElement.querySelector(".add-sub-item-btn");
    addSubItemBtn.addEventListener("click", () => {
      addSubItem(index);
    });

    // add sub-items to the card
    const subItemsContainer = cardElement.querySelector(".sub-items");
    card.subItems.forEach((subItem) => {
      const subItemElement = document.createElement("li");
      subItemElement.innerHTML = `
        <span>${subItem.name}</span>
        <button class="edit-btn sub-btn">&#x270E;</button>
        <button class="delete-btn sub-btn">&#x2715;</button>
      `;

      // add event listeners for edit and delete buttons for sub-items
      const subItemEditBtn = subItemElement.querySelector(".edit-btn");
      subItemEditBtn.addEventListener("click", () => {
        editSubItem(index, subItem);
      });

      const subItemDeleteBtn = subItemElement.querySelector(".delete-btn");
      subItemDeleteBtn.addEventListener("click", () => {
        deleteSubItem(index, subItem);
      });

      subItemsContainer.appendChild(subItemElement);
    });

    cardsContainer.appendChild(cardElement);
  });
}

// edit a card
function editCard(index) {
  const card = cards[index];
  const cardName = prompt("Enter new item name:", card.name);
  const cardDescription = prompt(
    "Enter new item description:",
    card.description
  );

  if (cardName !== null && cardDescription !== null) {
    card.name = cardName;
    card.description = cardDescription;
    // display the updated cards
    displayCards();
  }
}

// delete a card
function deleteCard(index) {
  if (confirm("Are you sure you want to delete this item?")) {
    cards.splice(index, 1);
    // display the updated cards
    displayCards();
  }
}

// add a sub-item to a card
function addSubItem(index) {
  const card = cards[index];
  const subItemName = prompt("Enter sub-item name:");

  if (subItemName !== null) {
    const subItem = {
      name: subItemName,
    };
    card.subItems.push(subItem);

    // display the updated cards
    displayCards();
  }
}

// edit a sub-item
function editSubItem(cardIndex, subItem) {
  const subItemName = prompt("Enter new sub-item name:", subItem.name);

  if (subItemName !== null) {
    subItem.name = subItemName;
    // display the updated cards
    displayCards();
  }
}

// delete a sub-item
function deleteSubItem(cardIndex, subItem) {
  if (confirm("Are you sure you want to delete this sub-item?")) {
    const card = cards[cardIndex];
    const subItemIndex = card.subItems.indexOf(subItem);
    card.subItems.splice(subItemIndex, 1);

    // display the updated cards
    displayCards();
  }
}
