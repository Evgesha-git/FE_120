import { getCookie, setCookie } from "./cookes.js";

async function getData(id) {
    if (!getCookie('catalog')){
        localStorage.removeItem('catalog');
    }
    if (!localStorage.getItem('catalog')) {
        if (!id) {
            return await catalogGetData();
        }else{
            return await getItemData(id);
        }
    }else{
        if(!id){
            return JSON.parse(localStorage.getItem('catalog'));
        }else{
            let data = JSON.parse(localStorage.getItem('catalog'));
            let item = data.find(item => item.id === +id);
            return item;
        }
    }
}

async function catalogGetData() {
    let response = await fetch('https://api.escuelajs.co/api/v1/products');
    let data = await response.json();
    localStorage.setItem('catalog', JSON.stringify(data));
    setCookie('catalog', 'значение', 120);
    return data;
}

async function getItemData(id) {
    let response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
    let data = await response.json();
    return data;
}



export { getData }