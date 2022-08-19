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
    });

    function createtooltip(e){
        let elem = document.createElement('div');
        elem.classList.add('tooltip-element');
        elem.innerText = e.target.title;

        document.body.append(elem);
    }
}

tooltip();