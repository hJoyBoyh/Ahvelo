let menu = document.getElementById("toggle")
let close = document.querySelector(".close")

menu.addEventListener("click", ()=>{
    let menuOpen = document.querySelector(".menu-open")
    let nav = document.querySelector(".nav")
    

    let tl = gsap.timeline()
    menuOpen.style.width = "5vw"
    menuOpen.style.height = "10vh"
    nav.style.display = "block"
    close.style.display = "block"

    tl.to(menuOpen,{
        duration:2,
        scale:40,
    })
})
close.addEventListener("click", ()=>{
    let menuOpen = document.querySelector(".menu-open")
    let nav = document.querySelector(".nav")
    

    let tl = gsap.timeline()
    menuOpen.style.width = "5vw"
    menuOpen.style.height = "10vh"
    nav.style.display = "none"
    close.style.display = "none"

    tl.to(menuOpen,{
        duration:1,
        scale:0,
    })
})