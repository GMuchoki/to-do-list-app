const inputElement = document.getElementById('display');
const addTaskBtn = document.getElementById('add-button');
const listElement = document.getElementById('toDoList');
const completedTasks = document.getElementById('completedTasks');

//Load saved tasks from localStorage on page load
window.addEventListener('load', () => {

    const savedTasks = localStorage.getItem('tasks');

    //Get the existing array from localStorage (or use an empty one if nothing is there yet).
    const taskList = JSON.parse(savedTasks) || [];

    taskList.forEach((task) => {
        const newItem = document.createElement('li');
        newItem.textContent = task;

        const doneBtn = document.createElement('button');
        doneBtn.textContent = "✅";

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "❌";

        newItem.appendChild(doneBtn);
        newItem.appendChild(deleteBtn);
        listElement.appendChild(newItem);

        doneBtn.addEventListener('click', () => {
            newItem.style.textDecoration = "line-through";
        });

        deleteBtn.addEventListener('click', () => {
            listElement.removeChild(newItem);

        });
    });

});


addTaskBtn.addEventListener('click', () => {

    const inputText = inputElement.value;

    if (inputText !== "") {
        const newItem = document.createElement('li');
        newItem.textContent = inputText;

        const doneBtn = document.createElement('button');
        doneBtn.textContent = "✅";

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "❌";

        newItem.appendChild(doneBtn);
        newItem.appendChild(deleteBtn);
        listElement.appendChild(newItem);

        //Get the existing array from localStorage (or use an empty one if nothing is there yet).
        const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];

        // 👈 Add to the array
        existingTasks.push(inputText);

        //Save the updated task list to localStorage
        localStorage.setItem('tasks', JSON.stringify(existingTasks));   // 👈 Save the updated array

        inputElement.value = "";

        doneBtn.addEventListener('click', () => {
            newItem.style.textDecoration = "line-through";
        });

        deleteBtn.addEventListener('click', () => {
            listElement.removeChild(newItem);
        });

    } else {
        alert("Please type something before adding!");
    }
});


inputElement.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {
        addTaskBtn.click();
    }
});
