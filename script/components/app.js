import Header from "./Header.js";
import Footer from "./Footer.js";
import Main from "./Main.js";

class App{
    constructor(selector){
        this.root = document.querySelector(selector);
        this.elem = document.createElement('div');
        this.elem.innerHTML = `
        <h2>Header</h2>
        <h2>Main</h2>
        <h2>Footer</h2>
        `
    }

    render(...elem){
        elem.forEach(el => this.root.append(el));
    }

    init(){
        this.render(Header, Main, Footer);
    }
}

export default App;