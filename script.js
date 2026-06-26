// Retrieve Todo from local storage or initialize an empty array 

let todo = JSON.parse(localStorage.getItem('todo')) || [];
// The variable todo is an array that will hold the list of tasks. It retrieves the existing tasks from local storage if they exist; otherwise, it initializes an empty array.Donc genre si tu etais deja entree dans le browser et a add les task ca initializes the todo array with those tasks. If there are no tasks saved in local storage, it starts with an empty list.
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const todoCount = document.getElementById('todoCount');
const addButton = document.querySelector('.btn');
const deleteButton = document.getElementById('deleteButton');

// Initialize
// DomContentLoaded cest un event qui se déclenche lorsque le HTML est complètement chargé et analysé, sans attendre que les feuilles de style, images et sous-documents aient fini de charger. Donc cest pour ca que on met addEventListener sur DOMContentLoaded pour que le code à l'intérieur ne s'exécute qu'après que le document soit complètement chargé.

// event.preventDefault() is used to prevent the default action of an event from occurring. In this case, it prevents the default behavior of the Enter key, which is to submit a form or trigger a button click. By calling event.preventDefault(), we can stop that default behavior and handle the Enter key press in our own way, such as adding a task to the list without submitting a form.

document.addEventListener('DOMContentLoaded', function (){
    addButton.addEventListener("click", addTask);
    todoInput.addEventListener('keydown',function(event){
        if(event.key === 'Enter'){
            event.preventDefault();
            addTask();
        }
    });
    deleteButton.addEventListener('click', deleteAllTasks);
    displayTasks();
});

// The addTask function is responsible for adding a new task to the todo list. It retrieves the value from the input field, trims any leading or trailing whitespace, and checks if the input is not empty. If the input is valid, it creates a new task object with the text and a disabled property set to false, pushes it to the todo array, saves the updated array to local storage, clears the input field, and calls displayTasks() to update the displayed list of tasks.

function addTask() {
    const newTask = todoInput.value.trim();
    if (newTask !== " ") {
        todo.push({
            text: newTask,
            disabled: false
        });
        saveToLocalStorage();
        todoInput.value = "";
        displayTasks();
}
}

function editTask(index) {
    
}

function deleteAllTasks() {
    todo = [];
    saveToLocalStorage();
    displayTasks();
}

function displayTasks() {
    todoList.innerHTML = "";
    todo.forEach((item,index) => {
        const p = document.createElement("p");
        p.innerHTML = `
        <div class = "todo-container">
            <input type = "checkbox" class = "todo-checkbox" 
            id = "input-${index}" ${item.disabled ? "checked" : ""}>
            <p id="todo-${index}" class = "${item.disabled ? "disabled" : ""}"
            onclick="editTask(${index})">${item.text}
            </p>
        </div>
        `;
        p.querySelector(".todo-checkbox").addEventListener("change", () => {
            toggleTask(index);
        });
        todoList.appendChild(p);
    });
}

function toggleTask(index) {
    todo[index].disabled = !todo[index].disabled;
    saveToLocalStorage();
    displayTasks();
}

//JSON.stringify() is a method that converts a JavaScript object or value to a JSON string. In this case, it is used to convert the todo array into a JSON string so that it can be stored in local storage. The localStorage.setItem() method is then used to save the JSON string under the key 'todo' in the browser's local storage.
function saveToLocalStorage() {
    localStorage.setItem("todo", JSON.stringify(todo));
}