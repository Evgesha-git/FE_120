class Abaut {
    constructor() {
        this.elem = document.createElement('div');
        this.elem.classList.add('abaut');
        this.elem.innerHTML = `<h2>Abaut</h2>`;
        this.title = 'Abaut';
    }

    init() {
        return this.elem
    }
}

let home = new Abaut();
let init = home.init();
let title = home.title;

export default init;
export { title };