paceOptions = {
    ajax: true,
    document: true,
    eventLag: false
}
Pace.on('done', () => {
    let pre = document.querySelector(".preloader")
    let tl = gsap.timeline();
    let numberLoading = document.querySelector(".number-loading")


    tl.to(".bike-ani", {
        duration: 0.5,
        x: "-15%",
        ease: Back.easeOut.config(1.7)

    })
    tl.add("start")
    tl.to(".bike-ani", {
        duration: 1,
        x: "150%",
        opacity: 0


    }, "start")
    tl.to(".wind-line-container", {
        duration: 1.5,
        x: "150%",
        opacity: 0


    }, "start")
    tl.to(".container", {
        func: () => {
            document.querySelector(".preloader").style.display = "none"
            document.querySelector(".container").style.display = "block"



            let introAnimtation = gsap.timeline()
            introAnimtation.from(".accueil", 2, {
                opacity: 0,
                x: 500
            }, ("start"))


            let section1Animtation = gsap.timeline()
            section1Animtation.add("start")

            section1Animtation.to(".bicycle-container", 1, {
                opacity: 0,
                x: 500
            }, ("start"))
            section1Animtation.to(".accueil-info", 1, {
                opacity: 0,
                x: -500
            }, ("start"))
            section1Animtation.to(".scroll-container", 1, {
                opacity: 0,
                x: -500
            }, ("start"))

            ScrollTrigger.create({
                trigger: ".section-1",
                start: "55% 30%",
                end: "100% 10%",

                // toggleActions:"play none none reverse",
                markers: false,
                scrub: true,

                animation: section1Animtation,
            })

            //section 2
            let section2TitreAnimation = gsap.timeline()

            section2TitreAnimation.from(".section-2-titre", 1, {
                opacity: 0,
                x: -350
            })

            ScrollTrigger.create({
                trigger: ".section-2-titre",
                start: "25% 80%",
                end: "bottom 70%",

                toggleActions: "play none none reverse",
                markers: false,
                scrub: true,

                animation: section2TitreAnimation,
            })

            // content section 2
            let section2ContentAnimation = gsap.timeline()
            section2ContentAnimation.to(".bike-gauche", 1, {

                rotationY: "360deg"
            })


            ScrollTrigger.create({
                trigger: ".container-card",
                start: "top top",
                end: "90% 80%",

                toggleActions: "play none none reverse",
                markers: false,
                pin: ".bike-gauche",
                scrub: true,

                animation: section2ContentAnimation,
            })
            //section 3 titre
            let section3TitreAnimation = gsap.timeline()

            section3TitreAnimation.from(".section-3-titre", 1, {
                opacity: 0,
                x: 350
            })

            ScrollTrigger.create({
                trigger: ".section-3-titre",
                start: "5% 95%",

                toggleActions: "play none none reverse",
                markers: false,
                scrub: true,

                animation: section3TitreAnimation,
            })

            //section 3
            let section3Animation = gsap.timeline()

            section3Animation.from(".services-item", 1, {
                opacity: 0,
                y: -350,
                stagger: 0.5
            })

            ScrollTrigger.create({
                trigger: ".section-3",
                start: "30% 85%",

                toggleActions: "play none none reverse",
                markers: false,


                animation: section3Animation,
            })

            function myFunction(x) {
                if (x.matches) { // If media query matches
                    let section1Animtation = gsap.timeline()
                    section1Animtation.add("start")

                    document.querySelector(".bicycle-container").style.display = "none"
                    section1Animtation.to(".bicycle-container", 1, {
                        opacity: 0,
                        x: 500
                    }, ("start"))
                    section1Animtation.to(".accueil-info", 1, {
                        opacity: 0,
                        x: -500
                    }, ("start"))

                    ScrollTrigger.create({
                        trigger: ".section-1",
                        start: "31% 30%",
                        end: "100% 10%",

                        // toggleActions:"play none none reverse",
                        markers: false,
                        scrub: true,

                        animation: section1Animtation,
                    })

                    //section 2 responsive
                    let section2ContentAnimation = gsap.timeline()
                    section2ContentAnimation.add("start")
                    section2ContentAnimation.to(".bike-gauche", 1, {

                        rotationY: "360deg"
                    }, ("start"))

                    section2ContentAnimation.from(".card-1", 1, {

                        xPercent: 1500,

                    }, ("start"))
                    section2ContentAnimation.from(".card-2", 1, {

                        xPercent: 1500
                    }, ("start"))
                    section2ContentAnimation.from(".card-3", 1, {

                        xPercent: 1500
                    }, ("start"))


                    ScrollTrigger.create({
                        trigger: ".middle-container",
                        start: "10% 45%",
                        end: "250% 80%",

                        toggleActions: "play none none reverse",
                        markers: false,
                        pin: ".section-2",
                        scrub: true,

                        animation: section2ContentAnimation,
                    })

                }
            }

            var x = window.matchMedia("(max-width: 800px)")
            myFunction(x) // Call listener function at run time




        },
        duration: 1.5,

        opacity: 1


    })



})