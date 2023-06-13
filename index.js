
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
    editButton.classList.add('edit-button');
    editButton.appendChild(editImage);
    const shareButton = document.createElement('button');
    const shareImage = document.createElement('img');
    shareImage.src = 'assets/partager.png';
    shareImage.alt = 'Partager';
    shareImage.width = '20';
    shareButton.classList.add('share-button');
    shareButton.appendChild(shareImage);
    const deleteButton = document.createElement('button');
    const deleteImage = document.createElement('img');
    deleteImage.src = 'assets/supprimer.png';
    deleteImage.alt = 'Supprimer';
    deleteImage.width = '20';
    deleteButton.classList.add('delete-button');
    deleteButton.appendChild(deleteImage);


    newTask.appendChild(taskSpan);
    newTask.appendChild(editButton);
    newTask.appendChild(shareButton);
    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);

    editButton.addEventListener('click', () => {
      const taskText = taskSpan.textContent;
      const newTaskText = prompt('Modifier la tâche :', taskText);
      if (newTaskText !== null && newTaskText !== '') {
        taskSpan.textContent = newTaskText;
      }
    });

    i++;

    if (navigator.share) {
      shareButton.addEventListener('click', async () => {
        try {
          await navigator.share({
            url: window.location.href,
            title: 'ToDoList',
            text: 'ToDoList',
          });
          console.log('Le lien a été partagé avec succès !');
        } catch (error) {
          console.error('Erreur lors du partage du lien :', error);
        }
      });
    } else {
      console.log("L'API de partage n'est pas prise en charge par ce navigateur.");
    }
  }
}

// const input = document.querySelector('.todo-input input');
// const addTodoButton = document.querySelector('.add-todo');

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
//     const taskList = document.getElementById('task-list');
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
//     const shareButton = document.createElement('button');
//     const shareImage = document.createElement('img');
//     shareImage.src = 'assets/partager.png';
//     shareImage.alt = 'Partager';
//     shareImage.width = '20';
//     shareButton.classList.add('share-button' + i);
//     shareButton.appendChild(shareImage);


//     newTask.appendChild(taskSpan);
//     newTask.appendChild(editButton);
//     newTask.appendChild(deleteButton);
//     newTask.appendChild(shareButton);
//     taskList.appendChild(newTask);
    
//     let edit = document.querySelector('.edit-button'+i);
//       edit.addEventListener('click', e => {
//         const taskText = edit.previousElementSibling.textContent;
//         const newTaskText = prompt('Modifier la tâche :', taskText);
//         if (newTaskText !== null && newTaskText !== '') {
//           edit.previousElementSibling.textContent = newTaskText;
//         }
//     })
//     i++;

// if (navigator.share) {
//   const shareButton = document.getElementById('share-button');

//   shareButton.addEventListener('click', async () => {
//     try {
//       await navigator.share({
//         url: 'file:///C:/Users/Simplon/Documents/ToDoList/todo/index.html',
//         title: 'ToDoList' ,
//         text: 'ToDoList',
//       });
//       console.log('Le lien a été partagé avec succès !');
//     } catch (error) {
//       console.error('Erreur lors du partage du lien :', error);
//     }
//   });
// } else {
//   console.log("L'API de partage n'est pas prise en charge par ce navigateur.");
// }
//   }   
// }

// function partagerLien() {
//   const url = window.location.href;
//   if (navigator.share) {
//     navigator.share({
//       url: url
//     })
//       .then(() => console.log('Lien partagé avec succès.'))
//       .catch((error) => console.error('Erreur lors du partage du lien:', error));
//   } else {
//       console.log('La fonction de partage n\'est pas prise en charge par ce navigateur.');
//       prompt('Copiez le lien:', url);
//   }
// }


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
