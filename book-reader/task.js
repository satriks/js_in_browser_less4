(function () {
    
let sizes = document.querySelectorAll('.font-size')
let colors = document.querySelectorAll('.color')
colors.forEach( el => el.addEventListener('click', changeColor))

sizes.forEach((el) => el.addEventListener('click', chengekSize ))
const textStr = document.querySelector('.book')

function changeColor(event) {

    event.preventDefault()
    
    if (this.dataset.textColor) {
        textColor(this.dataset.textColor)
        this.parentElement.querySelectorAll('.color').forEach(el => el.classList.remove('color_active'))
        this.classList.add('color_active')
    } else if (this.dataset.bgColor) {
        bgColor(this.dataset.bgColor)
        this.parentElement.querySelectorAll('.color').forEach(el => el.classList.remove('color_active'))
        this.classList.add('color_active')
    }

    function textColor(color) {
        
        for (let i of textStr.classList) {
            if (i.startsWith('book_color')) {
                textStr.classList.remove(i)
            }
        }
        textStr.classList.add(`book_color-${color}`)
    }

    function bgColor(color) {
        for (let i of textStr.classList) {
            if (i.startsWith('book_bg')) {
                textStr.classList.remove(i)
            }
        }

        textStr.classList.add(`book_bg-${color}`)
    } 
}

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

})()