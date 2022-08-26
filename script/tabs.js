const tabs = (selector) => {
    const tabsContainer = document.querySelector(selector);
    const buttons = tabsContainer.querySelector('.tabs-buttons');
    const content = tabsContainer.querySelector('.tabs-content');

    const show = e => {
        let button = e.target
        if (button.tagName === 'LI'){
            if (!button.classList.contains('add')){
                [...buttons.children].forEach(el => el.classList.remove('active'))
                button.classList.add('active');
                [...buttons.children].forEach((el, i) => {
                    if (el.classList.contains('active')){
                        showContent(i)
                    }
                })
            }else{
                console.log(button)
                addContentItem();
            }
        }
    }

    const showContent = (i) => {
        [...content.children].forEach(el => el.classList.remove('active'));
        [...content.children].forEach((el, count) => {
            if (count === i) el.classList.add('active');
        })
    }

    const addContentItem = () => {
        let button = document.createElement('li');
        let contentItem = document.createElement('li');

        contentItem.innerText = 'новые элемент';
        button.innerText = 'новый таб';

        content.append(contentItem);
        let addButton = buttons.querySelector('.add');
        addButton.before(button);
    }

    buttons.addEventListener('click', show);
}

tabs('.tabs-container')