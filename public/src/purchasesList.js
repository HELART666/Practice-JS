const cardWrapper = document.querySelector('.purchases__items');




window.addEventListener('click', function(event){
    if(event.target.hasAttribute('data-cart')){
        const card = event.target.closest('.items__wrapper');
        

        const productInfo = {
            id: card.dataset.id,
            img: card.querySelector('.items__image').getAttribute('src'),
            name: card.querySelector('.items__name').innerText,
            price: card.querySelector('.items__price').innerText,
            count: card.querySelector('[data-counter]').innerText,
        }



        const itemInCard = cardWrapper.querySelector(`[data-id="${productInfo.id}"]`);
        
        if (itemInCard) {
			const counterElement = itemInCard.querySelector('[data-counter]');
			counterElement.innerText = parseInt(counterElement.innerHTML) + parseInt(productInfo.count);
       } else{
        const cardItemHTML = `<div class="purchases__item" data-id="${productInfo.id}">
        <img src="${productInfo.img}" alt="" class="purchase__icon">
        <div class="purchase__description">
            <div class="purchase__text">
                <div class="purchase__name">${productInfo.name}</div>
                <div class="purchase__price">${productInfo.price}</div>
            </div>
            Count:
            <div class="items__count">
                <button class="count__control" data-action="minus">-</button>
                <div class="count" data-counter="">${productInfo.count}</div>
                <button class="count__control" data-action="plus">+</button>
                <div class="delete" data-action="delete"><img src="img/delete.svg" alt="" class="purchases__delete" ></div>
            </div>
        </div>
</div>
<div class="purchase__sum">Total: </div>`;

    cardWrapper.insertAdjacentHTML('beforeend', cardItemHTML);

       }


       card.querySelector('[data-counter]').innerText = '1';
       toggleCard();
    }
});