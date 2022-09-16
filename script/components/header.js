import createElement from "./createElement.js"

export default function header() {
    const headerText = `<nav>
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#api">Api</a></li>
        <li><a href="#about">About</a></li>
    </ul>
</nav>`

    const header = createElement('header', [
        ['class', 'heaeder'],
    ], headerText);

    return header;
}