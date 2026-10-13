import { Task, TaskManager } from "./taskManager.js";
import { fetchTasks } from "./api.js";

const loadTasksBtn = document.getElementById("loadTasksBtn");
const taskList = document.getElementById("taskList");
const statusMessage = document.getElementById("statusMessage");
const taskManager = new TaskManager();

function setStatus(message, isError = false) {
  statusMessage.textContent = message;
  statusMessage.classList.toggle("error", isError);
}

function renderTasks() {
  taskList.replaceChildren();

  if (taskManager.tasks.length === 0) {
    const emptyState = document.createElement("p");
    emptyState.className = "empty-state";
    emptyState.textContent = "No tasks here. Everything is clear.";
    taskList.appendChild(emptyState);
    return;
  }

  taskManager.tasks.forEach((task) => {
    const taskElement = document.createElement("div");
    taskElement.className = task.completed ? "task completed" : "task";

    const title = document.createElement("span");
    title.className = "task-title";
    title.textContent = task.title;

    const actions = document.createElement("div");
    actions.className = "task-actions";

    const toggleButton = document.createElement("button");
    toggleButton.type = "button";
    toggleButton.className = "action-button";
    toggleButton.textContent = task.completed ? "Mark active" : "Toggle";
    toggleButton.setAttribute(
      "aria-label",
      `${task.completed ? "Mark active" : "Toggle completion"}: ${task.title}`
    );
    toggleButton.addEventListener("click", () => {
      taskManager.toggleTask(task.id);
      renderTasks();
    });

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "action-button delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("aria-label", `Delete: ${task.title}`);
    deleteButton.addEventListener("click", () => {
      taskManager.removeTask(task.id);
      renderTasks();
    });

    actions.append(toggleButton, deleteButton);
    taskElement.append(title, actions);
    taskList.appendChild(taskElement);
  });
}

async function loadTasks() {
  loadTasksBtn.disabled = true;
  setStatus("Loading tasks...");

  try {
    const rawTasks = await fetchTasks();

    // JSON round-trip is required for this assignment's JSON practice.
    const serializedTasks = JSON.stringify(rawTasks);
    const parsedTasks = JSON.parse(serializedTasks);
    const taskInstances = parsedTasks.map(
      (item) => new Task(item.id, item.title, item.completed)
    );

    taskManager.setTasks(taskInstances);
    renderTasks();
    setStatus("");
  } catch (error) {
    console.error("Could not load tasks:", error);
    setStatus("Could not load tasks. Please try again.", true);
  } finally {
    loadTasksBtn.disabled = false;
  }
}

loadTasksBtn.addEventListener("click", loadTasks);
