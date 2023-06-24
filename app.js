const nav=document.querySelector("nav");
window.addEventListener("scroll",function(){
    nav.classList.toggle("scrolled",window.scrollY>10)
})

let menu=document.querySelector("#menu-btn");
let navlist=document.querySelector(".navlist");

menu.onclick=function(){
 menu.classList.toggle("bx-x");
 navlist.classList.toggle("hidden")
}
window.onscroll=()=>{
 menu.classList.remove("bx-x");
 navlist.classList.remove("hidden")
}
const scroll1 = ScrollReveal({
    origin:"top",
    distance:"85px",
    duration:"2500",
    reset:true
})
const scroll2 = ScrollReveal({
    origin:"right",
    distance:"85px",
    duration:"2500",
    reset:true
})
scroll1.reveal(".header-text",{delay:300});
scroll2.reveal(".header-img",{delay:300});
