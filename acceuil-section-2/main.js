gsap.registerPlugin(ScrollTrigger)

let tl = gsap.timeline()


ScrollTrigger.create({
    trigger:".container-card",
    start: "top top",
    end: "80% 80%",
   
    toggleActions:"play none none reverse",
    markers:true,
    pin: ".bike-gauche",
   
    animation:tl,
})