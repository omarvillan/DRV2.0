/*
const li1 = document.querySelector(".li-1");
const aHome = document.querySelector(".a-home");

li1.addEventListener('mouseover', removeInactive);
li1.addEventListener('mouseout', removeInactive);

function removeInactive(){
    aHome.classList.toggle('inactive');
}
*/

const iconMenuMobile = document.querySelector(".icon-menu-mobile");
const menuMobile = document.querySelector(".nav-container");
const blackScreen = document.querySelector(".black-screen");


iconMenuMobile.addEventListener('click', toggleMobileMenu)
blackScreen.addEventListener('click', closedDiv)

function toggleMobileMenu(){
    menuMobile.classList.toggle('inactive');
    blackScreen.classList.toggle('inactive');
}

function closedDiv(){
    menuMobile.classList.remove('inactive');
    blackScreen.classList.remove('inactive');
}