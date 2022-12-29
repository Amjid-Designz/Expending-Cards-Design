const panles = document.querySelectorAll('.panle')

panles.forEach((panle) => {
    panle.addEventListener('click', () => {
        removeActiveClass()
        panle.classList.add('active')
    })
});

function removeActiveClass () {
    panles.forEach( panle =>{
        panle.classList.remove('active')
    })
}