$(function() {
  $('[data-target]').on('click', function() {
    var target = $(this).data('target');
    $(target)
      .siblings()
      .hide()
      .end()
      .show();
  });
});

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
