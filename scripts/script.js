// Navigatie menu openen
const menuBtn = document.getElementById('menu-btn');
const topNav = document.getElementById('topnav');
const closeBtn = document.getElementById('nav-close');

menuBtn.addEventListener('click', function() {
    topNav.classList.toggle('active-nav');
    closeBtn.classList.toggle('show');
    console.log('added class');
});

closeBtn.addEventListener('click', function() {
    topNav.classList.remove('active-nav');
    setTimeout(() => {
        closeBtn.classList.remove('show');
    }, 500);
    console.log('removed class');
});