const inputElement = document.getElementById('display');
const addTaskBtn = document.getElementById('add-button');
const listElement = document.getElementById('toDoList');

// Load saved tasks from localStorage on page load
window.addEventListener('load', () => {
    const savedTasks = localStorage.getItem('tasks');
    const taskList = JSON.parse(savedTasks) || [];

    taskList.forEach((task) => {
        const newItem = document.createElement('li');
        newItem.textContent = task.text;

        if (task.done) {
            newItem.style.textDecoration = "line-through";
        }

        const doneBtn = document.createElement('button');
        doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

        newItem.appendChild(doneBtn);
        newItem.appendChild(deleteBtn);
        listElement.appendChild(newItem);

        // ✅ toggle done/undone
        doneBtn.addEventListener('click', () => {
            const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

            tasks.forEach((t) => {
                if (t.text === newItem.firstChild.textContent) {
                    if (t.done) {
                        newItem.style.textDecoration = "none";
                        t.done = false;
                    } else {
                        newItem.style.textDecoration = "line-through";
                        t.done = true;
                    }
                }
            });

            localStorage.setItem("tasks", JSON.stringify(tasks));
        });

        // ❌ delete task
        deleteBtn.addEventListener('click', () => {
            listElement.removeChild(newItem);

            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks = tasks.filter(t => t.text !== newItem.firstChild.textContent);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        });
    });
});

// Add new task
addTaskBtn.addEventListener('click', () => {
    const inputText = inputElement.value;

    if (inputText !== "") {
        const newItem = document.createElement('li');
        newItem.textContent = inputText;

        const doneBtn = document.createElement('button');
        doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

        newItem.appendChild(doneBtn);
        newItem.appendChild(deleteBtn);
        listElement.appendChild(newItem);

        const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        existingTasks.push({
            text: inputText,
            done: false
        });
        localStorage.setItem('tasks', JSON.stringify(existingTasks));

        inputElement.value = "";

        // ✅ toggle done/undone
        doneBtn.addEventListener('click', () => {
            const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

            tasks.forEach((t) => {
                if (t.text === newItem.firstChild.textContent) {
                    if (t.done) {
                        newItem.style.textDecoration = "none";
                        t.done = false;
                    } else {
                        newItem.style.textDecoration = "line-through";
                        t.done = true;
                    }
                }
            });

            localStorage.setItem("tasks", JSON.stringify(tasks));
        });

        // ❌ delete task
        deleteBtn.addEventListener('click', () => {
            listElement.removeChild(newItem);

            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks = tasks.filter(t => t.text !== newItem.firstChild.textContent);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        });
    } else {
        alert("Please type something before adding!");
    }
});

// Add task with Enter key
inputElement.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTaskBtn.click();
    }
});
