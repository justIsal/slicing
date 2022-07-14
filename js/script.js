const atas = document.querySelector('.top');

window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 20);
});

atas.addEventListener('click', function() {
    return location.href='#about';
});
