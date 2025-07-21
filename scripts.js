const orderedList = document.getElementById('toDoList');
const addNewTaskBtn = document.querySelector('button');
const inputDisplay = document.getElementById('display');



//Load saved tasks from localStorage on page load
window.addEventListener('load', function(){
    const savedTasks = localStorage.getItem('tasks');
    const taskList = JSON.parse(savedTasks) || [];                        //Get the existing array from localStorage (or use an empty one if nothing is there yet).

    taskList.forEach(function (task) {
        const loadItem = document.createElement('li');

        const taskText = document.createElement('span'); // ✅ create span
        taskText.textContent = task;
        //taskText.textContent = inputDisplay.value;
        taskText.style.color = "green";

        const doneBtn = document.createElement('button');
        doneBtn.textContent = 'Mark as Done';

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.style.display = "none"; // hide

        loadItem.appendChild(taskText);
        loadItem.appendChild(doneBtn);
        loadItem.appendChild(deleteBtn);
        orderedList.appendChild(loadItem);


        //Toggle “completed” state when task is clicked
        doneBtn.addEventListener('click', () => {
            deleteBtn.style.display = 'inline'; // show
            taskText.style.color = "red";
            taskText.style.textDecoration = "line-through";
            doneBtn.style.display = "none"; // hide
            
        });

        
        //Delete a specific task on delete button click
        deleteBtn.addEventListener('click', () => {
            orderedList.removeChild(loadItem); // removes the <li>
        });




    });

});


//Add task to the DOM on button click
addNewTaskBtn.addEventListener('click', () => {

    const newListItem = document.createElement('li');

    const taskText = document.createElement('span'); // ✅ create span
    taskText.textContent = inputDisplay.value;
    taskText.style.color = "green";

    const doneBtn = document.createElement('button');
    doneBtn.textContent = 'Mark as Done';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.display = "none"; // hide

    newListItem.appendChild(taskText);
    newListItem.appendChild(doneBtn);
    newListItem.appendChild(deleteBtn);
    orderedList.appendChild(newListItem);


    //Get the existing array from localStorage (or use an empty one if nothing is there yet).
    const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];            
    existingTasks.push(inputDisplay.value); // 👈 Add to the array

    //Save the updated task list to localStorage
    localStorage.setItem('tasks', JSON.stringify(existingTasks));   // 👈 Save the updated array


    //Toggle “completed” state when task is clicked
    doneBtn.addEventListener('click', () => {
        deleteBtn.style.display = 'inline'; // show
        taskText.style.color = "red";
        taskText.style.textDecoration = "line-through";
        doneBtn.style.display = "none"; // hide
        
    });

    
    //Delete a specific task on delete button click
    deleteBtn.addEventListener('click', () => {
        orderedList.removeChild(newListItem); // removes the <li>
    });


});



