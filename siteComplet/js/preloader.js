paceOptions = {
    ajax : true,
    document : true,
    eventLag: false
}
Pace.on('done', () =>{
    let pre = document.querySelector(".preloader")
    let tl = gsap.timeline();
    let numberLoading = document.querySelector(".number-loading")
   

    tl.to(".bike-ani",{
        duration:0.5,
        x:"-15%",
        ease: Back.easeOut.config(1.7)
        
    })
    tl.add("start")
    tl.to(".bike-ani",{
        duration:1,
        x:"150%",
        opacity:0
        
        
    },"start")
    tl.to(".wind-line-container",{
        duration:1.5,
        x:"150%",
        opacity:0
        
        
    },"start")
    tl.to(".container",{
        func:()=>{
            document.querySelector(".preloader").style.display="none"
            document.querySelector(".container").style.display="block"
        },
        duration:1.5,
        
        opacity:1
        
        
    })

})