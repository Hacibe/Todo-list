import { addTask } from "./componentes.js/addTask.js";
import { displayTask } from "./componentes.js/readTasks.js";

const btn = document.querySelector("[data-form-btn]");

btn.addEventListener("click", addTask);

displayTask()


