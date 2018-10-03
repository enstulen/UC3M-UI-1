function onFormSubmit() {
  var data = $('#form__register')
    .serializeArray()
    .reduce(function(obj, item) {
      obj[item.name] = item.value;
      return obj;
    }, {});
  localStorage.setItem('userData', JSON.stringify(data));
  //   window.location.replace('../index.html');
  //   window.location.href = '../index.html';
  //   window.location.reload(true);

  window.parent.postMessage('message', '*');
  //   var content = parent.document.getElementById('content__container');
  //   var contentRegister = parent.document.getElementById(
  //     'content__container__register'
  //   );

  //   console.log(content);
  //   console.log(contentRegister);

  //   content.style.display = 'flex';
  //   contentRegister.style.display = 'none';
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
