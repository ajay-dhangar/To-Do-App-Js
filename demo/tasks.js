// tasks.js - Module for handling tasks
export const tasks = [];

export function addTask(task) {
  tasks.push(task);
  // Update local storage
  updateLocalStorage();
}

export function deleteTask(taskId) {
  // Delete task by ID
  tasks.splice(taskId, 1);
  // Update local storage
  updateLocalStorage();
}

export function completeTask(taskId) {
  // Mark task as completed by ID
  tasks[taskId].completed = !tasks[taskId].completed;
  // Update local storage
  updateLocalStorage();
}

export function getTasks() {
  // Retrieve tasks from local storage
  return tasks;
}

export function updateLocalStorage() {
  // Save tasks to local storage
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function loadTasksFromLocalStorage() {
  // Load tasks from local storage
  const storedTasks = JSON.parse(localStorage.getItem("tasks"));
  if (storedTasks) {
    tasks.push(...storedTasks);
  }
}
