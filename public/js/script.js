//Side Navigation JS Code

let menuButton = document.querySelector('.menu-btn')
let cancelButton = document.querySelector('.close-btn')
let navBar = document.querySelector('.navbar')

menuButton.onclick = function() {
    menuButton.style.opacity = "0";
    menuButton.style.pointerEvents = "none";
    navBar.classList.add('active');

}
cancelButton.onclick = function() {
    menuButton.style.opacity = "1";
    menuButton.style.pointerEvents = "auto";
    navBar.classList.remove('active');
}

// Sticky Navigation Menu JS code
let nav = document.querySelector('nav')
let val;
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add('sticky')
    }
    else{
        nav.classList.remove('sticky')
    }
}