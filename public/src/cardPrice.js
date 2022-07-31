let cardPrice = () => {

	const cardItems = document.querySelectorAll('.purchases__item');
    
    const totalPriceHTML = document.querySelector('.price__total');


    let totalPrice = 0;


    cardItems.forEach(function(item){
        const amountEL = item.querySelector('[data-counter]').innerHTML; 
        const priceEL = item.querySelector('.purchase__price').innerHTML; 
        

        const currentPrice = parseInt(amountEL) * parseInt(priceEL);

        totalPrice += currentPrice;
        

    });


    totalPriceHTML.innerText = totalPrice;

}