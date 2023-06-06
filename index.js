

// Fonction pour trier les tâches par ordre alphabétique
function sortTasks() {
    for (let i = 0; i < toDoList.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < toDoList.length; j++) {
        if (toDoList[j].task < toDoList[minIndex].task) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        // Échange des positions
        [toDoList[i], toDoList[minIndex]] = [toDoList[minIndex], toDoList[i]];
      }
    }
  }

  // Appel de la fonction de tri
  sortTasks();
  
  // Affichage des tâches triées
  toDoList.forEach((task) => {
    console.log(task.task);
  });