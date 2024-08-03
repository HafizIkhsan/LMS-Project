const profile  = document.querySelector('#profile');

profile.addEventListener('click',function(e){
    const dropdown = e.target.nextElementSibling;
    dropdown.classList.toggle('active');
});


export default profile;