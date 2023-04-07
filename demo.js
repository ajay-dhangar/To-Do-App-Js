// Add event listener to the "Add" button
document.getElementById("add-btn").addEventListener("click", function () {
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Create a new task card
  const taskCard = document.createElement("div");
  taskCard.className = "task-card";
  taskCard.innerHTML = `
    <h3 class="task-title">${taskInput.value}</h3>
    <p>Task description goes here</p>
  `;

  // Add event listener to the task card heading
  taskCard.querySelector(".task-title").addEventListener("click", function () {
    // Update the view to show only the selected card
    document.getElementById("task-list").style.display = "none";
    taskCard.style.margin = "0 auto";
    taskCard.style.width = "50%";
    taskCard.style.textAlign = "center";

    // Change the heading and add a back link
    document.querySelector("h1").textContent = "Back";
    document.querySelector("h1").addEventListener("click", function () {
      // Update the view to show all cards again
      document.getElementById("task-list").style.display = "grid";
      taskCard.style.margin = "";
      taskCard.style.width = "";
      taskCard.style.textAlign = "";

      // Change the heading and remove the back link
      document.querySelector("h1").textContent = "To-Do App";
      document
        .querySelector("h1")
        .removeEventListener("click", arguments.callee);
    });
  });

  // Append the task card to the task list
  taskList.appendChild(taskCard);

  // Clear the task input
  taskInput.value = "";
});
