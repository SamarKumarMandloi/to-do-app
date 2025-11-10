const saveBtn = document.getElementById("saveBtn");
const taskList = document.getElementById("taskList");

saveBtn.addEventListener("click", () => {
  const title = document.getElementById("title").value.trim();
  const desc = document.getElementById("description").value.trim();

  if (title === "" || desc === "") {
    alert("Please fill out both fields.");
    return;
  }

  const taskItem = document.createElement("div");
  taskItem.className = "task-item";

  const titleEl = document.createElement("span");
  titleEl.textContent = title;

  const descEl = document.createElement("span");
  descEl.textContent = desc;

  const delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.className = "delete-btn";

  delBtn.addEventListener("click", () => {
    taskItem.remove();
  });

  taskItem.appendChild(titleEl);
  taskItem.appendChild(descEl);
  taskItem.appendChild(delBtn);

  taskList.appendChild(taskItem);

  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
});
