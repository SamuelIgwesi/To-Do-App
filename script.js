const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const list_el = document.querySelector("#tasks");

// New Task Input
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = input.value;
  if (!task) {
    alert("Please fill the task form");
    return;
  }

  // ADDED TASKS
  const task_el = document.createElement("div");
  task_el.classList.add("task");

  const task_content_el = document.createElement("div");
  task_content_el.classList.add("content");
  task_content_el.innerText = task.toUpperCase();

  task_el.appendChild(task_content_el);

  const task_input_el = document.createElement("input");
  task_input_el.classList.add("text");
  task_input_el.type = "text";
  task_input_el.value = "task";

  // ACTION BUTTONS
  const task_actions_el = document.createElement("div");
  task_actions_el.classList.add("actions");

  const task_edit_el = document.createElement("button");
  task_edit_el.classList.add("edit");
  task_edit_el.innerHTML = "Edit";

  const task_delete_el = document.createElement("button");
  task_delete_el.classList.add("delete");
  task_delete_el.innerHTML = "Delete";

  task_actions_el.appendChild(task_edit_el);
  task_actions_el.appendChild(task_delete_el);

  task_el.appendChild(task_actions_el);

  list_el.appendChild(task_el);

  task_edit_el.addEventListener("click", () => {
    if (task_edit_el.innerText == "EDIT") {
      task_content_el.contentEditable = true;
      task_content_el.style.color = "yellow";
      task_content_el.focus();
      task_edit_el.innerText = "SAVE";
    } else {
      task_content_el.contentEditable = false;
      task_edit_el.innerText = "EDIT";
    }
  });

  task_delete_el.addEventListener("click", () => {
    list_el.removeChild(task_el);
    // if (task_delete_el.innerText == "DELETE") {
    // }
  });
});
