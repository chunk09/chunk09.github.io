const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

const TODOS_KEY = "todos";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;

  const button = document.createElement("button");
  const span = document.createElement("span");

  if (span instanceof HTMLSpanElement) {
    span.innerText = newTodo.text;
    span.className = "todo_move";
  }

  if (button instanceof HTMLButtonElement) {
    button.innerText = "❌";
    button.style.background = "transparent";
    button.style.border = "none";
    button.style.left = "140%";
    button.addEventListener("click", deleteToDo);
    button.className = "todo_move"
  }

  li.appendChild(button);
  li.appendChild(span);

  if (toDoList instanceof HTMLElement) {
    toDoList.appendChild(li);
  }
}

function handleToDoSubmit(event) {
  event.preventDefault();

  if (toDoInput instanceof HTMLInputElement) {
    const newTodo = toDoInput.value; // 값을 비우기 전에 변수를 저장함

    toDoInput.value = "";

    const newTodoObj = {
      text: newTodo,
      id: Date.now(),
    };

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
  }
}

if (toDoForm instanceof HTMLElement) {
  toDoForm.addEventListener("submit", handleToDoSubmit);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
