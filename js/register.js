function onFormSubmit() {
  var user = $("#form__register")
    .serializeArray()
    .reduce(function(obj, item) {
      obj[item.name] = item.value;
      return obj;
    }, {});

  user.loggedIn = true;

  var pic = document.getElementById("file__input__profilePicture").files[0];
  var reader = new FileReader();
  reader.onload = function(e) {
    var imgURL = reader.result;
    user.image = imgURL;

    var users = JSON.parse(localStorage.getItem("users"));
    if (!users) {
      var users = [];
      users.push(user);
    } else {
      users.push(user);
    }
    localStorage.setItem("users", JSON.stringify(users));

    window.parent.postMessage("message", "*");
  };
  reader.readAsDataURL(pic);
}

function deleteButtonPressed() {
  $("#form__register").trigger("reset");
}
