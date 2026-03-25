// navbar shadow on scroll

window.addEventListener("scroll", function(){

let navbar = document.querySelector(".navbar");

if(window.scrollY > 50){
navbar.style.background = "#020617";
}

else{
navbar.style.background = "rgba(0,0,0,0.4)";
}

});