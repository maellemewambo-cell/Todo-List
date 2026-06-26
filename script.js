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

Document.addEventListener('DOMContentLoaded', function (){
    addButton.addEventListener("click", addTask);
    todoInput.addEventListener('keydown',function(event){
        if(event.key === 'Enter'){
            event.preventDefault();
            addTask();
        }
    })
})

function addTask() {

}