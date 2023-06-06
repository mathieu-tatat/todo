var i = 1;

// Récupération de la liste depuis le stockage local lors du chargement de la page
$(document).ready(function() {
  var storedList = localStorage.getItem('todoList');
  if (storedList) {
    $('.todo-list').html(storedList);
    i = $('.list-row').length + 1;
  }
});

$(document).on('click', '.add-todo', function() {
  var todoInputData = $(this).siblings('input').val();
  var todoListData =
    `<div class="row-parent">
      <div class="list-row">
        <div class="list-num">` + i + `.</div>
        <div class="list-data">` + todoInputData + `</div>
        <div class="check">
          <label for="a faire">a faire</label>
          <input type="checkbox" name="a faire" id="scales" name="scales">
        </div>
        <div class="check">
          <label for="a faire">en cours</label>
          <input type="checkbox" id="scales" name="scales">
        </div>
        <div class="check">
          <label for="a faire">test</label>
          <input type="checkbox" id="scales" name="scales">
        </div>
        <div class="check">
          <label for="a faire">terminer</label>
          <input type="checkbox" id="scales" name="scales">
        </div>
        <div class="edit-todo">&#9998;</div>
        <div class="remove-todo">&#x2715;</div>
      </div>
      <div class="list-error"></div>
    </div>`;

  if ($.trim(todoInputData) == '') {
    $(this).parents('.todo-content').find('.error').text('You must enter something!');
  } else {
    $(this).parents('.todo-content').find('.todo-list').append(todoListData);
    i++;
    $(this).parents('.todo-content').find('.error').empty();
  }
  $(this).siblings('input').val('');

  // Mise à jour du stockage local après l'ajout d'un élément
  localStorage.setItem('todoList', $('.todo-list').html());
});

// add todo list on pressing Enter key 
$(document).keydown(function(event) {
  if (event.which == 13) {
    event.preventDefault();
    $('.add-todo').click();
  }
});
   