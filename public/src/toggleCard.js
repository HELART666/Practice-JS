let toggleCard = () => {
    
    const listWrapper = document.querySelector('.purchases__items');
    const listEmpty = document.querySelector('[data-list-empty]');
    const listTotalPrice = document.querySelector('.purchases__price');

    if(listWrapper.children.length > 1){
        listEmpty.classList.add('none');
        listTotalPrice.classList.remove('nones');
    } else{
        listEmpty.classList.remove('none');
        listTotalPrice.classList.add('nones');
    }

}