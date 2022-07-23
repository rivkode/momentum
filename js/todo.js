const toDoForm = document.getElementById("todo-form");
const toDOInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li  = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //선택한 id에 대해 db에 있는 id와 비교하여 새로운 toDos를 만들어 줌
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDOInput.value;
    toDOInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj); //paint하기전에 toDo에 있는 list의 내용들을 가져오고 싶음
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; // 둘의 형식이 list이기때문에 가능함, 새로고침할때 savedToDos를 localStorage로부터 불러옴으로써 이전의 기능들을 저장함
    parsedToDos.forEach(paintToDo);
}

