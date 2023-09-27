let tl = gsap.timeline()
let ligne = document.getElementsByTagName("hr")
let link = document.querySelectorAll(".selection")
let number = document.querySelectorAll(".number-menu")
tl.add("start")

tl.from(ligne,{
    duration:1.5,
    scaleX:0,
    stagger: 0.2
},"start")
tl.from(link,{
    duration:2,
    x:"-50vw",
    opacity:0,
    stagger: 0.2
},"start")
tl.from(number,{
    duration:2,
    y:"-10vh",
    opacity:0,
    stagger: 0.5
},"start")