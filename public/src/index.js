new Swiper('.swiper-container', {
    loop: true,
    autoplay:{
        delay: 1500,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    speed: 500,
    navigation:{
        nextEl: ('.swiper-button-next'),
        prevEl: ('.swiper-button-prev'),
    },
    pagination:{
        el: ('.swiper-pagination2'),
        clickable: true,
    },
});

const mobileMenuButton = document.querySelectorAll('.menu__mobile');
const modal = document.querySelector('.modal__window__container');
const modalList = document.querySelectorAll('.modal__item');
const modalLink = document.querySelectorAll('.modal__link');
const swiperControls = document.querySelector('.swiper-controls');
const heightElem = document.querySelectorAll('.items__wrapper');
const buttonValue = document.querySelectorAll('.else__fastsearch_button');
const searchInput = document.querySelector('.search__input');
const list = document.querySelectorAll('.list__items');
const content = document.querySelectorAll('.content');
const search = document.querySelector('#search');
const searchMenu = document.querySelector('.menu__input');
const logo = document.querySelector('.header__logo');
const listImage = document.querySelectorAll('.collap__img');
const headerMenu = document.querySelector('.menu__list');
const coll = document.querySelectorAll(".collapsible");
const listFooter = document.querySelectorAll('.list__footer');
const closePurchase = document.querySelector('.purchases__close');
const modalPurchase = document.querySelector('.purchases');
const purchases = document.querySelector('#purchases');

closePurchase.addEventListener('click', function(){
    modalPurchase.classList.add('hidden');
});

purchases.addEventListener('click', function(){
    modalPurchase.classList.remove('hidden');
});

let availableScreenWidth;
let outerScreenWidth;
document.querySelector('.menu__mobile').addEventListener('click', function(){
    modal.classList.remove("hidden");
    swiperControls.classList.add("hidden");
    let i = 0;
    let id = setInterval(() => {   
        modalList[i].classList.remove("hidden__list"); 
        modalLink[i].classList.add("open"); 
        i++; 
        if(i === modalList.length){
            clearInterval(id);
        }
    }, 200);
    i = 0;
});

document.querySelector('.menu__close').addEventListener('click', function(){
    modal.classList.add("hidden");
    swiperControls.classList.remove("hidden");
    let i = 3;
    let id = setInterval(() => {   
        modalList[i].classList.add("hidden__list"); 
        modalLink[i].classList.remove("open"); 
        i--; 
        if(i == 0){
            modalList[i].classList.add("hidden__list"); 
            modalLink[i].classList.remove("open"); 
            clearInterval(id);
        }
    }, 200);
    i = 3;
});

function addNum(el) {
    searchInput.value = el.textContent;
}


window.addEventListener("resize", function() {
    availableScreenWidth = window.screen.availWidth;
    searchMenu.style.maxWidth = 0 + "px";
    if (window.matchMedia("(max-width: 975px)").matches) {
        for(let i = 0; i < content.length; i++){
            content[i].style.maxHeight = null;
           }
        for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            listImage[i].classList.toggle('rotate');
            this.classList.toggle("active");
            let content = this.nextElementSibling;
            if (content.style.maxHeight){
            content.style.maxHeight = null;
            } else {
            content.style.maxHeight = content.scrollHeight + "px";
            } 
        });
}
    } else {
        for(let i = 0; i < content.length; i++){
            content[i].style.maxHeight = "147" + "px";
           }
    }
});






search.addEventListener('click', function(){
    availableScreenWidth = window.screen.availWidth;
    outerScreenWidth = window.outerWidth;
    if(outerScreenWidth < 1136){
        headerMenu.classList.toggle("logo__hidden");
    }
    if(availableScreenWidth < 1136){
        headerMenu.classList.toggle("logo__hidden");
    }
    if(availableScreenWidth < 625){
        logo.classList.toggle("logo__hidden");
    }
    if(searchMenu.style.maxWidth == 200 + "px"){
        searchMenu.style.maxWidth = 0 + "px";
    } else{
        searchMenu.style.maxWidth = 200 + "px";
    }
});

window.onscroll = function (e) {  
    searchMenu.style.maxWidth = 0 + "px";
} 

buttonValue.forEach(div => { 
      div.addEventListener('click', () => addNum(div));
});


let ro = new ResizeObserver(entries => {
    for (let entry of entries) {
      const cr = entry.contentRect;
    //   console.log('Element:', entry.target);
    //   console.log(`Element size: ${cr.width}px x ${cr.height}px`);
    //   console.log(`Element padding: ${cr.top}px ; ${cr.left}px`);
      availableScreenWidth = window.screen.availWidth;
            searchMenu.style.maxWidth = 0 + "px";
            if (window.matchMedia("(max-width: 975px)").matches) {
                for(let i = 0; i < content.length; i++){
                    content[i].style.maxHeight = null;
                   }
                for (let i = 0; i < coll.length; i++) {
                coll[i].addEventListener("click", function() {
                    listImage[i].classList.toggle('rotate');
                    this.classList.toggle("active");
                    let content = this.nextElementSibling;
                    if (content.style.maxHeight){
                    content.style.maxHeight = null;
                    } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                    } 
                });
        }
            } else {
                for(let i = 0; i < content.length; i++){
                    content[i].style.maxHeight = "147" + "px";
                   }
            }
    }
  });
  
ro.observe(coll[0]);

