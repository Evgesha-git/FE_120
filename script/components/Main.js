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

        import(`./${hash}.js`)
            .then(module => {
                this.main.innerHTML = '';
                console.log(module.default);
                this.main.append(module.default);
            });
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