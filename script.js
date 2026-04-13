const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

button.addEventListener("click", addTask);

function addTask() {
    const taskText = input.value.trim();

    if (taskText === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    span.addEventListener("click", function () {
        span.classList.toggle("completed");
    });

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";

    removeBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(removeBtn);

    list.appendChild(li);

    input.value = "";
}