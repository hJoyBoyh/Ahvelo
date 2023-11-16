let lineAnimation = document.querySelectorAll(".line-animation")
let windTwo = document.querySelector(".wind-line-2")
let windThree = document.querySelector(".wind-line-3")
let windFour = document.querySelector(".wind-line-4")



let tlWind = gsap.timeline()

tlWind.from(lineAnimation,{
    duration:1,
   scaleX:0,
    
    repeat:-1,
    stagger:0.2
})
