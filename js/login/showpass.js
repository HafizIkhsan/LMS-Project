const form = document.querySelector('form');
const password = document.getElementById('pass');
const eyes = document.querySelector('.password-toggle-icon');
const submit = document.getElementById('submit');
const img = eyes.querySelector('img');

//password focus show and hide
password.onfocus = function(){
  img.style.display = 'inline';
  eyes.addEventListener('click', function() {
    if(password.type === 'password'){
      img.setAttribute('src', './assets/Icon/Light/Show.svg');
      password.type = 'text';
    }else{
      img.setAttribute('src', './assets/Icon/Light/Hide.svg');
      password.type = 'password';
    }
  });
};

password.onblur = function(){
  img.style.display = 'none';
}

eyes.addEventListener('mousedown', function (event) {
  event.preventDefault();
});


// password checker
submit.addEventListener('click', function(){
  const pass = document.querySelector('#pass');
  const text = pass.value;
  if(text === 'kampus#123!'){
    form.setAttribute('action', './html/dashboard.html');
  }else{
    form.setAttribute('action', '');
  }
})

export {password, submit};
