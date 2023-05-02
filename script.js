const mainContain = document.querySelector("#container-1");
const mainContain2 = document.querySelector("#container-2");
const addCardBtn = document.getElementById("add-card-btn");
const cardsContainer = document.querySelector(".cards-container");
const popupContainer = document.getElementById("popup-container");
const popup = document.querySelector(".popup");
const cancelBtn = document.getElementById("cancel");
const addCardBtnPopup = document.getElementById("add-card");
const noitem = document.querySelector(".no-item");
const heading = document.querySelector("#head");
const newText = document.querySelector("#new-text");
const head2 = document.querySelector("#head-2");

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

  // if cardName is not empty then condition is gtrue
  if (cardName !== "") {
    // create object
    const card = {
      id: new Date().getTime().toString(),
      name: cardName,
      subItems: [], // create value as a form of array
    };

    cards.push(card); // push card object in cards array

    // clear the input fields and close the popup
    document.getElementById("card-name").value = "";

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
      <h3 id="card-heading" onclick="changelayout()">${card.name}</h3> 
      <hr />      

      <ul class="sub-items"></ul>
      
      <button class="edit-btn"><svg xmlns="http://www.w3.org/2000/svg" class="editing" width="1.4em" height="1.4em" viewBox="0 0 16 16"><path fill="currentColor" d="M16 4s0-1-1-2s-1.9-1-1.9-1L12 2.1V0H0v16h12V8l4-4zm-9.7 7.4l-.6-.6l.3-1.1l1.5 1.5l-1.2.2zm.9-1.9l-.6-.6l5.2-5.2c.2.1.4.3.6.5zm6.9-7l-.9 1c-.2-.2-.4-.3-.6-.5l.9-.9c.1.1.3.2.6.4zM11 15H1V1h10v2.1L5.1 9L4 13.1L8.1 12L11 9v6z"></path></svg></button>
      <button class="delete-btn"><svg xmlns="http://www.w3.org/2000/svg" class="deleting" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V7H4V4h4.5l1-1h4l1 1H19v3h-1v12M6 7v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7H6m12-1V5h-4l-1-1h-3L9 5H5v1h13M8 9h1v10H8V9m6 0h1v10h-1V9Z"></path></svg></button>
      <button class="add-sub-item-btn"><svg xmlns="http://www.w3.org/2000/svg" class="adding" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6h-2Z"></path></svg></button>
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
        <span id="line">${subItem.name}</span>
        <div class="btn-left"><button class="edit-btn sub-btn-1"><svg xmlns="http://www.w3.org/2000/svg" class="editing" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M16 4s0-1-1-2s-1.9-1-1.9-1L12 2.1V0H0v16h12V8l4-4zm-9.7 7.4l-.6-.6l.3-1.1l1.5 1.5l-1.2.2zm.9-1.9l-.6-.6l5.2-5.2c.2.1.4.3.6.5zm6.9-7l-.9 1c-.2-.2-.4-.3-.6-.5l.9-.9c.1.1.3.2.6.4zM11 15H1V1h10v2.1L5.1 9L4 13.1L8.1 12L11 9v6z"></path></svg></button>
        <button class="delete-btn sub-btn-2"><svg xmlns="http://www.w3.org/2000/svg" class="deleting" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V7H4V4h4.5l1-1h4l1 1H19v3h-1v12M6 7v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7H6m12-1V5h-4l-1-1h-3L9 5H5v1h13M8 9h1v10H8V9m6 0h1v10h-1V9Z"></path></svg></button>
        <button class="done sub-btn"><svg xmlns="http://www.w3.org/2000/svg" class="dones" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z"></path></svg></button>
      </div>`;

      // add event listeners for edit and delete buttons for sub-items
      const subItemEditBtn = subItemElement.querySelector(".edit-btn");
      subItemEditBtn.addEventListener("click", () => {
        editSubItem(index, subItem);
      });

      const subItemDeleteBtn = subItemElement.querySelector(".delete-btn");
      subItemDeleteBtn.addEventListener("click", () => {
        deleteSubItem(index, subItem);
      });
      const done = subItemElement.querySelector(".done");
      const dones = subItemElement.querySelector(".dones");
      const subBtn1 = subItemElement.querySelector(".sub-btn-1");
      const subBtn2 = subItemElement.querySelector(".sub-btn-2");
      const line = subItemElement.querySelector("#line");
      //-=====  Script for Done Button ======--
      done.addEventListener("click", () => {
        dones.style.boeder = "none";
        dones.style.backgroundColor = "green";
        subBtn1.style.display = "none";
        subBtn2.style.display = "none";
        line.style.textDecoration = "line-through";
        done.style.marginTop = "2px";
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

  if (cardName !== null) {
    card.name = cardName;
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
//  click on <h3>
function changelayout() {
  // Get the clicked card element
  const cardElement = event.target.parentElement;

  // Check if the card element has a class 'expanded'
  if (cardElement.classList.contains("expanded")) {
    // If it has, remove the class to collapse the card
    cardElement.classList.remove("expanded");
  } else {
    // If it doesn't have, add the class to expand the card
    cardElement.classList.add("expanded");
  }
}
function back() {
  mainContain2.style.display = "none";
  mainContain.style.display = "block";
  const cards = document.querySelectorAll(".card");
  cards.forEach((allcards) => {
    allcards.style.display = "block";
  });
}
