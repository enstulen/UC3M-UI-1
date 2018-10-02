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

//Economic class: 1 = Cheap, 2 = Middle, 3 = Expensive
const more_information = {
  cornerBear: {
    name: 'The Corner Bear',
    image: './images/restaurants/restaurant1.jpg',
    contactName: 'Carlos Johnson',
    website: 'http://www.cornerbear.com/',
    phoneNumber: 234980234,
    description: 'Jalla',
    typeOfFood: ['Fish', 'Lobster'],
    economicClass: 1,
    review:
      'Good attention to detail. A little noisy, but the food was great. Would recommend trying the fish they serve. 6/10'
  },
  parlour: {
    name: 'The Corner Bear',
    image: './images/restaurants/restaurant2.jpg',
    contactName: 'Carlos Johnson',
    website: 'http://www.cornerbear.com/',
    phoneNumber: 234980234,
    description: 'Jalla',
    typeOfFood: ['Fish', 'Lobster'],
    economicClass: 1,
    review:
      'Good attention to detail. A little noisy, but the food was great. Would recommend trying the fish they serve. 6/10'
  },
  frenchClove: {
    name: 'The Corner Bear',
    image: './images/restaurants/restaurant3.jpg',
    contactName: 'Carlos Johnson',
    website: 'http://www.cornerbear.com/',
    phoneNumber: 234980234,
    description: 'Jalla',
    typeOfFood: ['Fish', 'Lobster'],
    economicClass: 1,
    review:
      'Good attention to detail. A little noisy, but the food was great. Would recommend trying the fish they serve. 6/10'
  }
};

// Show modal
function opinionClicked(restaurantName) {
  var restaurant = more_information[restaurantName];

  var modal = document.getElementById('myModal');
  modal.style.display = 'block';

  var span = document.getElementsByClassName('close')[0];
  span.onclick = function() {
    modal.style.display = 'none';
  };

  var modalHeader = document.getElementById('modal__header');
  var modalImage = document.getElementById('modal__image');
  var modalContactPerson = document.getElementById('modal__contact__person');
  var modalPhoneNumber = document.getElementById('modal__phone__number');
  var modalWebsite = document.getElementById('modal__website');
  var modalReview = document.getElementById('modal__review');

  modalHeader.innerHTML = restaurant.name;
  modalImage.src = restaurant.image;
  modalContactPerson.innerHTML = restaurant.contactName;
  modalPhoneNumber.innerHTML = restaurant.phoneNumber;
  modalWebsite.href = restaurant.website;
  modalWebsite.innerHTML = restaurant.website;
  modalReview.innerHTML = restaurant.review;

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
}

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
