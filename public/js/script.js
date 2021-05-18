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