const gallery = function(selector) {
    const gallery = document.getElementById(selector);
    const galleryContainer = gallery.querySelector('.gallery__preview');
    const close = galleryContainer.querySelector('.gallery__preview_close');

    let elements= gallery.getElementsByClassName('gallery__thumbs')[0].children;

    [...elements].forEach(el => {
        el.addEventListener("click", e => show(e))
    })

    function show (e){
        e.preventDefault();

        let imgRemove = galleryContainer.lastElementChild;
        console.log(imgRemove);

        if (imgRemove.tagName === "IMG"){
            galleryContainer.lastElementChild.remove();
        }

        let href = e.target.parentElement.href;
        let img = document.createElement('img');
        img.setAttribute('src', href);
        galleryContainer.append(img)
        galleryContainer.classList.remove('hide')
    }

    const closeGallery = (e) => {
        e.target.nextElementSibling.remove();
        galleryContainer.classList.add('hide')
    }

    close.addEventListener('click', closeGallery);
};

gallery('gallery'); // id