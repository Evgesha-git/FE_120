class Card {
    constructor() {
        this.widget = document.createElement('div');
        this.widget.classList.add('card_widget');
        this.card = [];
        this.totalPrice = 0;
        this.addCard = this.addCard.bind(this);
    }

    addCard(obj){
        if (obj){
            obj.count = 0;
            this.card.push(obj);
        }

        let counter = this.widget.lastElementChild;
        counter.innerText = this.card.length;

        let flag = this.card.some(data => data.id === obj.id);
        return flag;
    }

    cardWidget() {
        this.widget.innerHTML = `
            <a href="#card">Корзина</a>
            <span>${this.card.length}</span>
        `
        return this.widget;
    }
}

let card = new Card();
let widget = card.cardWidget();
let addCard = card.addCard;

export { widget, addCard };