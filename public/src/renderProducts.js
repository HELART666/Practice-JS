const productsContainer = document.querySelector('#products-container');
const deleteButton = document.querySelector('.delete');


getProducts();

let counter = 1;



window.addEventListener('click', function(event){
    
    if(event.target.dataset.action === "plus" || event.target.dataset.action === "minus"){
        const countWrapper = event.target.closest('.items__count');
        counter = countWrapper.querySelector('[data-counter]');
    }

    if(event.target.dataset.action === "delete"){
        event.target.closest('.purchases__item').remove();
        toggleCard();
    }

    

     if(event.target.dataset.action === "plus"){
        counter.innerText = ++counter.innerText;
    
     }
     if(event.target.dataset.action === "minus"){

        counter.innerText = --counter.innerText;
        
        if(event.target.closest('.purchases__items') && parseInt(counter.innerText) === 0){
            event.target.closest('.purchases__item').remove();
            toggleCard();
        }
        

     }
});

async function getProducts() {
    const response = await fetch('/posts');
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