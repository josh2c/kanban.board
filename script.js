// Function to allow dropping of tasks
function allowDrop(event) {
    event.preventDefault();
}

// Function to handle drag start
function drag(event) {
    event.dataTransfer.setData("taskId", event.target.id);
}

// Function to handle drop event
function drop(event) {
    event.preventDefault();

    // Get the task ID
    let taskId = event.dataTransfer.getData("taskId");
    let taskElement = document.getElementById(taskId);

    // Append the dragged task to the target column
    event.target.appendChild(taskElement);
}
