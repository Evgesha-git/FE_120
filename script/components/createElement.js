export default function createElement(name, attributes = [], content = []) {
    const element = document.createElement(name);

    if (attributes.length > 0) {
        attributes.forEach(attr => {
            element.setAttribute(attr[0], attr[1]);
        });
    }

    if (!content) return element;

    if (typeof content === 'string'){
        element.innerHTML = content;
    }else{
        content.forEach(cont => {
            if (typeof cont === 'string'){
                element.innerHTML = cont;
            }else{
                element.append(cont);
            }
        });
    }

    return element;
}