const toltips = (selector) => {
    const toltipsLink = document.querySelectorAll(selector);

    const show = e => {
        let x = e.target.offsetTop;
        let y = e.target.offsetLeft - 10;
        let text = e.target.title;
        let parent = e.target.parentElement;
        createToltip(text, {x, y}, parent);
    }

    const createToltip = (text, pos, target) => {
        let elem = document.createElement('div');
        elem.classList.add('tooltip_element');
        target.append(elem);
        elem.innerText = text;
        elem.style.top = pos.x - elem.offsetHeight + 'px';
        elem.style.left = pos.y + 'px';
    }

    const hide = () => {
        const toltip = document.querySelector('.tooltip_element');
        toltip.remove();
    }

    [...toltipsLink].forEach(el => {
        el.addEventListener('mouseover', show);
    });

    [...toltipsLink].forEach(el => {
        el.addEventListener('mouseleave', hide);
    });
}

toltips('.toltip_link')