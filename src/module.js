import "./module.scss";
import logo from "./img/webpack.png";

export default class Post{
    constructor(title, img){
        this.title = title;
        this.img = img;
    }

    toString(){
        return JSON.stringify({
            title: this.title,
            img: this.img
        });
    }
}

export function render(selector){
    const root = document.querySelector(selector);
    const div = document.createElement('div');
    div.innerHTML = `
    <span class="text">Text</span>
    <img src="${logo}" alt="#"/>
    `;
    div.classList.add('square');
    root.append(div);
    console.log(logo);
}