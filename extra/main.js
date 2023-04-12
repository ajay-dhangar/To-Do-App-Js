// Task data structure
class Task {
  constructor(name, priority, completed = false) {
    this.name = name;
    this.priority = priority;
    this.completed = completed;
  }
}

// DOM elements
const taskInput = document.getElementById("task-input");
const prioritySelect = document.getElementById("priority-select");
const addTaskBtn = document.getElementById("add-task-btn");
const filterSelect = document.getElementById("filter-select");
const taskList = document.getElementById("task-list");

// Array to store tasks
let tasks = [];

// Add event listener for adding a new task
addTaskBtn.addEventListener("click", addTask);

// Add event listener for filter selection
filterSelect.addEventListener("change", updateTaskList);

// Add event listener for task list (for handling delete, complete, and edit actions)
taskList.addEventListener("click", handleTaskActions);

// Function to add a new task
function addTask() {
  const taskName = taskInput.value.trim();
  const taskPriority = prioritySelect.value;
  if (taskName !== "") {
    const newTask = new Task(taskName, taskPriority);
    tasks.push(newTask);
    updateTaskList();
    taskInput.value = "";
  }
}

// Function to update task list
function updateTaskList() {
  const filter = filterSelect.value;
  const filteredTasks = getFilteredTasks(filter);
  renderTaskList(filteredTasks);
}

// Function to render task list
function renderTaskList(filteredTasks) {
  taskList.innerHTML = "";
  filteredTasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.className = "task-item";
    listItem.innerHTML = `
      <div class="task">
        <input type="checkbox" class="task-checkbox" data-task-id="${index}" data-action="complete" ${
      task.completed ? "checked" : ""
    }>
        <span class="task-name ${task.completed ? "completed" : ""}">${
      task.name
    }</span>
        <span class="task-priority">Priority: ${task.priority}</span>
        <button class="task-edit-btn" data-task-id="${index}" data-action="edit">Edit</button>
        <button class="task-delete-btn" data-task-id="${index}" data-action="delete">Delete</button>
      </div>
    `;
    taskList.appendChild(listItem);
  });
}

// Function to handle task actions (delete, complete, and edit)
function handleTaskActions(event) {
  if (event.target.dataset.action === "delete") {
    const taskId = parseInt(event.target.dataset.taskId);
    tasks.splice(taskId, 1);
    updateTaskList();
  } else if (event.target.dataset.action === "complete") {
    const taskId = parseInt(event.target.dataset.taskId);
    tasks[taskId].completed = !tasks[taskId].completed;
    updateTaskList();
  } else if (event.target.dataset.action === "edit") {
    const taskId = parseInt(event.target.dataset.taskId);
    const newTaskName = prompt("Enter new task name:", tasks[taskId].name);
    if (newTaskName !== null && newTaskName.trim() !== "") {
      tasks[taskId].name = newTaskName.trim();
      updateTaskList();
    }
  }
}

// Function to get filtered tasks based on filter selection
function getFilteredTasks(filter) {
  switch (filter) {
    case "all":
      return tasks;
    case "completed":
      return tasks.filter((task) => task.completed);
    case "active":
      return tasks.filter((task) => !task.completed);
    default:
      return tasks;
  }
}
