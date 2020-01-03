// select dom

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

//set initial state of menu

let showMenu = false;


menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        //set menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        //set menu state
        showMenu = false;
    }
}

// Get the modal
var modal = document.querySelectorAll('#myModal');
// Get the button that opens the modal
var btn = document.querySelectorAll("#myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
        modal[i].style.display = "block";
    }
}
// When the user clicks on <span> (x), close the modal
for (let i = 0; i < btn.length; i++) {
    span[i].onclick = function () {
        modal[i].style.display = "none";
    }
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    for (let i = 0; i < btn.length; i++) {
        if (event.target == modal[i]) {
            modal[i].style.display = "none";
        }
    }
}

const d = document.getElementById('main-footer');
const year = new Date();
const ambilYear = year.getFullYear();
d.textContent = `Copyright 2019 - ${ambilYear} `;