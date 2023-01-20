gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

// Hero Animation
const heroTl = gsap.timeline({defaults: {duration: .6,}});
const steps = document.querySelectorAll(".step");

// Small size and up
mm.add("(min-width: 375px)", () => {
    heroTl.from(".hero .intro h1 span",{
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        // duration: .8,
        delay: .8,
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
    xPercent: -120,
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
        xPercent: 110,
    });

    stepTlRight.from(stepRight,{
        xPercent: 110,
    });

    stepTlRight.from(stepInfoRight,{
        xPercent: -110,
    });
});

// Cases Animation

const caseTl = gsap.timeline({});
const cardLeft = document.querySelector(".card-left");
const cardRight = document.querySelector(".card-right");

gsap.from(".cases-title", {
    scrollTrigger: {
        trigger: ".cases",
        start: "top 75%",
        markers: false,
        toggleActions: "play none none none",
    },
    opacity: 0,
    xPercent: -110,
    duration: .8, 
});

caseTl.from(".card-left", {
    opacity: 0,
    xPercent: -110,
    duration: .6,
});

caseTl.from(".card-right", {
    opacity: 0,
    xPercent: 110,
    duration: .6,
});

ScrollTrigger.create({
    trigger: ".case-cards",
    start: "top 65%",
    markers: false,
    toggleActions: "play none none none",
    animation: caseTl,
});

// Contact Animation
const contactTl = gsap.timeline({});

contactTl.from(".contact-title", {
    opacity: 0,
    xPercent: -110,
    duration: .8, 
})

contactTl.from(".contact-info",{
    opacity: 0,
    yPercent: 110,
    duration: .8,
})

contactTl.from(".contact-form",{
    opacity: 0,
    yPercent: 110,
    duration: .8,
});

ScrollTrigger.create({
    trigger: ".contact",
    start: "top 75%",
    markers: false,
    toggleActions: "play none none none",
    animation: contactTl,
});

// Related Animation
const relatedTl = gsap.timeline({});

relatedTl.from(".related-title",{
    opacity: 0,
    xPercent: -110,
    duration: .8, 
});

ScrollTrigger.create({
    trigger: ".related",
    start: "top 75%",
    markers: false,
    toggleActions: "play none none none",
    animation: relatedTl,
});

mm.add("(max-width: 599px)", () => {
    relatedTl.from(".related-card",{
        stagger: 0.3,
        opacity: 0,
        xPercent: -110,
        duration: .8,
    });
});

mm.add("(min-width: 600px)", () => {
    relatedTl.fromTo(".related-card",{
        opacity: 0,
        yPercent: 110,
    }, 
    {
        stagger: 0.3,
        opacity: 1,
        yPercent: 1,
        duration: .8,
    });
});

// Tagline Animation
const taglineTl = gsap.timeline({});

taglineTl.from(".tagline-heading",{
    opacity: 0,
    xPercent: -110,
    duration: .8,
});

mm.add("(max-width: 1023px)", () => {
    taglineTl.from(".tagline-explanation",{
        opacity: 0,
        duration: .8,
    });
});

mm.add("(min-width: 1024px)", () => {
    taglineTl.from(".tagline-explanation",{
        opacity: 0,
        duration: .8,
        delay: .5,
    });
});

ScrollTrigger.create({
    trigger: ".tagline",
    start: "top 75%",
    markers: false,
    toggleActions: "play none none none",
    animation: taglineTl,
});



