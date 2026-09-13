export function efect_text_01() {
    const title = document.querySelector('.header__title');
    const subtitle = document.querySelector('.header__subtitle');

    setTimeout(()=>{
        title.classList.add('active__title');
    }, 200)

    setTimeout(() => {
        subtitle.classList.add('active__subtitle');
    }, 500);
}