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
const sr = ScrollReveal({
    distance:"85px",
    duration:"2500",
    reset:true
})


sr.reveal(".header-text",{delay:300,origin:"top"});
sr.reveal(".header-img",{delay:500,origin:"right",distance:"40px"});
sr.reveal(".about-img",{delay:350,origin:"top",distance:"20px"});
sr.reveal(".about-text",{delay:400,origin:"top",distance:"40px"});
sr.reveal(".middle-text",{delay:200,origin:"left"});
sr.reveal(".col-content",{delay:400,origin:"top",distance:"30px"});
sr.reveal(".plan-content",{delay:200,origin:"top",distance:"10px"});
sr.reveal(".review-card",{delay:400,origin:"right",distance:"30px"});
sr.reveal(".f-links",{delay:400,origin:"top",distance:"20px"});
sr.reveal(".socials",{delay:400,origin:"top",distance:"20px"});