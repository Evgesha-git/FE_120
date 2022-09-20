class Abaut{
    constructor(){
        this.elem = document.createElement('div');
        this.elem.classList.add('abaut');
        this.elem.innerHTML = `<h2>Abaut</h2>`
    }

    init(){
        return this.elem
    }
}

export default new Abaut().init();