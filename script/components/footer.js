class Footer{
    constructor(){
        this.elem = document.createElement('footer');
        this.elem.classList.add('footer_component');
        this.elem.innerHTML = `
            <h2>Bla bla bla</h2>
        `
    }

    init(){
        return this.elem;
    }
}

export default new Footer().init();