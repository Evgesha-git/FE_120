const slider = (selector) => {
    let container = document.querySelector(selector);
    let ul = container.querySelector('ul');
    if(!ul) return;

    let slides = ul.querySelectorAll('li');
    if (!slides || !slides.length > 1) return;

    const switchSlide = (e) => {
        let saveNext = e.target.classList.contains('btn-next') ? 'next' : 'prev';

        let x = ul.style.transform || '0';
        console.log(x);
        console.log(saveNext);

        x = x.replace('translateX(', '');
        x = x.replace(')', '');
        x = Math.abs(parseInt(x));

        if (saveNext === 'next'){
            if (x < ((slides.length * 100) - 100)){
                x += 100;
            }else{
                x = 0;
            }
        }

        if (saveNext === 'prev'){
            if (x > 0){
                x -= 100;
            }else{
                x = (slides.length * 100) - 100;
            }
        }

        ul.style.transform = `translateX(-${x}%)`;
    }

    let btns = container.querySelectorAll('.btn');
    btns.forEach(btn => btn.addEventListener('click', e => switchSlide(e)));
}

slider('.my-slider');