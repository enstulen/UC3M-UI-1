function onFormSubmit() {
  var user = $("#form__register")
    .serializeArray()
    .reduce(function(obj, item) {
      obj[item.name] = item.value;
      return obj;
    }, {});
  user.loggedIn = true;
  var users = JSON.parse(localStorage.getItem("users"));
  if (!users) {
    var users = [];
    users.push(user);
  } else {
    users.push(user);
  }
  localStorage.setItem("users", JSON.stringify(users));

  window.parent.postMessage("message", "*");
}

function deleteButtonPressed() {
  $("#form__register").trigger("reset");
}
