var scroll = new SmoothScroll('a[href*="#"]');

let menuIcon = document.getElementById('menu-icon');

function toggle () {
    setTimeout(() => {
        menuIcon.checked = !menuIcon.checked;
    }, 300);
}