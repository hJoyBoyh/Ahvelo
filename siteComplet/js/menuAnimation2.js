let menu = document.getElementById("toggle")
let close = document.querySelector(".close-menu")

menu.addEventListener("click", () => {
    let menuOpen = document.querySelector(".menu-open")
    let nav = document.querySelector(".content-overlay")


    let tl = gsap.timeline()
    menuOpen.style.width = "5vw"
    menuOpen.style.height = "10vh"
    nav.style.display = "flex"
    close.style.display = "block"

    tl.add("start") 
    tl.to(menuOpen, {
        duration: 2,
        scale: 40,
    })

    let ligne = document.getElementsByTagName("hr")
    let link = document.querySelectorAll(".selection")
    let number = document.querySelectorAll(".number-menu")
    

    tl.from(ligne, {
        duration: 1.5,
        scaleX: 0,
        stagger: 0.2
    }, "start")
    tl.from(link, {
        duration: 2,
        x: "-50vw",
        opacity: 0,
        stagger: 0.2
    }, "start")
    tl.from(number, {
        duration: 2,
        y: "-10vh",
        opacity: 0,
        stagger: 0.5
    }, "start")
})

close.addEventListener("click", () => {
    let menuOpen = document.querySelector(".menu-open")
    let nav = document.querySelector(".content-overlay")


    let tl = gsap.timeline()
    menuOpen.style.width = "5vw"
    menuOpen.style.height = "10vh"
    nav.style.display = "none"
    close.style.display = "none"

    tl.to(menuOpen, {
        duration: 1,
        scale: 0,
    })
})