let data = [];
let cardId;

function showAddCardPop() {
  const popup1 = document.getElementById("add-new-list-border");
  popup1.style.display = "block";
}

// close Add card popup
function closeAddCardPopup() {
  const popup1 = document.getElementById("add-new-list-border");
  popup1.style.display = "none";
}

function handleAddCard() {
  const cardText = document.getElementById("input-of-add-list").value;
  const card = {
    id: new Date().getTime().toString(),
    cardTitle: cardText,
    content: [],
  };
  if (cardText) {
    data.push(card);
    renderCards();
  } else {
    alert("Add Your Card Name!!!");
  }
  document.getElementById("input-of-add-list").value = "";
  closeAddCardPopup();

  const heading = document.querySelector("#h1");
  heading.style.display = "block";

  const backButton = document.querySelector("#back");
  backButton.style.display = "none";
}

function renderContent() {
  for (let i = 0; i < data.length; i++) {
    const ulElement = document.getElementById(`content_list_${data[i].id}`);
    let child = "";
    for (let j = 0; j < data[i].content.length; j++) {
      const content = data[i].content[j];
      child += `<li class =" content ${
        content.done ? "checked" : ""
      }" id="content_${content.id}" onclick="doneTask(${content.id},${
        data[i].id
      })">${content.contentText}</li>`;
    }
    ulElement.innerHTML = child;
  }
}

function renderCards() {
  const cardcontainer = document.getElementById("card-container");
  let child = "";
  for (let i = 0; i < data.length; i++) {
    console.log("data[i]:", data[i]);
    child += `<div id="card_${data[i].id}"class="card">
      <p class="content-head" value="${data[i].cardTitle}" onclick="displayCard(${data[i].id},this.getAttribute('value'))">${data[i].cardTitle}</p>
      <hr>
      <ul id="content_list_${data[i].id}">
      </ul>
      <div class="item-content-buttons">
      <button onclick="deleteCard(${data[i].id})" class="delete-item-content"></button>
      <button onclick="showAddContentToCardPopup(${data[i].id})" class="add-item-content"></button>
      </div></div>`;
  }
  cardcontainer.innerHTML = child;
  renderContent();
}

function deleteCard(id) {
  const cardcontainer = document.getElementById("card-container");
  const cardId = `card_${id}`;
  const card = document.getElementById(cardId);
  //remove child from parent node
  card.parentNode.removeChild(card);
  data = data.filter((item) => item.id != id);
}

function showAddContentToCardPopup(id) {
  const popup2 = document.getElementById("add-new-item-border");
  popup2.style.display = "block";
  cardId = id;
}

function removeAddContentToCardPopup() {
  const popup2 = document.getElementById("add-new-item-border");
  popup2.style.display = "none";
}

function addContentToCard() {
  const contentListId = `content_list_${cardId}`;
  const Ul = document.getElementById(contentListId);
  const contentText = document.getElementById("input-of-add-item").value;
  if (!contentText) {
    alert("Please add task name");
  } else {
    document.getElementById("input-of-add-item").value = "";
    const liNode = document.createElement("li");
    const listId = new Date().getTime().toString();
    liNode.innerHTML = contentText;
    liNode.className = "content";
    liNode.id = `content_${listId}`;
    liNode.onclick = function () {
      doneTask(listId, cardId);
    };
    Ul.appendChild(liNode);
    removeAddContentToCardPopup();

    liNode.addEventListener("click", function () {
      if (liNode.style.textDecoration === "line-through") {
        liNode.style.textDecoration = "none";
      } else {
        liNode.style.textDecoration = "line-through";
      }
    });

    for (let i = 0; i < data.length; i++) {
      if (data[i].id == cardId) {
        const content = {
          id: listId,
          contentText: contentText,
          done: false,
        };
        data[i].content.push(content);
      }
    }
  }
}

function doneTask(listId, cardId) {
  const contentId = `content_${listId}`;
  const liElement = document.getElementById(contentId);
  liElement.classList.toggle("checked");

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].content.length; j++) {
      const content = data[i].content[j];
      if (content.id == listId) {
        data[i].content[j].done = !data[i].content[j].done;
      }
    }
  }
}

function displayCard(id, value) {
  const cardTitle = document.getElementById("card-title");
  cardTitle.innerHTML = value;

  const cards = document.querySelectorAll(".card");
  const cardShow = document.getElementById(`card_${id}`);
  cards.forEach((allcards) => {
    allcards.style.display = "none";
  });
  cardShow.style.display = "block";

  const heading = document.querySelector("#h1");
  heading.style.display = "none";

  const backButton = document.querySelector("#back");
  backButton.style.display = "block";
}

function MainPage() {
  const cards = document.querySelectorAll(".card");
  const cardcontainer = document.querySelector("#card-container");
  cards.forEach((allcards) => {
    allcards.style.display = "block";
  });
  const heading = document.querySelector("#h1");
  heading.style.display = "block";

  const backButton = document.querySelector("#back");
  backButton.style.display = "none";

  const cardTitle = document.getElementById("card-title");
  cardTitle.style.display = "none";
}
