gsap.registerPlugin(ScrollTrigger)

let tl = gsap.timeline()
tl.to(".bike-gauche",1,{
    
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
   
    animation:tl,
})