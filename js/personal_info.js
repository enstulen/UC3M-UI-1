window.onload = function() {
  updateFields();
};

function onFormSubmit(formID, insideIframe) {
  var data = $(formID)
    .serializeArray()
    .reduce(function(obj, item) {
      obj[item.name] = item.value;
      return obj;
    }, {});
  localStorage.setItem('userData', JSON.stringify(data));
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

  var userData = JSON.parse(localStorage.getItem('userData'));
  if (userData) {
    firstName.value = userData.firstName;
    lastName.value = userData.lastName;
    email.value = userData.email;
    address.value = userData.address;
    phone.value = userData.phone;
    birthday.value = userData.birthday;
  }
}
