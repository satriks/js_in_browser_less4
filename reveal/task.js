
window.addEventListener('scroll', reveals)

function reveals() {
    const reveals = document.querySelectorAll('.reveal').forEach( el => task(el))  

    function  task(reveal) {
        const {top, bottom} = reveal.getBoundingClientRect()

        if (bottom < window.innerHeight && top > 0) {
            reveal.classList.add('reveal_active')
        } else (reveal.classList.remove('reveal_active'))

    }
 
}
