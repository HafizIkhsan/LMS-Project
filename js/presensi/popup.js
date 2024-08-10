const tuple = document.querySelectorAll('.tuple');
const overlay = document.getElementById('pop-up');
const close = document.getElementById('close');
const background = document.getElementById('background-popup');

tuple.forEach(function(tuple){
    tuple.addEventListener('click',function(){
        overlay.style.display = 'block';
        background.style.display = 'block';
    });
});

close.addEventListener('click',function(){
    overlay.style.display = 'none';       
    background.style.display = 'none';
});

background.addEventListener('click',function(){
    overlay.style.display = 'none';       
    background.style.display = 'none';
});

export default tuple;