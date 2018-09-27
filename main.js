// Switch between options
$(document).ready(function() {
  $('.header__selector').click(function(event) {
    $('.header__selector__container')
      .children()
      .removeClass('selected');
    if ($(event.target).hasClass('header__selector')) {
      $(event.target).addClass('selected');
    } else {
      $(event.target)
        .parent()
        .addClass('selected');
    }
  });
});

// Add a new preference
function plusButtonPressed() {
  var container = document.getElementById('preferences__selections__container');
  const inputs = document.querySelectorAll('.preferences__selection__input');

  for (const input of inputs) {
    if (input.innerHTML === '') {
      return;
    }
  }

  var child =
    ' <div class="preferences__selection"> <span class="preferences__selection__input" contenteditable="true"></span> <img class="preferences__selection__img" onclick="deletePreferenceButtonPressed(this)" src="images/icons/cross.png" alt="preferenes" /> </div>';
  container.insertAdjacentHTML('afterbegin', child);
}

// Delete selected preference
function deletePreferenceButtonPressed(element) {
  var container = document.getElementById('preferences__selections__container');
  var parent = element.parentNode;
  container.removeChild(parent);
}
