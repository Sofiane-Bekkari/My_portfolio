// Initialaz our DOM Variable
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set state of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        // Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        // Set Menu State
        showMenu = false;
    }
}

// Button Function for Read more & Read less in ABOUT page!
function myBtnRead() {
    let dotPoint = document.getElementById('dots');
    let moreLine = document.getElementById('more-line');
    let btnRead = document.getElementById('btn-read');
    //console.log(dotPoint);

    if (dotPoint.style.display === "none") {
        dotPoint.style.display = "inline"
        moreLine.style.display = "none"
        btnRead.innerHTML = "Read More"
    } else {
        dotPoint.style.display = "none"
        moreLine.style.display = "inline"
        btnRead.innerHTML = "Read Less"
    }
}