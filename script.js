let btn = document.getElementById('m-btn');
let navList = document.getElementById('asideBar');

btn.addEventListener("click", ()=>{
    btn.querySelector('i').classList.toggle('fa-bars');
    btn.querySelector('i').classList.toggle('fa-xmark');
    if (btn.querySelector('i').className == 'fa-solid fa-xmark') {
        navList.style.right = '0%';
    }
    if (btn.querySelector('i').className == 'fa-solid fa-bars'){
        navList.style.right = '-280px';
    }
});


function hide() {
    navList.style.right = '-500px';
    btn.querySelector('i').classList.toggle('fa-xmark');
    btn.querySelector('i').classList.toggle('fa-bars');
}