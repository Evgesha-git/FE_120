import { getItemData } from "./api/catalogApi.js"

class ProductCard{
    constructor(id){
        this.elem = document.createElement('div');
        this.elem.classList.add('product_card');
        this.id = id;
        this.render();
    }

    async render (){
        this.elem.innerHTML = '';
        let resp = await getItemData(this.id);
        let data = await resp.json();

        let imgContainer = document.createElement('div');
        imgContainer.classList.add('img_container');

        let sliderMain = document.createElement('ul');
        sliderMain.classList.add('slider');

        data.images.forEach(imgSrc => {
            let li = document.createElement('li');
            li.classList.add('slide_elem');

            let div = document.createElement('div');
            div.classList.add('img');

            let img = document.createElement('img');
            img.setAttribute('src', imgSrc);

            div.append(img);
            li.append(div);
            sliderMain.append(li);
        });

        imgContainer.append(sliderMain);

        let title = document.createElement('h1');
        title.classList.add('product_title')
        title.innerText = data.title;

        let description = document.createElement('p');
        description.classList.add('product_description');
        description.innerText = data.description;

        let price = document.createElement('p');
        price.classList.add('product_price');
        price.innerText = `Price: ${data.price}`;

        this.elem.append(imgContainer, title, description, price);
    }

    init(){
        return this.elem;
    }
}

export default ProductCard;