async function catalogGetData(){
    let fetch_1 = fetch('https://api.escuelajs.co/api/v1/products');
    let fetch_2 = fetch('https://fakestoreapi.com/products');
    return await Promise.race([fetch_1, fetch_2]);
}

async function getItemData(id){
    let fetch_1 = fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
    let fetch_2 = fetch(`https://fakestoreapi.com/products${id}`);
    return await Promise.race([fetch_1, fetch_2]);
}

export { catalogGetData, getItemData }