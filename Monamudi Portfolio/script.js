/* MOBILE MENU TOGGLE */
function toggleMenu(){
const nav = document.getElementById("navLinks");
nav.classList.toggle("show");
}

/* SMOOTH ACTIVE NAV LINK */
const links = document.querySelectorAll(".nav-links a");

links.forEach(link=>{
link.addEventListener("click",()=>{
document.getElementById("navLinks").classList.remove("show");
});
});

/* FORM SUCCESS MESSAGE */
const form = document.querySelector("form");

if(form){
form.addEventListener("submit", function(){
alert("Message sent successfully!");
});
}