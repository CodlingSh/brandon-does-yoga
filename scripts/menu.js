const mobileMenu = document.getElementById("mobileMenu");
const body = document.getElementsByTagName("body")[0];

function openSideNav() {
    mobileMenu.style.width = "250px"; // set the width of the menu
    body.style.overflowY = "hidden"; // Make it so the user can't scroll when the menu is open
}

function closeSideNav() {
    mobileMenu.style.width = "0px";
    body.style.overflowY = "scroll";
}