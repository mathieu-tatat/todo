const input = document.querySelector('.todo-input input');
const addTodoButton = document.querySelector('.add-todo');

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTodo();
  }
});

addTodoButton.addEventListener('click', addTodo);

let i = 0;
function addTodo() {
  const taskText = input.value.trim();

  if (taskText !== '') {
    const taskList = document.getElementById('task-list');
    const newTask = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    const editButton = document.createElement('button');
    const editImage = document.createElement('img');
    editImage.src = 'assets/bouton-modifier.png';
    editImage.alt = 'Modifier une tâche';
    editImage.width = '20';
    editButton.classList.add('edit-button' + i);
    editButton.appendChild(editImage);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    deleteButton.classList.add('delete-button');
    

    newTask.appendChild(taskSpan);
    newTask.appendChild(editButton);
    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);
    
    let edit = document.querySelector('.edit-button'+i);
      edit.addEventListener('click', e => {
        const taskText = edit.previousElementSibling.textContent;
        const newTaskText = prompt('Modifier la tâche :', taskText);
        if (newTaskText !== null && newTaskText !== '') {
          edit.previousElementSibling.textContent = newTaskText;
        }
    })
    i++;
  }   
}

// const input = document.querySelector('.todo-input input');
// const addTodoButton = document.querySelector('.add-todo');
// const taskList = document.getElementById('task-list');

// input.addEventListener('keydown', (event) => {
//   if (event.key === 'Enter') {
//     addTodo();
//   }
// });

// addTodoButton.addEventListener('click', addTodo);

// let i = 0;

// function addTodo() {
//   const taskText = input.value.trim();

//   if (taskText !== '') {
//     const newTask = document.createElement('li');
//     const taskSpan = document.createElement('span');
//     taskSpan.textContent = taskText;
//     const editButton = document.createElement('button');
//     const editImage = document.createElement('img');
//     editImage.src = 'assets/bouton-modifier.png';
//     editImage.alt = 'Modifier une tâche';
//     editImage.width = '20';
//     editButton.classList.add('edit-button' + i);
//     editButton.appendChild(editImage);
//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = 'Supprimer';
//     deleteButton.classList.add('delete-button');

//     newTask.appendChild(taskSpan);
//     newTask.appendChild(editButton);
//     newTask.appendChild(deleteButton);
//     taskList.appendChild(newTask);

//     let edit = document.querySelector('.edit-button' + i);
//     edit.addEventListener('click', e => {
//       const taskText = edit.previousElementSibling.textContent;
//       const newTaskText = prompt('Modifier la tâche :', taskText);
//       if (newTaskText !== null && newTaskText !== '') {
//         edit.previousElementSibling.textContent = newTaskText;
//       }
//     });

//     i++;
    
//     // Mettre à jour le localStorage
//     LocalStorage();
//   }
// }

// function LocalStorage() {
//   const tasks = taskList.innerHTML;
//   localStorage.setItem('tasks', tasks);
// }

// document.addEventListener('DOMContentLoaded', () => {
//   const storedTasks = localStorage.getItem('tasks');

//   if (storedTasks) {
//     taskList.innerHTML = storedTasks;
//   }
// }); // localStorage.clear();
