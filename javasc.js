const btnMenu = document.getElementById('btnMenu');
const sideMenu = document.getElementById('sideMenu');
const closeMenu = document.getElementById('closeMenu');

btnMenu.addEventListener('click', () => {
    sideMenu.classList.add('open');
});

closeMenu.addEventListener('click', () => {
    sideMenu.classList.remove('open');
});

document.addEventListener('click', (event) => {
    if (!sideMenu.contains(event.target) && !btnMenu.contains(event.target)) {
        sideMenu.classList.remove('open');
    }
});

const container = document.getElementById('container');
const dots = document.querySelectorAll('.dot');

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        dots.forEach(d => d.classList.remove('active'));

        dot.classList.add('active');

        const bg = dot.getAttribute('data-bg');
        container.style.background = `url('${bg}') no-repeat center center/cover`;
    });
});