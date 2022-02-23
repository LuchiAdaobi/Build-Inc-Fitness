


// REVEAL COACH PAGE

const coaches = document.getElementById('coaches');
const about = document.getElementById('about');

about.addEventListener('mouseenter', () => {
    coaches.classList.add('show');
});


coaches.addEventListener('mousehover', () => {
    coaches.classList.add('show');
});
coaches.addEventListener('mouseleave', () => {
    coaches.classList.remove('show');
});


// HAMBURGER MENU


const closeBtn = document.getElementById('close-btn');
const openBtn = document.getElementById('show-menu');
const navBar = document.getElementById('navbar');

openBtn.addEventListener('click', () => {
    navBar.classList.add('show');
})

closeBtn.addEventListener('click', () => {
    navBar.classList.remove('show');
})


// REMOVE MENU WHEN WINDOW CLICKED

const navBar2 = document.getElementById('navbar');


window.addEventListener('click', clickOutside);

function clickOutside(e) {
    if(e.target == navBar2){
        navBar2.classList.remove('show')
    }
    
}


// POPUP 

const  popUp = document.getElementById('popup');
const  close = document.getElementById('popup-close');
const  button = document.querySelectorAll('button');


document.querySelectorAll('.button').forEach(i => i.addEventListener(
    'click',
    e => {
        popUp.classList.add('show');
    }
));

close.addEventListener('click', () => {
    popUp.classList.remove('show');
})




window.addEventListener('click', clickOutside);

function clickOutside(e) {
    if(e.target == popUp){
        popUp.classList.remove('show')
    }
    
}
