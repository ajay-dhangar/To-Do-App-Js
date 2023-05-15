const root = document.getElementById('root');

root.innerHTML = `<div class="main">
<div class="heading-1"><h1 class="task-main-name"><span class="task-name">Tasks</span><span class="list-name">List</span></h1><button id="add-card-btn" class="btn add-card-btn">
<span class="add-btn"
onclick="addTask()" ><img src="./img/add.jpg" alt="add" width="25" height="25"
/></span>
<span class="add-text-name">Add Task</span>
</button></div>

<!-- Other page view for back and add befor clicked on card heading -->

<div class="heading-2"><h1 class="task-main-name"><span class="back-name" onclick="back()">Back</span></h1><button id="add-card-btn" class="btn add-card-btn">
<span class="add-btn"
  ><img src="./img/add.jpg" alt="add" width="25" height="25"
/></span>
<span class="add-text-name">Add Task</span>
</button></div>

<!-- No Item message. If you clicked on add task then remove it.-->

<div class="no-item"><p class="no-item-content">No items in todo list</p></div>

<!-- Card container -->

<div class="cards-container" id="cards-container"></div>

<!-- Pop-Up for add new task  -->

<div class="popup-container" id="popup-container" id="add-new-list-border">
  <div class="popup">
    <h2>Add New Task</h2>
    <input type="text" id="card-name" placeholder="Enter Task Name..." />
    <!-- <textarea
      id="card-description"
      placeholder="Enter Card Description..."
    ></textarea> -->
    <button id="add-card" onclick="newAddCard()">Add</button>
    <button id="cancel" onclick="closeAddCardPopup()">Close</button>
  </div>
</div>

<div class="popup-container-2" id="popup-container-2" id="add-new-list-border-2">
  <div class="popup-2">
    <h2>Add New List</h2>
    <input type="text" id="card-name-2" placeholder="Enter List Name..." />
    <!-- <textarea
      id="card-description-2"
      placeholder="Enter List Description..."
    ></textarea> -->
    <button id="add-item" onclick="newAddList()">Add</button>
    <button id="cancel-2" onclick="closeAddListPopup()">Close</button>
  </div>
</div>

</div>
`;

