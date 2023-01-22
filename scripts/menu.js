// Menu Animation
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('nav-close');
const menuLbl = document.getElementById('menu-label');
const menuTl = gsap.timeline({});

menuTl.to(".nav-overlay", {
    xPercent: 110
}).progress(1);

gsap.set(".nav-overlay", {opacity: 1});

menuBtn.addEventListener('click', function() {
    setTimeout(() => {
        menuLbl.classList.toggle('hide');
    }, 500);
    menuTl.reversed(!menuTl.reversed());
    setTimeout(() => {
        closeBtn.classList.toggle('show');
    }, 400);
});

closeBtn.addEventListener('click', function() {
    closeBtn.classList.remove('show');
    menuLbl.classList.remove('hide');
    menuTl.play();
});





