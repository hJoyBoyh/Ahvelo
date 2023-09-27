



window.addEventListener("DOMContentLoaded",()=>{
    let screenWidth = Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth
      );
    let screenHeight =  Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );

   const menu = document.querySelector(".content-overlay");
    gsap.set(menu,{opacity:0});
   
   let squareContainer = document.getElementById("square-container");
     
   // calcul combien de cells besoin selon ecran
  let squareSize = 100;
 
   let numCols = Math.ceil(screenWidth/squareSize)
   let numRows = Math.ceil(screenHeight/squareSize)

   let numSquares = numCols * numRows;

   squareContainer.style.width = `${numCols * squareSize}px`
   squareContainer.style.height = `${numRows * squareSize}px`

   let squares = [];

    window.addEventListener("resize",()=>{
   
        screenWidth = Math.max(
           document.body.scrollWidth,
           document.documentElement.scrollWidth
         );
        screenHeight =  Math.max(
           document.body.scrollHeight,
           document.documentElement.scrollHeight
         );
         console.log(`height:${screenHeight},width:${screenWidth}`)
        
     
         squareContainer = document.getElementById("square-container");
     
         // calcul combien de cells besoin selon ecran
        
       
          numCols = Math.ceil(screenWidth/squareSize)
          numRows = Math.ceil(screenHeight/squareSize)
     
          numSquares = numCols * numRows;
     
         squareContainer.style.width = `${numCols * squareSize}px`
         squareContainer.style.height = `${numRows * squareSize}px`
     
        squares = [];
    })
 
 

    function createSquares(){
        for (let i=0; i< numSquares; i++){
            const square = document.createElement("div")
            square.classList.add("square")
            squareContainer.appendChild(square)
            squares.push(square)
        }
    }
         function animateSquares(){
            gsap.fromTo(squares,{
                opacity:0,
            },
            {
                opacity:1,
                delay:0.5,
                duration:0.0005,
                stagger:{
                    each : 0.004,
                    from : "random",
                }
            })

            gsap.to(squares,{
                opacity:0,
                delay:1.5,
                duration:0.0005,
                stagger:{
                    each: 0.004,
                    from : "random"
                }
            })

         }
         let overlayVisible = false;
         document.getElementById("toggle").addEventListener("click",()=>{
            console.log("haasllo")
            squareContainer.innerHTML = "";
            squares = [];
            createSquares()
            animateSquares()

            gsap.to(menu,0.025,{
                opacity: overlayVisible ? 0 : 1,
                visibility: overlayVisible ? "hidden":"visible",
                delay:1.15
            })

            gsap.to(menu,{
                zIndex: overlayVisible ? -1 : 0,
                delay : overlayVisible ? 0 : 2,
            })
            overlayVisible = !overlayVisible
         })


})