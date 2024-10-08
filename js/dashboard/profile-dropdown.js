const profile  = document.querySelector('#profile');
const button = profile.querySelector('button');

const npm = localStorage.getItem('npm');
const name = document.getElementById('name');
name.innerHTML = npm;


// drop down
button.addEventListener('click',function(){
    const dropdown = profile.nextElementSibling;
    if(dropdown){
        profile.classList.toggle('active')
        dropdown.classList.toggle('active');
    }else{
        console.error();
    }
});

export default profile;