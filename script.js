// Retrieve Todo from local storage or initialize an empty array 

let todo = JSON.parse(localStorage.getItem('todo')) || [];
// The variable todo is an array that will hold the list of tasks. It retrieves the existing tasks from local storage if they exist; otherwise, it initializes an empty array.Donc genre si tu etais deja entree dans le browser et a add les task ca initializes the todo array with those tasks. If there are no tasks saved in local storage, it starts with an empty list.
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const todoCount = document.getElementById('todoCount');
const addButton = document.querySelector('.btn');
const deleteButton = document.getElementById('deleteButton');

// Initialize
