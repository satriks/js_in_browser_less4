
(function () {
    
    let meInter = setInterval ( changeAdd , 1000)

    function changeAdd() {
        const adds = Array.from(document.querySelector('.rotator').querySelectorAll('.rotator__case'))
        
        adds.forEach( el => {
            el.classList.remove('rotator__case_active')
        })

        adds[Math.floor(Math.random() * adds.length)].classList.add('rotator__case_active')


        for (let i of adds) {
            [s1, s2] = i.classList
            if (s2) {
                
                window.clearInterval(meInter)
                let {speed, color} = i.dataset
                i.style.color = color
                meInter = setInterval ( changeAdd , speed)
            }
        }
    }

})()

