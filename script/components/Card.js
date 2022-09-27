class Card {
    constructor() {
        this.widget = document.createElement('div');
        this.widget.classList.add('card_widget');
        this.card = [];
        this.totalPrice = 0;
        this.addCard = this.addCard.bind(this);
        this.cardContainer = document.createElement('div');
        this.cardContainer.classList.add('card_container');
        this.total = document.createElement('div');
        this.total.classList.add('total_price');
    }


    render() {
        this.cardContainer.innerHTML = '';

        this.card.forEach(item => {
            let cardElem = document.createElement('div');
            cardElem.classList.add('card_elem');
            cardElem.innerHTML = `
            <div class="img">
                <img src="${item.category.image}" alt="">
            </div>
            <p class="title">${item.title}</p>
            <p class="price">Price: ${item.price}</p>
            `
            let counter = document.createElement('input');
            counter.setAttribute('type', 'number');
            counter.value = item.count;
            counter.addEventListener('change', () => {
                if (counter.value <= 0) {
                    if (confirm('Вы действительно хотите удалить товар?')) {
                        this.card = this.card.filter(elem => elem.id !== item.id);
                        this.render();
                    } else {
                        counter.value = 1;
                    }
                } else {
                    item.count = counter.value;
                    // Место для вызова финальной стоимости
                    this.#getTotalPrice();
                }
            });

            cardElem.append(counter);
            this.cardContainer.append(cardElem);
        });
        this.cardContainer.append(this.total);
        this.#getTotalPrice();
    }

    #getTotalPrice() {
        this.total.innerHTML = '';
        this.totalPrice = this.card.reduce((total, item) => {
            return total += (item.price * item.count);
        },0);
        this.total.innerHTML = `<p>Total price: ${this.totalPrice}`;
    }

    addCard(obj) {
        if (obj) {
            obj.count = 1;
            this.card.push(obj);
        }

        let counter = this.widget.lastElementChild;
        counter.innerText = this.card.length;

        let flag = this.card.some(data => data.id === obj.id);
        this.render();
        return flag;
    }

    cardWidget() {
        this.widget.innerHTML = `
            <a href="#Card">Корзина</a>
            <span>${this.card.length}</span>
        `
        return this.widget;
    }

    init(){
        this.render();
        return this.cardContainer;
    }
}

let card = new Card();
let widget = card.cardWidget();
let addCard = card.addCard;
let def = card.init();

export default def;
export { widget, addCard };