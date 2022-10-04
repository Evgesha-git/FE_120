import Post, { render } from "./module";
import Abaut from "./Abaut";

const post = new Post('Text', 'img');

console.log(post);

console.log(post.title);

document.body.append(new Abaut().init());

render('#root');