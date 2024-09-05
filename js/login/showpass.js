const form = document.querySelector('form');
const password = document.getElementById('pass');
const eyes = document.querySelector('.password-toggle-icon');
const submit = document.getElementById('submit');
const img = eyes.querySelector('img');

//password focus show and hide
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



// npm & password checker
submit.addEventListener('click', function(){
  // npm
  const npm = document.getElementById('npm').value;
  localStorage.setItem('npm', npm);

  //password
  const pass = document.querySelector('#pass');
  const text = pass.value;
  
  if(text === 'mahasiswa#123!'){
    form.setAttribute('action', './html/dashboard.html');
  }else{
    form.setAttribute('action', '');
  }
});

export {password, submit};
