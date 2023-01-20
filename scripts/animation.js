gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

// Hero Animation
const heroTl = gsap.timeline({
    defaults: {
        duration: .6,
    },
});
const steps = document.querySelectorAll(".step");

// Small size and up
mm.add("(min-width: 375px)", () => {
    heroTl.from(".hero .intro h1 span",{
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        // duration: .8,
        delay: .5,
    });

    heroTl.from(".hero .intro h1",{
        xPercent: 20,
        // duration: .8,
    });

    heroTl.from(".hero .intro .p-intro",{
        opacity: 0,
        xPercent: 20,
        // duration: .8,
    });

    heroTl.from(".hero .abstract, .hero .cta",{
        opacity: 0,
        xPercent: 20,
        // duration: .8,
    });

    heroTl.from(".hero .hero-sideimg",{
        xPercent: 110,
        opacity: 0,
    });
});

// Quote Animation
gsap.from(".quote-heading, .quote-def",{
    scrollTrigger: {
        trigger: ".quote",
        start: "top 75%",
        markers: false,
        toggleActions: "play none none none"
    },
    stagger: 0.3,
    xPercent: -110,
    // x: 0,
    duration: .6,
    ease: "power1.out"
});

// Steps Animation
gsap.from(".steps-title",{
    scrollTrigger: {
        trigger: ".steps",
        start: "top 75%",
        markers: false,
        toggleActions: "play none none none",
    },
    opacity: 0,
    xPercent: -110,
    duration: .8, 
});

steps.forEach((step) => {
    let stepLeft = step.querySelector(".step-left");
    let stepRight= step.querySelector(".step-right");
    let stepInfoLeft = step.querySelector(".info-left");
    let stepInfoRight = step.querySelector(".info-right");

    let stepTlLeft = gsap.timeline({
        defaults: {
            duration: .6,
        },
    });
    let stepTlRight = gsap.timeline({
        defaults: {
            duration: .6,
        },
    });

    ScrollTrigger.create({
        trigger: step,
        start: "top 80%",
        markers: false,
        toggleActions: "play none none none",
        animation: stepTlLeft,
    });

    ScrollTrigger.create({
        trigger: step,
        start: "top 80%",
        markers: false,
        toggleActions: "play none none none",
        animation: stepTlRight,
    });

    stepTlLeft.from(stepLeft,{
        xPercent: -110,
    });

    stepTlLeft.from(stepInfoLeft,{
        xPercent: -110,
    });

    stepTlRight.from(stepRight,{
        xPercent: 110,
    });

    stepTlRight.from(stepInfoRight,{
        xPercent: 110,
    });
});