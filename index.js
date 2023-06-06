const editButtons = document.querySelectorAll('.edit-button');

editButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const taskText = button.previousElementSibling.textContent;
    const newTaskText = prompt('Modifier la tâche :', taskText);

    if (newTaskText !== null && newTaskText !== '') {
      button.previousElementSibling.textContent = newTaskText;
    }
  });
});
