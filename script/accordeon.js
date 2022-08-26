const accordeon = (selector) => {
    const conteiner = document.querySelector(selector);
    const butons = conteiner.querySelectorAll('.button');
    const contents = conteiner.querySelectorAll('.content');

    const show = e => {
        [...contents].forEach(el => {
            if (e.target.nextElementSibling !== el) el.classList.remove('active')   
        });
        [...butons].forEach(el => {
            if (e.target !== el) el.classList.remove('active')
        });
        e.target.classList.toggle('active')
        e.target.nextElementSibling.classList.toggle('active')
    }

    [...butons].forEach(el => el.addEventListener('click', show));
}

accordeon('.accordeon_container')