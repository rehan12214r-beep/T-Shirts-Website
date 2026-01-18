let menuToggleOpen = document.querySelector("#menuToggleOpen")
let menuToggleClose = document.querySelector("#menuToggleClose")
let navCont = document.querySelector(".nav-cont")
menuToggleOpen.addEventListener("click" , function(){
    navCont.classList.toggle("active");
   
    menuToggleClose.style.display = "block"
    menuToggleOpen.style.display = "none"
   
})
menuToggleClose.addEventListener("click" , function(){
  
     navCont.classList.toggle("active");
    menuToggleClose.style.display = "none"
    menuToggleOpen.style.display = "block"
   
})