import { catalogGetData } from "./api/catalogApi.js"

class Catalog{
    constructor(){
        this.elem = document.createElement('div');
        this.elem.classList.add('catalog');
        this.elem.innerHTML = `<h1>Catalog</h1>`;
        this.cardContainer = document.createElement('div');
        this.cardContainer.classList.add('card_container');
        this.elem.append(this.cardContainer);
        this.data = [];
        this.render();
    }

    async render (){
        let response = await catalogGetData();
        this.data = await response.json();
        this.data.forEach(data => {
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
                import ("./Card.js")
                    .then(module => {
                        if (module.addCard(data)){
                            addButton.innerText = 'Added';
                            addButton.disabled = true;
                        }
                    });
            });

            productCard.append(imgLink, nameLink, price, addButton);
            this.cardContainer.append(productCard);
        });
    }

    init(){
        return this.elem
    }
}

export default new Catalog().init();