class Header {
    constructor() {
        this.elem = document.createElement('header');
        this.createElem();
    }

    createElem() {
        this.elem.setAttribute('class', 'header_component');
        this.elem.innerHTML = `
            <div class="logo">
                <a href="\">
                    <img src="https://via.placeholder.com/150x60" alt="">
                </a>
            </div>
            <nav>
                <ul>
                    <li><a href="\">Home</a></li>
                    <li><a href="#catalog">Catalog</a></li>
                    <li><a href="#abaut">Abaut</a></li>
                </ul>
            </nav>
            <div class="widget">
                <span>Корзина</span>
                <span>0</span>
            </div>
        `
    }

    init(){
        return this.elem
    }
}

export default new Header().init();