let cardPrice = () => {
    const cardWrapper = document.querySelector('.purchases__items');
    const cardItems = document.querySelectorAll('.purchases__item');

    let totalPrice = 0;

    cardItems.forEach(function(item) {
        const amountEl = item.querySelector('[data-counter]').innerHTML;
        const priceEl = item.querySelector('.items__price').innerHTML;

        const currentPrice = parseInt(amountEl) * parseInt(priceEl);

        totalPrice += currentPrice;
    });

    console.log(totalPrice);

}