
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

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    deleteButton.classList.add('delete-button');

    const checkboxTerminer = document.createElement('input');
    checkboxTerminer.classList.add('checkbox-terminer' +i);
    checkboxTerminer.type = 'checkbox';

    const shareButton = document.createElement('button');
    const shareImage = document.createElement('img');
    shareImage.src = 'assets/partager.png';
    shareImage.alt = 'Partager';
    shareImage.width = '20';
    shareButton.classList.add('share-button'+i);
    shareButton.appendChild(shareImage);
    
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
    newTask.appendChild(checkboxTerminer);
    newTask.appendChild(shareButton);
    taskList.appendChild(newTask);

    const checkTerminer = document.querySelector('.checkbox-terminer' +i);

    checkTerminer.addEventListener('change', function () {
      if (checkTerminer.checked) {
        checkTerminer.parentElement.style.backgroundColor = 'green';
      } else {
        checkTerminer.parentElement.style.backgroundColor = 'transparent';
      }
    });

    editButton.addEventListener('click', () => {
      const taskText = taskSpan.textContent;
      const newTaskText = prompt('Modifier la tâche :', taskText);
      if (newTaskText !== null && newTaskText !== '') {
        taskSpan.textContent = newTaskText;
      }
    });

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

    deleteButton.addEventListener('click', () => {
      newTask.remove();
    });

    i++;
  }
  
  let edit = document.querySelector('.edit-button'+i);
  edit.addEventListener('click', e => {
    const taskText = edit.previousElementSibling.textContent;
    const newTaskText = prompt('Modifier la tâche :', taskText);
    if (newTaskText !== null && newTaskText !== '') {
      edit.previousElementSibling.textContent = newTaskText;
    }
  })
}