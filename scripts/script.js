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




function openModal() {
    let modal = document.getElementById('myModal');

    modal.style.display = 'block';
}

function closeModal() {
    let modal = document.getElementById('myModal');

    modal.style.display = 'none';
}



function openProductModal() {
    let modal = document.getElementById('myModalProduct');

    modal.style.display = 'block';
}

function closeProductModal() {
    let modal = document.getElementById('myModalProduct');

    modal.style.display = 'none';
}

var lightbox1 = new SimpleLightbox('.gallery1 a', { /* options */ });
var lightbox1_1 = new SimpleLightbox('.gallery1-1 a', { /* options */ });
var lightbox2 = new SimpleLightbox('.gallery2 a', { /* options */ });
var lightbox2_1 = new SimpleLightbox('.gallery2-1 a', { /* options */ });
var lightbox3 = new SimpleLightbox('.gallery3 a', { /* options */ });
var lightbox3_1 = new SimpleLightbox('.gallery3-1 a', { /* options */ });
var lightbox4 = new SimpleLightbox('.gallery4 a', { /* options */ });
var lightbox4_1 = new SimpleLightbox('.gallery4-1 a', { /* options */ });
var lightbox4_2 = new SimpleLightbox('.gallery4-2 a', { /* options */ });
var lightbox5 = new SimpleLightbox('.gallery5 a', { /* options */ });
var lightbox5_1 = new SimpleLightbox('.gallery5-1 a', { /* options */ });
var lightbox6 = new SimpleLightbox('.gallery6 a', { /* options */ });
var lightbox6_1 = new SimpleLightbox('.gallery6-1 a', { /* options */ });


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

var stars = new StarRating('.star-rating');


// let addToCartBtns = document.querySelectorAll('.add-to-cart');
// let cartCount = document.querySelector('.cart-count');
// let count = 0;

// addToCartBtns.forEach((btn) => {
//     btn.addEventListener('click', ()=>{
//         count++;
//         cartCount.innerHTML = count;
//     })
// }
// )