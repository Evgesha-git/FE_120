import { text } from "./blablabla";

export default class Abaut{
    constructor(){
        this.title = document.createElement('h2');
        this.title.innerHTML = text;
    }

    init(){
        return this.title;
    }
}