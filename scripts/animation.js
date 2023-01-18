gsap.registerPlugin(ScrollTrigger);

gsap.to(".quote",{
    scrollTrigger: {
        trigger: ".quote",
        start: "top 75%",
        markers: true,
        toggleActions: "play none none none"
    },
    stagger: 0.3,
    x: 0,
    duration: 1,
    ease: "power3.out"
});