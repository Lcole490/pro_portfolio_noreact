const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");


// Navigation toggle that opens and closes hamburger menu on click
    burger.addEventListener("click", ()=>{
        nav.classList.toggle("nav-active");



        // Ease in transition animation for links in hamburger menu after it opens
navLinks.forEach((link,index)=>{
    console.log(index/7);
    if(link.style.animation){
        link.style.animation = ""
    } else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .9}s`
    }


    });

burger.classList.toggle("navX");
    
});
}

navSlide();