const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a");
const scrollBtn = document.querySelector(".scrollToTop-btn");
const projectBtn = document.querySelectorAll(".card-img");
const services = document.querySelectorAll(".services .content .card");
const themeBtn = document.querySelector(".theme-btn");

window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0)
});

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItems) => {
    navigationItems.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        navigation.classList.remove("active");
    });
});

document.addEventListener("click", function(event) {
    if(event.target.closest(".navigation") || event.target.closest(".menu-btn")) return;

    menuBtn.classList.remove("active");
    navigation.classList.remove("active");
});

window.addEventListener("scroll", function() {
    menuBtn.classList.remove("active");
    navigation.classList.remove("active");
});

window.addEventListener("scroll", function(){
    scrollBtn.classList.toggle("active", window.scrollY > 500);
});

scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", reveal);

function reveal(){
    var reveals = document.querySelectorAll(".reveal");

    for(var i=0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 50;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add("active");
        }
    }
}

projectBtn[0].addEventListener("click", () => {
    window.open("https://play.google.com/store/apps/details?id=com.referl.referl");
});
projectBtn[1].addEventListener("click", () => {
    window.open("https://github.com/amalnathm7/Bingo");
});
projectBtn[2].addEventListener("click", () => {
    window.open("https://github.com/amalnathm7/Memoir");
});
projectBtn[3].addEventListener("click", () => {
    window.open("https://github.com/amalnathm7/Bmi_calculator");
});
projectBtn[4].addEventListener("click", () => {
    window.open("https://github.com/amalnathm7/Calculator");
});

services[0].addEventListener("click", () => {
    window.open('mailto:amalnathm7@gmail.com?subject=App Development Project');
})

services[1].addEventListener("click", () => {
    window.open('mailto:amalnathm7@gmail.com?subject=Web Development Project');
})

services[2].addEventListener("click", () => {
    window.open('mailto:amalnathm7@gmail.com?subject=Desktop Development Project');
})