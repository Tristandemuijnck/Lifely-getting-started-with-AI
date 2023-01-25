# Lifely

## Titel
Lifely landing page | Getting started with AI

## Beschrijving
Dit is de repository van mijn uitvoering van the-startup-responsive-interactieve-website - Lifely.

De tool is gemaakt voor de volgende user story: 
> "Als gebruiker wil ik informatie vinden over de AI Design Sprint, zodat duidelijk wordt hoe machine learning mijn bedrijf kan veranderen en automatiseren."

### Preview
<img src="https://user-images.githubusercontent.com/43402897/213940604-5526c51b-fe3c-436f-a67e-4fff1e3ee0dc.gif" width=700>

## :mag: Kenmerken

### :page_facing_up: HTML

Voor de layout maak ik gebruik van: 

  `<header>`
  `<nav>`
  `<main>`
  `<section>`
  `<footer>`
  
### :art: CSS

Een aantal belangrijke css onderdelen zijn de media queries. Deze worden gebruikt voor het responsive maken van de website.
Ik heb ze op de volgende plekken neergezet:

* 400px
* 600px
* 700px
* 800px
* 1024px
* 1920px

### :loop: JavaScript

Een belangrijk stukje JavaScript is de code voor het animeren van de verschillende teksten en het menu. Ik maak hier gebruik van de GSAP library met de scrollTrigger plugin.

```
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
```



## Live versie
Voor een live versie van het project: https://tristan-lifely.student.fdnd.nl/

## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
