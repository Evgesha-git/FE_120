import createElement from "./createElement.js";
import router from "./router.js";

export default function app() {
    const main = createElement('main', [
        ['class', 'main']
    ]);
    
    window.addEventListener('load', render);

    window.addEventListener('hashchange', render);

    async function render(){
        main.innerHTML = '';
        let module = await router();
        main.append(module());
    }
    
    return main;
}