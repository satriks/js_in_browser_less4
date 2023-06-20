
window.addEventListener('scroll', reveals)

function reveals() {
    console.log('reveals');
    const reveals = document.querySelectorAll('.reveal').forEach( el => task(el))  

    function  task(reveal) {
        const {top, bottom} = reveal.getBoundingClientRect()

        if (bottom < window.innerHeight && top > 0) {
            reveal.classList.add('reveal_active')
            console.log('ok bot');
            console.log( reveal.classList);
        } else (reveal.classList.remove('reveal_active'))

    }
 
}
