var scroll = new SmoothScroll('a[href*="#"]');

let menuIcon = document.getElementById('menu-icon');

toggle = () => {
    setTimeout(() => {
        menuIcon.checked = !menuIcon.checked;
    }, 300);
}