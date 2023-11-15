/*
Create a task
Delete All Tasks
Mark a task as completed
Show all tasks
*/
const todoList = [];

function showAllTasks() {
  if (todoList.length === 0) {
    document.getElementById("tasks").innerText = "There Are No Tasks Available";
  } else {
    document.getElementById("tasks").innerHTML += `<div>
        <p>${todoList[todoList.length - 1].task}</p>      
        <p id="completion-${
          todoList.length - 1
        }" onclick="markTaskAsCompleted(${todoList.length - 1})">Completed: ${
      todoList[todoList.length - 1].isCompleted
    }</p>
        <button onclick="markTaskAsCompleted(${
          todoList.length - 1
        })">Mark as Complete</button>
      </div>`;
  }
}

function addTask() {
  if (document.getElementById("newTask").value != "") {
    if (todoList.length === 0) document.getElementById("tasks").innerText = "";
    const newTask = document.getElementById("newTask").value;
    todoList.push({ task: newTask, isCompleted: false });
    document.getElementById("newTask").value = "";
    showAllTasks();
  }
}

document.getElementById("add-task").addEventListener("click", function() {
  addTask(); 
});

function deleteAllTasks() {
  todoList.length = 0;
  showAllTasks();
}

document.getElementById("delete-all-tasks").addEventListener("click", function () {
  deleteAllTasks();
});

function markTaskAsCompleted(index) {
  todoList[index] = {
    ...todoList[index],
    isCompleted: true,
  };
  const updateValueElement = document.getElementById(`completion-${index}`);
  updateValueElement.innerHTML = `Completed: ${todoList[index].isCompleted}`;
}