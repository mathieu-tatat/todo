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


function partagerLien() {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({
        url: url
      })
        .then(() => console.log('Lien partagé avec succès.'))
        .catch((error) => console.error('Erreur lors du partage du lien:', error));
    } else {
        console.log('La fonction de partage n\'est pas prise en charge par ce navigateur.');
        prompt('Copiez le lien:', url);
    }
  }
  