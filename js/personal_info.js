window.onload = function() {
  updateFields();
};

function onFormSubmit() {
  var user = $('#form__register')
    .serializeArray()
    .reduce(function(obj, item) {
      obj[item.name] = item.value;
      return obj;
    }, {});
  user.loggedIn = true;
  var users = localStorage.getItem('users');
  users.push(user);
  alert('Updated!');
}
function updateFields() {
  var firstName = document.getElementById('personal_info_first_name');
  var firstName = document.getElementById('personal_info_first_name');
  var lastName = document.getElementById('personal_info_last_name');
  var email = document.getElementById('personal_info_email');
  var address = document.getElementById('personal_info_address');
  var phone = document.getElementById('personal_info_phone');
  var birthday = document.getElementById('personal_info_birthday');

  var users = JSON.parse(localStorage.getItem('users'));
  if (users) {
    users.forEach(function(user) {
      if (user.loggedIn) {
        firstName.value = user.firstName;
        lastName.value = user.lastName;
        email.value = user.email;
        address.value = user.address;
        phone.value = user.phone;
        birthday.value = user.birthday;
      }
    });
  }
}
