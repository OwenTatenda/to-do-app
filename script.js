const todoInput = document.querySelector(".todo-input");
const submitButton = document.querySelector(".submit-button");
const todoList = document.querySelector(".todo-list");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("todo");

  const itemList = document.createElement("li");
  itemList.innerHTML = todoInput.value;
  itemList.classList.add("item-list");
  itemDiv.appendChild(itemList);

  //Check Button
  const checkButton = document.createElement("button");
  checkButton.innerHTML = "<i class='fas fa-check'></i>";
  checkButton.classList.add("check-btn");
  itemDiv.appendChild(checkButton);

  //Delete Button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "<i class='fas fa-trash'></i>";
  deleteButton.classList.add("delete-btn");
  itemDiv.appendChild(deleteButton);

  //ADD TO THE TODO LIST
  todoList.appendChild(itemDiv);

  //CHECK
  checkButton.addEventListener("click", function (e) {
    const item1 = e.target;
    if (item1.classList[0] === "check-btn") {
      const todo1 = item1.parentElement;
      todo1.classList.add("completed");
    }
  });

  //DELETE
  deleteButton.addEventListener("click", function (e) {
    const item = e.target;
    if (item.classList[0] === "delete-btn") {
      const todo = item.parentElement;
      todo.remove();
    }
  });
});
