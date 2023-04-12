// main.js - Main entry point for the app
import {
  tasks,
  addTask,
  deleteTask,
  completeTask,
  getTasks,
  loadTasksFromLocalStorage,
} from "./tasks.js";
import {
  saveToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
} from "./localStorage.js";

// DOM elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const filterSelect = document.getElementById("filter-select");

// Event listeners
addTaskBtn.addEventListener("click", handleAddTask);
taskList.addEventListener("click", handleTaskActions);
filterSelect.addEventListener("change", handleFilterTasks);

// Load tasks from local storage
loadTasksFromLocalStorage();
// Render tasks
renderTasks();

// Functions

function handleAddTask() {
  const taskName = taskInput.value.trim();
  if (taskName === "") {
    // Input validation: Check if task name is empty
    alert("Please enter a valid task name");
    return;
  }

  const task = {
    name: taskName,
    completed: false,
  };

  addTask(task);
  renderTasks();

  // Clear input field
  taskInput.value = "";
}

function handleTaskActions(event) {
  const target = event.target;
  const taskId = target.dataset.taskId;
  const action = target.dataset.action;

  if (action === "delete") {
    deleteTask(taskId);
    renderTasks();
  } else if (action === "complete") {
    completeTask(taskId);
    renderTasks();
  }
}

function handleFilterTasks() {
  renderTasks();
}

function renderTasks() {
  const filter = filterSelect.value;

  // Clear task list
  taskList.innerHTML = "";

  // Filter and render tasks
  const filteredTasks = getFilteredTasks(filter);
  filteredTasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.className = "task-item";
    listItem.innerHTML = `
      <div class="task">
<input type="checkbox" class="task-checkbox" data-task-id="${index}" data-action="complete" ${
      task.completed ? "checked" : ""
    }>
<span class="task-name ${task.completed ? "completed" : ""}">${task.name}</span>
<button class="task-delete-btn" data-task-id="${index}" data-action="delete">Delete</button>
</div>
`;
    taskList.appendChild(listItem);
  });
}

function getFilteredTasks(filter) {
  // Get tasks based on filter selection
  switch (filter) {
    case "all":
      return getTasks();
    case "completed":
      return getTasks().filter((task) => task.completed);
    case "active":
      return getTasks().filter((task) => !task.completed);
    default:
      return getTasks();
  }
}
