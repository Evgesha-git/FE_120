if (popup) popup();


const tabs = (selector) => {
    const tabContainer = document.querySelector(selector);

    let tabs = tabContainer.querySelector('.tabs').children;
    if (tabs.length === 0) return;
    let tabsContent = tabContainer.querySelector('.tab-content').children;
    if(tabsContent.length === 0) return;

    [...tabs].forEach((elem, i) => {
        elem.addEventListener('click', () => show(i));
    });

    function show(i){
        [...tabs].forEach((elem, i) => {
            elem.classList.remove('active');
            tabsContent[i].classList.remove('active');
        });

        tabs[i].classList.add('active');
        tabsContent[i].classList.add('active');
    }
}

tabs('.tabs-container');

const tooltip = () => {
    let elems = document.querySelectorAll('.tooltip');

    [...elems].forEach(item => {
        item.addEventListener('mouseenter', e => {
            createtooltip(e);
        });
        item.addEventListener('mouseleave', e => {
            let tooltipElem = document.querySelector('.tooltip-element');
            tooltipElem.remove();
        });
    });

    function createtooltip(e){
        let elem = document.createElement('div');
        elem.classList.add('tooltip-element');
        elem.innerText = e.target.title;

        e.target.parentNode.append(elem);

        let x = e.target.offsetLeft - 10;
        let y = e.target.offsetTop;
        let w = e.target.offsetWidth + 30;

        elem.style.width = w + 'px';

        console.log(elem.offsetHeight)

        if (elem.offsetHeight + 18 > e.clientY){
            y += e.target.offsetHeight + 6;
        }else{
            y -= e.target.offsetHeight + elem.offsetHeight - 18;
        }

        elem.style.top = y + 'px';
        elem.style.left = x + 'px';
    }
}

tooltip();