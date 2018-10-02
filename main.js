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
    phoneNumber: 860730589,
    description: 'Jalla',
    typeOfFood: ['Fish', 'Lobster'],
    economicClass: 1,
    review:
      'Good attention to detail. A little noisy, but the food was great. Would recommend trying the fish they serve. 6/10'
  },
  parlour: {
    name: 'The Parlour',
    image: './images/restaurants/restaurant2.jpg',
    contactName: 'George Read',
    website: 'http://www.Theparlour.com/',
    phoneNumber: 234980234,
    description: 'Fast',
    typeOfFood: ['Meat', 'Cereals'],
    economicClass: 1,
    review:
      'Very nice staff. The food was OK, but the service was amazing. The decorations were also on point. I would still recommend a trip to this restaurant. I visited this back in 2013, but I bet it is still the same as it was then. 5/10'
  },
  frenchClove: {
    name: 'The French Clove',
    image: './images/restaurants/restaurant3.jpg',
    contactName: 'Trinette Moquin',
    website: 'http://www.frenchClove.com/',
    phoneNumber: 740770465,
    description: 'Serius',
    typeOfFood: ['Salads', 'Sandwiches'],
    economicClass: 3,
    review:
      'Excusite food. Very helpful and kind staff. The wine, although expensive, is amazing. Would love to go again. 9/10'
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
  var modalDescription = document.getElementById('modal__description');
  var modalFoodType = document.getElementById('modal__food_type');
  var modalPrice = document.getElementById('modal__price');

  modalHeader.innerHTML = restaurant.name;
  modalImage.src = restaurant.image;
  modalContactPerson.innerHTML = restaurant.contactName;
  modalPhoneNumber.innerHTML = restaurant.phoneNumber;
  modalWebsite.href = restaurant.website;
  modalWebsite.innerHTML = restaurant.website;
  modalReview.innerHTML = restaurant.review;
  modalDescription.innerHTML = restaurant.description;
  modalFoodType.innerHTML = restaurant.typeOfFood;
  modalPrice.innerHTML = restaurant.price;

  if (modalPrice== 3){
    modalPrice.innerHTML= 'Expensive';
  }
  if (modalPrice== 2){
    modalPrice.innerHTML= 'Medium';
  }
  if (modalPrice== 1){
    modalPrice.innerHTML= 'cheap';
  }

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
