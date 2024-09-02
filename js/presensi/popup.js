// Pop-up
const tuple = document.querySelectorAll('.tuple');
const overlay = document.getElementById('pop-up');
const close = document.getElementById('close');
const background = document.getElementById('background-popup');

//Desc-tuple
const kdMk = document.getElementsByClassName('kd-mk');
const mk = document.getElementsByClassName('matkul');
const kls = document.getElementsByClassName('kls');
const hari = document.getElementsByClassName('hari');
const jadwal = document.getElementsByClassName('jadwal');
const ruangan = document.getElementsByClassName('ruangan');
const body = document.body;

tuple.forEach(function(tuple, index){
    tuple.addEventListener('click',function(){
        const nmMk = mk[index];
        const kd_mK = kdMk[index];
        const clss = kls[index];
        const day = hari[index];
        const schedule = jadwal[index];
        const room = ruangan[index];
        document.getElementById('nm-matkul').innerHTML = nmMk.innerHTML;
        document.getElementById('kd-mk').innerHTML = kd_mK.innerHTML +' & '+ clss.innerHTML;
        document.getElementById('jdwl').innerHTML = day.innerHTML +', '+ schedule.innerHTML +' & '+ room.innerHTML;
        overlay.style.display = 'block';
        background.style.display = 'block';
        body.style.overlay = 'hidden';
    });
});

close.addEventListener('click',function(){
    overlay.style.display = 'none';       
    background.style.display = 'none';
    document.getElementById('nm-matkul').innerHTML = '';
});

background.addEventListener('click',function(){
    overlay.style.display = 'none';       
    background.style.display = 'none';
});

export default tuple;