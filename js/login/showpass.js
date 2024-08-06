const password = document.getElementById('pass');
const eyes = document.querySelector('.password-toggle-icon');

eyes.addEventListener('click', function () {
  const img = eyes.querySelector('img');
  if(password.type === 'password'){
    img.setAttribute('src', './assets/Icon/Light/show.svg');
    password.type = 'text';
  }else{
    img.setAttribute('src', './assets/Icon/Light/hide.svg');
    password.type = 'password';
  }
});

export default eyes;
