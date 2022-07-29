let toggleCard = () => {
    
    const listWrapper = document.querySelector('.purchases__items');
    const listEmpty = document.querySelector('[data-list-empty]');


    if(listWrapper.children.length > 1){
        listEmpty.classList.add('none');
    } else{
        listEmpty.classList.remove('none');
    }

}