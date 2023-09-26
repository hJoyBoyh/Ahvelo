paceOptions = {
    ajax : true,
    document : true,
    eventLag: false
}
Pace.on('done', () =>{
    let pre = document.querySelector(".preloader")
    let tl = gsap.timeline();

    tl.to(pre,{
        duration:2,
        opacity:0
        
    })

})