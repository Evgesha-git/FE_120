class Catalog{
    constructor(){
        this.elem = document.createElement('div');
        this.elem.classList.add('catalog');
        this.elem.innerHTML = `<h2>Catalog</h2>`
    }

    init(){
        return this.elem
    }
}

export default new Catalog().init();