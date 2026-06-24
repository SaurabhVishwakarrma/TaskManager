// Initializing  tasks array from LocalStorage

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let draggedIndex = null; // Track the index of the item being dragged




displayTask();

// Function to add a task
function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  // Push to the global tasks array (Fixes your local scope bug)
  tasks.push({
    text: taskText,
    completed: false,
  });

  saveTask();
  input.value = "";
  displayTask();
}

// Function to display tasks and attach drag/touch event listeners
function displayTask() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, i) => {
    let li = document.createElement("li");
    li.className = "task-item";
    li.setAttribute("data-index", i);

    // Enable HTML5 drag for desktop and make it touch-safe
    li.draggable = true;

    li.innerHTML = `
      <input 
        type="checkbox"
        ${task.completed ? "checked" : ""} 
        onchange="toggleTask(${i})" 
      >
      <span class="task-text" style="${task.completed ? "text-decoration: line-through; color: gray;" : ""}">
        ${task.text}
      </span>
      <button onClick="deleteTask(${i})" class="delete-btn">
        Delete task 
      </button>
    `;

    // --- Desktop Drag and Drop Events ---
    li.addEventListener("dragstart", (e) => {
      draggedIndex = i;
      e.dataTransfer.effectAllowed = "move";
      li.style.opacity = "0.5";
    });

    li.addEventListener("dragend", () => {
      li.style.opacity = "1";
      draggedIndex = null;
    });

    li.addEventListener("dragover", (e) => {
      e.preventDefault(); // Necessary to allow dropping
    });

    li.addEventListener("drop", (e) => {
      e.preventDefault();
      handleDrop(i);
    });

    // --- Mobile Touch Events (Cross-browser fallback) ---
    li.addEventListener(
      "touchstart",
      (e) => {
        draggedIndex = i;
        li.style.background = "#e0e0e0";
      },
      { passive: true },
    );

    li.addEventListener("touchend", (e) => {
      li.style.background = "white";

      // Find which element the finger was lifted over
      let touch = e.changedTouches[0];
      let targetEl = document.elementFromPoint(touch.clientX, touch.clientY);
      let targetLi = targetEl ? targetEl.closest(".task-item") : null;

      if (targetLi) {
        let targetIndex = parseInt(targetLi.getAttribute("data-index"));
        handleDrop(targetIndex);
      }
      draggedIndex = null;
    });

    list.appendChild(li);
  });
}

// Core logic to reorder tasks array on drop
function handleDrop(targetIndex) {
  if (draggedIndex === null || draggedIndex === targetIndex) return;

  // Remove dragged item from its old position
  let movedTask = tasks.splice(draggedIndex, 1)[0];

  // Insert it into the new position
  tasks.splice(targetIndex, 0, movedTask);

  saveTask();
  displayTask();
}

// Delete a single task
function deleteTask(index) {
  if (confirm("Delete this task?")) {
    tasks.splice(index, 1);
    saveTask();
    displayTask();
  }
}

// Clear all tasks
function clearTask() {
  if (confirm("Delete all tasks?")) {
    tasks = [];
    saveTask();
    displayTask();
  }
}

// Save to LocalStorage
function saveTask() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Toggle completion state
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTask();
  displayTask();
}
