import createElement from "./createElement.js";

export default function home(){
    const content = `<h1>Home</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium mollitia ratione assumenda libero ipsa. Eius vel tenetur et maxime aliquam praesentium voluptatem incidunt similique, vero cumque? Dicta necessitatibus assumenda velit laboriosam deleniti in tenetur placeat delectus eligendi cupiditate ullam omnis ratione molestiae expedita earum quod, beatae temporibus reiciendis odit vitae.</p>`;

    const container = createElement('div', [], content);

    return container;
}