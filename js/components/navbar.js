const nav = document.querySelector('.nav--dropdown');

if (nav) {
    const button = nav.querySelector('.nav__hamburger');
    const menu = nav.querySelector('.nav__menu');

    if (button && menu) {
        button.addEventListener('click', () => {
            const isOpen = menu.classList.toggle('is-open');

            button.setAttribute('aria-expanded', String(isOpen));
            button.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
        });
    }
}
