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