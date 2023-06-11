window.onscroll = function(){
    myFunction()
};

let header = document.getElementById('myHeader');
let sticky = header.offsetTop;

function myFunction(){
    if (window.pageYOffset > sticky){
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header_menu");
const hamColor = document.querySelectorAll(".bar");
const fixatedBody = document.body;
const logo = document.querySelector(".logo")
let cnt = 0

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    fixatedBody.classList.toggle('body-fixated');
    hamColor.forEach(element => {
        hamColor[0].classList.toggle("active");
        hamColor[2].classList.toggle("active");
    });
    cnt += 1
    console.log(cnt)
    if (cnt%2 == 1) {
        logo.classList.toggle("active");
        logo.src = "images/logo_white.svg";
    } else {
        logo.classList.remove("active");
        logo.src = "images/logo.svg";
    }
    
    
    
})

document.querySelectorAll(".header_menu_item").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    fixatedBody.classList.remove('body-fixated');
    hamColor.forEach(element => {
        hamColor[0].classList.remove("active");
        hamColor[2].classList.remove("active");
    });
    cnt += 1
    logo.classList.remove("active");
    logo.src = "images/logo.svg";
    
    
}))

// document.querySelector(".hamburger.active").addEventListener("click", () => {
//     console.log("1")
//     logo.src = "/images/logo.svg"
//     logo.classList.remove("active")
// })