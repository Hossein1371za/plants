import './style.css'

const navMenu = document.getElementById("nav-menu")
const navLink = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById("hamburger")

hamburger.addEventListener("click",()=>{
    navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle("ri-close-large-line")
})
navLink.forEach(link=>{
    link.addEventListener("click",()=>{
        navMenu.classList.toggle("left-[0]")
        hamburger.classList.toggle("ri-close-large-line") 
    })
})

// scroll up
window.addEventListener("scroll", () => {
    const scrollUpBtn = document.getElementById("scroll-up");
    if (window.scrollY >= 250) {
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
    } else {
        scrollUpBtn.classList.remove("bottom-4");
        scrollUpBtn.classList.add("-bottom-1/2");
    }
});
// scroll header
window.addEventListener("scroll", () => {
    const header = document.getElementById("navbar");
    if (window.scrollY >= 50) {
        header.classList.add("border-b" , "border-yellow-500");
    } else {
        header.classList.remove("border-b" , "border-yellow-500");
    }
});




// swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed:400,
    spaceBetween:30,
    autoplay:{
        delay:3000,
        disableOnInteraction:false
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
    grabCursor:true, 
    breakpoints:{
        640:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        },
    }
  });
// active scroll
window.addEventListener("scroll",()=>{
    const section = document.querySelectorAll("section")
    const navLinks = document.querySelectorAll(".nav-link")

    let current = "home"

    section.forEach(section=>{
        const sectionTop = section.offsetTop

        if(window.scrollY >= sectionTop - 60){
            current= section.getAttribute("id")
        }
    })

    navLinks.forEach(item=>{
        item.classList.remove("active")

        if(item.href.includes(current)){
            item.classList.add("active")
        }
    })
})


const sr = ScrollReveal({
    origin:"top",
    distance:"60px",
    duration:2500,
    delay:300,
    reset:true
})

sr.reveal(`.home__data , .about__top,.popular__top ,.review__top,.review__swiper,.footer__icon,.footer__content,.copy__right`)
sr.reveal(".home__image",{delay:500, scale:0.5})


sr.reveal(`.service__card,.popular__card `,{interval:100})
sr.reveal(".about__leaf",{delay:1000,origin:"right"})
sr.reveal(`.about__item__1-content,.about__item__2-img`,{origin:"right"})
sr.reveal(`.about__item__2-content,.about__item__1-img`,{origin:"left"})

sr.reveal(`.review__leaf, .footer__floral`,{delay:1000,origin:"left"})