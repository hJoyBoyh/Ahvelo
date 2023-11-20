let prevScrollPos = window.scrollY;

window.addEventListener('scroll', function() {
  // current scroll position
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    // user has scrolled up
    gsap.to('header',0.5,{
        opacity:1
    })
   // document.querySelector('header').style.opacity=1;
  } else {
    // user has scrolled down
    gsap.to('header',0.5,{
        opacity:0
    })
    //document.querySelector('header').style.opacity=0;
  }

  // update previous scroll position
  prevScrollPos = currentScrollPos;
});