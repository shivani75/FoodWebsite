document.querySelector('.menu').addEventListener('click', () => {
    document.querySelectorAll('.target').forEach((item) => {
        item.classList.toggle('change')
    })
})




const icons = document.querySelectorAll('.section1-icons i')
let i = 1
setInterval(() => {
    i++
    const icons = document.querySelector('.section1-icons .change')
    icons.classList.remove('change')
    if (i > icons.length) {
        icons[0].classList.add('change')
        i = 1
    }
    else {
        icons.nextElementSibling.classList.add('change')
    }
}, 4000);

