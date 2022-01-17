


// REVEAL COACH PAGE

const coaches = document.getElementById('coaches');
const about = document.getElementById('about');

about.addEventListener('mouseenter', () => {
    coaches.classList.add('show');
});
// about.addEventListener('mouseleave', () => {
//     coaches.classList.remove('show');
// });

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
// const  popupContent = document.getElementById('popup-content');

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


    // TOGGLE DROPDOWN

    // const angleUp = document.getElementById('angle-up');
    // const angleDown = document.getElementById('angle-down');
    // const coaches2 = document.getElementById('coaches');
    

    // angleUp.addEventListener('click', () => {
    //     coaches2.classList.add('show');
    //     angleUp.classList.add('inactive');
    //     angleDown.classList.add('active');
    // });

    // angleDown.addEventListener('click', () => {
    //     coaches2.classList.remove('show');
    //     angleUp.classList.remove('inactive');
    //     angleDown.classList.remove('active');
    // });


    // TOGGLE DROPDOWN
    // const angleUp = document.querySelectorAll('angle-up');
    // const angleDown = document.querySelectorAll('angle-down');
    // const coaches2 = document.getElementById('coaches');
    

    // document.querySelectorAll('#angle-up').forEach(i => i.addEventListener(
    //     'click',
    //     e => {
    //         coaches2.classList.add('show');
    //     angleUp.classList.add('inactive');
    //     angleDown.classList.add('active');
        
    //     }
    // ));

    // document.querySelectorAll('#angle-down').forEach(i => i.addEventListener(
    //     'click',
    //     e => {
    //         coaches2.classList.add('show');
    //     angleUp.classList.add('inactive');
    //     angleDown.classList.add('active');
    //     }
    // ));


   

  

// REMOVE HOVER FROM MENU
// const coaches3 = document.getElementById('coaches');
// const about2 = document.getElementById('about');
// const mediaQuery = window.matchMedia("(max-width: 1150px)")



// function removeHover(e) {
//     if(e.matches) {
//         about2.addEventListener('mouseenter', () => {
//             coaches3.classList.remove('show');
//         });
       
       
//     }
// }
// mediaQuery.addListener(removeHover)

// removeHover(mediaQuery)



    