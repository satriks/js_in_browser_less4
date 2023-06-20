


function changeAdd() {
    console.log('tik');
   const adds = Array.from(document.querySelectorAll('.rotator__case'))

    adds.forEach( el => {
        el.classList.remove('rotator__case_active')
    })

    adds[Math.floor(Math.random() * adds.length)].classList.add('rotator__case_active')
 
}

setInterval ( changeAdd , 1000)
