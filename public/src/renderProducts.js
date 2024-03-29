const productsContainer = document.querySelector('#products-container');
const deleteButton = document.querySelector('.delete');
const form = document.getElementById('form');
const listWrapper = document.querySelector('.purchases__items');
const listTotalPrice = document.querySelector('.purchases__price');

listTotalPrice.classList.add('nones');

let getStr = `/posts`;

let ascending = "";
let descending = "";


cardPrice();

let resp = form.querySelector('#selectID').value; 
let priceGTE = form.querySelector('#inputGTE').value; 
let priceLTE = form.querySelector('#inputLTE').value; 

form.addEventListener('change', function(){
    resp = form.querySelector('#selectID').value; 
    priceGTE = form.querySelector('#inputGTE').value; 
    priceLTE = form.querySelector('#inputLTE').value; 
});

form.addEventListener('submit', function(event){
    event.preventDefault();    

    const name = form.querySelector('#selectID'); 

    const GTE = form.querySelector('#inputGTE'); 
    const LTE = form.querySelector('#inputLTE'); 

    
    
    const data = {
        name: name.value,
        gte: GTE.value,
        lte: LTE.value,
    };

    resp = data.name;
    priceGTE = data.gte;
    priceLTE = data.lte;
    
    return data;
});



getProducts(getStr);

let counter = 1;


let deleteItems = () =>{
    const items = document.querySelectorAll('.items__wrapper');

    for(let i = 0; i < items.length; i++){
        items[i].remove();
    }
}


window.addEventListener('click', function(event){

    if(sortByAscending.checked){
        ascending = "ascending";
    } else{
        ascending = "";
    }
    if(sortByDescending.checked){
        descending = "descending";
    } else{
        descending = "";
    }
    if(event.target.dataset.action === "productsButton"){
        const products = document.querySelector('.most__selled');
        let topPx = products.getBoundingClientRect().top;
        console.log(topPx);
        
            window.scrollTo({
                top: topPx,
                left: 0,
                behavior: "smooth",
            });

    }

    if(event.target.dataset.action === "get"){
        console.log
        deleteItems();
        if(priceGTE.length == 0 && priceLTE.length == 0){
            getStr = `/posts?manufacturer=${resp}`;
            if(ascending.length > 0){
                getStr += `&_sort=price&_order=asc`;
            }
            if(descending.length > 0){
                getStr += `&_sort=price&_order=desc`;
            }
            getProducts(getStr);
        } else if(priceGTE.length == 0 && priceLTE.length != 0){
            getStr = `/posts?manufacturer=${resp}&price_lte=${parseInt(priceLTE)}`;
            if(ascending.length > 0){
                getStr += `&_sort=price&_order=asc`;
            }
            if(descending.length > 0){
                getStr += `&_sort=price&_order=desc`;
            }
            getProducts(getStr);
        }
         else if(priceLTE.length == 0){
            getStr = `/posts?manufacturer=${resp}&price_gte=${parseInt(priceGTE)}`;
            if(ascending.length > 0){
                getStr += `&_sort=price&_order=asc`;
            }
            if(descending.length > 0){
                getStr += `&_sort=price&_order=desc`;
            }
            getProducts(getStr);
        } else if(priceLTE.length != 0 && priceGTE.length != 0){
            getStr = `/posts?manufacturer=${resp}&price_gte=${parseInt(priceGTE)}&price_lte=${parseInt(priceLTE)}`;
            if(ascending.length > 0){
                getStr += `&_sort=price&_order=asc`;
            }
            if(descending.length > 0){
                getStr += `&_sort=price&_order=desc`;
            }
            getProducts(getStr);
        }
     }
     if(event.target.dataset.action === "reset"){
        deleteItems();
        getProducts('/posts');
     }


    
    if(event.target.dataset.action === "plus" || event.target.dataset.action === "minus"){
        const countWrapper = event.target.closest('.items__count');
        counter = countWrapper.querySelector('[data-counter]');
    }

    if(event.target.dataset.action === "delete"){
        event.target.closest('.purchases__item').remove();
        toggleCard();
        cardPrice();
    }
   

    

     if(event.target.dataset.action === "plus"){
        counter.innerText = ++counter.innerText;
    
     }
     if(event.target.dataset.action === "minus"){

        counter.innerText = --counter.innerText;
        
        if(event.target.closest('.purchases__items') && parseInt(counter.innerText) === 0){
            event.target.closest('.purchases__item').remove();
            toggleCard();
            cardPrice();
        }
     }
     if(event.target.hasAttribute('data-action') && event.target.closest('.purchases__items')){
        cardPrice();
    }

});

async function getProducts(get) {
    const response = await fetch(get);
    const productsArray = await response.json();

    renderProducts(productsArray);
}


let renderProducts = (productsArray) => {
    productsArray.forEach(function(item){
        const productHTML = `<div class="items__wrapper" data-id="${item.id}">
        <img src="img/${item.img}" alt="" class="items__image">
        <div class="items__name">${item.name}</div>
        <div class="items__description">${item.title}</div>
        <div class="items__price">${item.price} USD</div>
        <div class="items__count">Count:
                                <button class="count__control" data-action="minus">-</button>
                                <div class="count" data-counter>${counter}</div>
                                <button class="count__control" data-action="plus">+</button>
                            </div>
                            <div class="item__button" data-cart><a href="#" class="item__button__link" data-cart >Buy</a></div>
    </div>`;

    productsContainer.insertAdjacentHTML('beforeend', productHTML);

    })
}