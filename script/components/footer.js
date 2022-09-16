import createElement from "./createElement.js"

export function footer(){
    const footerText = `<div>Footer</div>`;

    const footer = createElement('footer', [
        ['class', 'footer']
    ], footerText);

    return footer;
}