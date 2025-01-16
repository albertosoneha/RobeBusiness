const button = document.querySelector('.trigger'),
    addClass = document.querySelector('nav');
button.addEventListener('click', function() {
    addClass.classList.toggle('show')
})

const submenu = document.querySelectorAll('.has-child')
    submenu.forEach((menu) => menu.addEventListener('click', toggle));

    function toggle() {
        submenu.forEach((item) => item != this ? item.classList.remove('expand') : null);
        if (this.classList != 'expand') {
            this.classList.toggle('expand')
        }
    }


// animação dos ítens ao fazer o scroll
const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('this')
        }
    });
})
const boxEllist = document.querySelectorAll('.animate');
boxEllist.forEach((el) => {
    io.observe(el)
})