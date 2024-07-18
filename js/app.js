// Создаем контейнер для TODO
const todoContainer = document.createElement("div");
todoContainer.id = "todo-container";

// Создаем кнопку для создания TODO
const createTodoBtn = document.createElement("button");
createTodoBtn.id = "create-todo-btn";
createTodoBtn.textContent = "Create TODO";

// Создаем контейнер для отображения TODO
const todoListContainer = document.createElement("div");
todoListContainer.id = "todo-list-container";

// Добавляем контейнер для TODO к document.body
document.body.appendChild(todoContainer);

// Добавляем кнопку для создания TODO к document.body
document.body.appendChild(createTodoBtn);

// Добавляем контейнер для отображения TODO к document.body
document.body.appendChild(todoListContainer);

const todoTitleInput = document.createElement("input");
todoTitleInput.type = "text";
todoTitleInput.id = "todo-title";

const todoTitleLabel = document.createElement("div");
todoTitleLabel.textContent = "TODO Title";
todoTitleLabel.id = "todo-label";

const todoTextInput = document.createElement("input");
todoTextInput.type = "text";
todoTextInput.id = "todo-text";

const todoTextLabel = document.createElement("div");
todoTextLabel.textContent = "TODO Text";
todoTextLabel.id = "todo-label";
todoTextLabel.style.marginTop = "10px";

todoContainer.appendChild(todoTitleLabel);
todoContainer.appendChild(todoTitleInput);
todoContainer.appendChild(todoTextLabel);
todoContainer.appendChild(todoTextInput);

createTodoBtn.disabled = true;

// Проверяем, заполнены ли поля ввода
todoTitleInput.addEventListener("input", () => {
  createTodoBtn.disabled = !todoTitleInput.value || !todoTextInput.value;
});
todoTextInput.addEventListener("input", () => {
  createTodoBtn.disabled = !todoTitleInput.value || !todoTextInput.value;
});

createTodoBtn.addEventListener("click", () => {
  // Создаем новые элементы для отображения TODO
  const newDiv = document.createElement("div");
  newDiv.className = "div-container";
  const newH = document.createElement("h4");
  newH.textContent = todoTitleInput.value;
  const newP = document.createElement("p");
  newP.textContent = todoTextInput.value;
  const newDeleteBtn = document.createElement("button");
  newDeleteBtn.className = "delete-btn";
  newDeleteBtn.textContent = "Delete";
  newDeleteBtn.onclick = function () {
    newDiv.remove();
  };
  newDiv.appendChild(newH);
  newDiv.appendChild(newP);
  newDiv.appendChild(newDeleteBtn);

  // Добавляем новый TODO в контейнер
  todoListContainer.appendChild(newDiv);

  // Очищаем поля ввода
  todoTitleInput.value = "";
  todoTextInput.value = "";
  createTodoBtn.disabled = true;
});
