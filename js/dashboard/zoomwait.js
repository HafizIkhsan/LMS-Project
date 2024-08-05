const button = document.querySelector('#reminder');

button.addEventListener('click', function (e) {
  const text = button.querySelector('.reminder div.content');
  text.style.animation= 'active 250ms ease-in forwards';
  button.classList.add('active');
});

export default button;
