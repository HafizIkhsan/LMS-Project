const profile  = document.querySelector('#profile');
const button = profile.querySelector('button');

button.addEventListener('click',function(e){
    const dropdown = profile.nextElementSibling;
    if(dropdown){
        profile.classList.toggle('active')
        dropdown.classList.toggle('active');
    }else{
        console.error();
    }
});


export default profile;