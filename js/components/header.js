export function efect_text_01() {
    const title = document.querySelector('.header__title');
    const subtitle = document.querySelector('.header__subtitle');
    const text = doocument.querySelector('.header__text');

    setTimeout(() => {
        subtitle.classList.add('active__subtitle');
    }, 200);

    setTimeout(()=>{
        title.classList.add('active__title');
    }, 500)

    setTimeout(()=>{
        text.classList.add('active__text');
    })

    
}