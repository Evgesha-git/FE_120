function popup() {
    let elems = document.querySelectorAll('[data-type]');

    const show = (content) => {
        let popupElem = document.createElement('div');
        let popupModal = document.createElement('div');
        let popupClose = document.createElement('div');
        let popupContent = document.createElement('div');

        popupElem.classList.add('popup');
        popupModal.classList.add('popup-modal');
        popupClose.classList.add('popup-close');
        popupContent.classList.add('popup-content');

        popupClose.innerHTML = '&#215;';
        popupContent.append(content);

        popupModal.append(popupClose, popupContent);
        popupElem.append(popupModal);
        document.body.append(popupElem);

        popupElem.addEventListener('click', close);
    }

    const close = (e) => {
        if (!e.target.classList.contains('popup') && !e.target.classList.contains('popup-close')) return;

        let popup = document.querySelector('.popup');
        if (!popup) return;

        popup.remove();
    }

    const clickHandler = (e) => {
        e.preventDefault();

        let elem = e.target;
        let type = elem.dataset.type;

        if (!type) {
            let parent = elem.closest('[data-type]');

            if (!parent) return;

            type = parent.dataset.type;

            if (!type) return;

            elem = parent;
        }

        let content = '';

        if (type === 'zoom') {
            const href = elem.href;
            if (!href) return;

            let img = document.createElement('img');
            img.setAttribute('src', href);
            img.setAttribute('alt', '#');

            content = img;
        }

        if (type === 'content') {
            let id = elem.dataset.id;

            if (!id) {
                content = elem.title;
            }

            if (id !== 'video') {
                const idContent = document.getElementById(id).children[0];
                if (!idContent) return;

                content = idContent;
            }

            if (id === 'video'){
                let href = elem.href;
                let iframe = document.createElement('iframe');
                iframe.setAttribute('width', '560');
                iframe.setAttribute('height', '315');
                iframe.setAttribute('src', href);
                iframe.setAttribute('title', 'YouTube video player');
                iframe.setAttribute('frameborder', '0');
                iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
                iframe.setAttribute('allowfullscreen', true);
                content = iframe
            }
        }

        show(content);
    }

    elems.forEach(elem => elem.addEventListener('click', clickHandler));
}