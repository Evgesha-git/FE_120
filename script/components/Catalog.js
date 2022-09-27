import { catalogGetData } from "./api/catalogApi.js"

class Catalog {
    constructor() {
        this.mainItem = document.createElement('div');
        this.mainItem.classList.add('catalog_container');
        this.elem = document.createElement('div');
        this.elem.classList.add('catalog');
        this.elem.innerHTML = `<h1>Catalog</h1>`;
        this.cardContainer = document.createElement('div');
        this.cardContainer.classList.add('card_container');
        this.elem.append(this.cardContainer);
        this.mainItem.append(this.elem);
        this.data = [];
        this.cardData = [];
        this.page = 1;
        this.pagination();
    }

    async pagination() {
        let response = await catalogGetData();
        this.data = await response.json();

        let contentPerPage = 8;
        let count = this.data.length;
        let pageCount = Math.ceil(count / contentPerPage);
        let lastContentIndex = this.page * contentPerPage;
        let firstContentIndex = lastContentIndex - contentPerPage;

        this.cardData = this.data.slice(firstContentIndex, lastContentIndex);

        const changePage = (direction) => {
            if (direction) {
                if (this.page === pageCount) {
                    this.page = pageCount
                    getDataCard(this.page);
                    this.renderButtons(pages, pageCount, setPage);
                    return;
                }
                this.page += 1;
                getDataCard(this.page);
                this.renderButtons(pages, pageCount, setPage);
            } else {
                if (this.page === 1) {
                    this.page = 1
                    getDataCard(this.page);
                    this.renderButtons(pages, pageCount, setPage);
                    return;
                }
                this.page -= 1;
                getDataCard(this.page);
                this.renderButtons(pages, pageCount, setPage);
            }
        }

        const setPage = (num) => {
            if (num > pageCount) {
                this.page = pageCount;
                getDataCard(this.page);
                this.renderButtons(pages, pageCount, setPage);
            } else if (num < 1) {
                this.page = 1;
                getDataCard(this.page);
                this.renderButtons(pages, pageCount, setPage);
            } else {
                this.page = num;
                getDataCard(this.page);
                this.renderButtons(pages, pageCount, setPage);
            }
        }

        const getDataCard = (num) => {
            lastContentIndex = num * contentPerPage;
            firstContentIndex = lastContentIndex - contentPerPage;
            this.cardData = this.data.slice(firstContentIndex, lastContentIndex);
            this.render();
        }

        let pagination = document.createElement('div');
        pagination.classList.add('pagination');
        let next = document.createElement('button');
        next.innerHTML = `&rarr;`;
        let prev = document.createElement('button');
        prev.innerHTML = `&larr;`;
        
        let pages = document.createElement('div');
        pages.classList.add('pages');

        this.renderButtons(pages, pageCount, setPage);
        next.addEventListener('click', () => changePage(true));
        prev.addEventListener('click', () => changePage(false));

        pagination.append(prev, pages, next);
        this.mainItem.append(pagination);
        this.render();
    }

    renderButtons(elem, pageCount, fn){
        elem.innerHTML = '';
        [...Array(pageCount).keys()].forEach(btn => {
            let button = document.createElement('button');
            button.innerText = btn + 1;
            button.addEventListener('click', () => fn(btn + 1));
            button.disabled = this.page === btn + 1;
            elem.append(button);
        });
    }

    async render() {
        // let response = await catalogGetData();
        // this.data = await response.json();
        this.cardContainer.innerHTML = '';
        this.cardData.forEach(data => {
            let productCard = document.createElement('div');
            productCard.classList.add('card');

            let imgLink = document.createElement('a');
            imgLink.classList.add('card_img');
            imgLink.setAttribute('href', `#catalog/${data.id}`);

            let img = document.createElement('img');
            img.setAttribute('src', data.category.image);
            // img.setAttribute('src', './img/daniel-korpai-oOlPR-Fwd7A-unsplash.jpg');

            imgLink.append(img);

            let nameLink = document.createElement('a');
            nameLink.classList.add('card_title');
            nameLink.setAttribute('href', `#catalog/${data.id}`);
            nameLink.innerText = data.title;

            let price = document.createElement('p');
            price.classList.add('price_card');
            price.innerText = `price: ${data.price}`;

            let addButton = document.createElement('button');
            addButton.classList.add('add_button');
            addButton.innerText = 'Add';

            addButton.addEventListener('click', () => {
                import("./Card.js")
                    .then(module => {
                        if (module.addCard(data)) {
                            addButton.innerText = 'Added';
                            addButton.disabled = true;
                        }
                    });
            });

            productCard.append(imgLink, nameLink, price, addButton);
            this.cardContainer.append(productCard);
        });
    }

    init() {
        return this.mainItem
    }
}

export default new Catalog().init();