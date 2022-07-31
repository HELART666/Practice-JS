let cardPrice = () => {

	const cardItems = document.querySelectorAll('.purchases__item');
    let totalPrice = 0;


    cardItems.forEach(function(item){
        const amountEl = item.querySelector('[data-counter]').innerText;
        const priceEl = item.querySelector('.purchase__price').innerText;


        totalPrice += parseInt(amountEl) * parseInt(priceEl);
        console.log(totalPrice);

    });
}