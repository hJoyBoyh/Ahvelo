gsap.registerPlugin(ScrollTrigger)

// circle animation
let tlAnimation = gsap.timeline()

tlAnimation.to(".circle",{
    duration:1,
    y:30,
    repeat:-1
})

// page animation

let section2TitreAnimation = gsap.timeline()

section2TitreAnimation.from(".section-2-titre",1,{
    opacity: 0,
    x:-350
})

ScrollTrigger.create({
    trigger:".section-2-titre",
    start: "15% 80%",
   
    toggleActions:"play none none reverse",
    markers:true,
   
    animation:section2TitreAnimation,
})