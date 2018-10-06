function onFormSubmit() {
  var user = $('#form__register')
    .serializeArray()
    .reduce(function(obj, item) {
      obj[item.name] = item.value;
      return obj;
    }, {});
  user.loggedIn = true;
  var users = localStorage.getItem('users');
  if (!users) {
    var users = [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  } else {
    users.push(user);
  }

  window.parent.postMessage('message', '*');
}

function deleteButtonPressed() {
  $("#form__register").trigger('reset');
}
