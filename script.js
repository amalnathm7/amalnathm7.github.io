const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a");
const scrollBtn = document.querySelector(".scrollToTop-btn");
const projectBtn = document.querySelectorAll(".card-img");
const services = document.querySelectorAll(".services .content .card");
const themeBtn = document.querySelector(".theme-btn");
const header = document.querySelector("header");
let splash = document.querySelector(".splash");
let splAmal = document.querySelectorAll(".splash-amal");

window.addEventListener("scroll", function(){
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

function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;
  
    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows';
    } else if (/Android/.test(userAgent)) {
      os = 'Android';
    } else if (/Linux/.test(platform)) {
      os = 'Linux';
    }
  
    return os;
}

projectBtn[0].addEventListener("click", () => {
    window.open("https://play.google.com/store/apps/details?id=com.tkmce.hestia22");
});
if(getOS() == 'Mac OS' || getOS == 'iOS') {
    projectBtn[1].addEventListener("click", () => {
        window.open("https://apps.apple.com/us/app/canadianfax/id1620488890");
    });
} else {
    projectBtn[1].addEventListener("click", () => {
        window.open("https://play.google.com/store/apps/details?id=com.canadian.fax");
    });
}
projectBtn[2].addEventListener("click", () => {
    window.open("https://github.com/amalnathm7/Quark");
});
projectBtn[3].addEventListener("click", () => {
    window.open("https://do-it.en.uptodown.com/android");
});
projectBtn[4].addEventListener("click", () => {
    window.open("https://github.com/amalnathm7/Google-Meet-Clone/raw/main/app-arm64-v8a-release.apk");
});
projectBtn[5].addEventListener("click", () => {
    window.open("https://play.google.com/store/apps/details?id=com.referl.referl");
});
projectBtn[6].addEventListener("click", () => {
    window.open("https://www.amazon.com/gp/product/B093THT2VY");
});
projectBtn[7].addEventListener("click", () => {
    window.open("https://github.com/amalnathm7/Memoir/raw/main/Memoir.exe");
});
projectBtn[8].addEventListener("click", () => {
    window.open("https://www.amazon.com/gp/product/B093T9W9CZ");
});
projectBtn[9].addEventListener("click", () => {
    window.open("https://www.amazon.com/gp/product/B093SXHL9Z");
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

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        splAmal.forEach((span, i) => {
            setTimeout(() => {
                span.classList.add("active");
            }, (i + 1) * 600)
        })

        setTimeout(() => {
            splAmal.forEach((span, i) => {
                setTimeout(() => {
                    span.classList.remove("active");
                    span.classList.add("fade");
                }, (i + 1) * 50)
            })
        }, 2000)

        setTimeout(() => {
            splash.style.top = '-100vh';
            header.classList.remove("splash");
            scrollBtn.classList.remove("splash");
        }, 2300)
    })
})