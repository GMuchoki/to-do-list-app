const toDoTasks = document.getElementById('toDoList');
const addButton = document.querySelector('button');
const inputDisplay = document.getElementById('display');


//Load saved tasks from localStorage on page load
window.addEventListener('load', function(){
    const savedTasks = localStorage.getItem('tasks');
    const taskList = JSON.parse(savedTasks) || [];

    taskList.forEach(function (task) {
        const loadItem = document.createElement('li');
        loadItem.textContent = task;
        toDoTasks.appendChild(loadItem);
    });


});


//Add task to the DOM on button click
addButton.addEventListener('click', function () {
    
    //Get the existing array from localStorage (or use an empty one if nothing is there yet).
    const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
   


    const newItem = document.createElement('li');

    newItem.textContent = inputDisplay.value;

    toDoTasks.appendChild(newItem);

    existingTasks.push(inputDisplay.value); // 👈 Add to the array


    localStorage.setItem('tasks', JSON.stringify(existingTasks));   // 👈 Save the updated array


});





//Toggle “completed” state when task is clicked





//Delete a specific task on delete button click





//Save the updated task list to localStorage





