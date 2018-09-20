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
