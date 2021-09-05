const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODO_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function handleDeleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "🔺"
    button.addEventListener("click", handleDeleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text : newToDo,
        id : Date.now(),
    }

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODO_KEY);

if(savedTodos !== null){
    const parsedToDos = JSON.parse(savedTodos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}