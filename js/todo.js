const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

let toDos = [];
let deleteTarget = null;

function savedToDos() {
    savedTodo = localStorage.getItem(TODOS_KEY);
    parsedToDos = JSON.parse(savedTodo);
    if (parsedToDos === null) return;

    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
    // for (let i = 0; i < parsedToDos.length; i = i + 1) {
    //     toDos.push(parsedToDos[i]);
    // }
}

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleToDoSubmit(e) {
    e.preventDefault();
    const newTodo = {
        id: Date.now(),
        text: toDoInput.value,
    };
    toDoInput.value = "";
    toDos.push(newTodo);
    paintTodo(newTodo);
    saveToDos();
}

function deleteTodo(e) {
    e.preventDefault();
    console.dir(e);

    deleteTarget = e.target.parentElement;
    const content = deleteTarget.innerText;
    const id = deleteTarget.id;
    console.dir(toDos);
    deleteTarget.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(deleteTarget.id));
    // toDos = toDos.filter(deleteFilter);
    console.log(toDos);

    saveToDos();
}

function paintTodo(newTodo) {
    const liTag = document.createElement("li");
    const spanTag = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);

    liTag.id = newTodo.id;
    liTag.appendChild(spanTag);
    liTag.appendChild(button);

    spanTag.innerText = newTodo.text;
    toDoList.appendChild(liTag);
}

savedToDos();
toDoForm.addEventListener("submit", handleToDoSubmit);
