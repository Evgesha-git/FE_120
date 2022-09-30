class Home {
    constructor() {
        this.elem = document.createElement('div');
        this.elem.classList.add('home');
        this.elem.innerHTML = `<h2>Home</h2>`;
        this.title = 'Home';
    }

    init() {
        return this.elem
    }
}

let home = new Home();
let init = home.init();
let title = home.title;

export default init;
export { title }