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

function goBack() {
  var content = parent.document.getElementById('content__container');
  var contentRegister = parent.document.getElementById(
    'content__container__register'
  );

  console.log(content);
  console.log(contentRegister);

  content.style.display = 'flex';
  contentRegister.style.display = 'none';
  window.location.href = '../index.html';
}
