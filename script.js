// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
  
    if (taskInput.value.trim() === "") {
      alert("Please enter a task!");
      return;
    }
  
    // Create a new list item
    const listItem = document.createElement("li");
  
    // Create text for the task
    const taskText = document.createTextNode(taskInput.value);
  
    // Add a button to delete the task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      taskList.removeChild(listItem);
    };
  
    // Toggle completion on click
    listItem.onclick = function () {
      listItem.classList.toggle("completed");
    };
  
    // Append task text and delete button to list item
    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);
  
    // Append list item to the task list
    taskList.appendChild(listItem);
  
    // Clear the input field
    taskInput.value = "";
  }
  