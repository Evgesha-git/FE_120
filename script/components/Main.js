import preloader from "./modules/preloader.js";

class Main {
    constructor() {
        this.main = document.createElement('main');
        this.main.classList.add('main_component');
        this.routing = this.routing.bind(this);
        this.initConponent();
    }

    routing() {
        let hash = location.hash.slice(1);
        if (!hash) hash = 'home';

        if (hash.indexOf('/') !== -1){
            let index = hash.indexOf('/');
            let id = hash.slice(index + 1);
            import ('./ProductCard.js')
                .then(async module => {
                    this.main.innerHTML = '';
                    this.main.append(preloader);
                    let product = new module.default(id);
                    let init = await product.init();
                    let title = product.title;
                    preloader.remove();
                    this.main.append(init);
                    document.title = title;
                });
        }else{
            import(`./${hash}.js`)
                .then(module => {
                    this.main.innerHTML = '';
                    console.log(module);
                    this.main.append(module.default);
                    document.title = module.title;
                });
        }
    }

    initConponent() {
        window.addEventListener('hashchange', () => {
            // Main.prototype.routing.call(this); // - для эстетов
            this.routing();
        });

        window.addEventListener('load', () => {
            const a = document.querySelectorAll('a[href="\"]');
            a.forEach(a => {
                a.addEventListener('click', e => {
                    e.preventDefault();
                    location.hash = '';
                });
            });
            this.routing();
        });
    }

    init() {
        return this.main;
    }
}

export default new Main().init();