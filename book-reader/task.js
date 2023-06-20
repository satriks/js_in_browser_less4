
let sizes = document.querySelectorAll('.font-size')
sizes.forEach((el) => el.addEventListener('click', chengekSize ))
const textStr = document.querySelector('.book__content')



function chengekSize(event) {
    event.preventDefault()


    sizes.forEach ( el => {
    if (Array.from(el.classList).includes('font-size_active')) {
        el.classList.remove('font-size_active')
    }})
    
    switch (this.dataset.size) {
        case 'big':
            textStr.classList.add('book_fs-big')
            textStr.classList.remove('book_fs-small')
            this.classList.add('font-size_active')
            break;
        
        case 'small':
            textStr.classList.add('book_fs-small')
            textStr.classList.remove('book_fs-big')
            this.classList.add('font-size_active')
            break;    
    
        default:
            textStr.classList.remove('book_fs-small')
            textStr.classList.remove('book_fs-big')
            this.classList.add('font-size_active')
            break;
    }
}