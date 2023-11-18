gsap.registerPlugin(ScrollTrigger)

// circle animation
let tlAnimation = gsap.timeline()

tlAnimation.to(".circle",{
    duration:1,
    y:30,
    repeat:-1
})

// page animation
//section 1 on the scroll

let section1Animtation = gsap.timeline()
section1Animtation.add("start")

section1Animtation.to(".bicycle-container",1,{
    opacity:0,
    x:500
},("start"))
section1Animtation.to(".accueil-info",1,{
    opacity:0,
    x:-500
},("start"))

ScrollTrigger.create({
    trigger:".section-1",
    start: "45% 40%",
   
    toggleActions:"play none none reverse",
    markers:true,
    scrub:true,
   
    animation:section1Animtation,
})


//section 2
let section2TitreAnimation = gsap.timeline()

section2TitreAnimation.from(".section-2-titre",1,{
    opacity: 0,
    x:-350
})

ScrollTrigger.create({
    trigger:".section-2-titre",
    start: "25% 80%",
   
    toggleActions:"play none none reverse",
    markers:true,
    scrub:true,
   
    animation:section2TitreAnimation,
})

// content section 2
let section2ContentAnimation = gsap.timeline()
section2ContentAnimation.to(".bike-gauche",1,{
    
    rotationY:"360deg"
})


ScrollTrigger.create({
    trigger:".container-card",
    start: "top top",
    end: "90% 80%",
   
    toggleActions:"play none none reverse",
    markers:true,
    pin: ".bike-gauche",
    scrub:true,
   
    animation:section2ContentAnimation,
})
//section 3 titre
let section3TitreAnimation = gsap.timeline()

section3TitreAnimation.from(".section-3-titre",1,{
    opacity: 0,
    x:350
})

ScrollTrigger.create({
    trigger:".section-3-titre",
    start: "5% 95%",
   
    toggleActions:"play none none reverse",
    markers:true,
    scrub:true,
   
    animation:section3TitreAnimation,
})

//section 3
let section3Animation = gsap.timeline()

section3Animation.from(".services-item",1,{
    opacity: 0,
    y:-350,
    stagger:0.5
})

ScrollTrigger.create({
    trigger:".section-3",
    start: "30% 85%",
   
    toggleActions:"play none none reverse",
    markers:true,
    
   
    animation:section3Animation,
})