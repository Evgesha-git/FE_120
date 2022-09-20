async function catalogGetData(){
    return await fetch('https://fakestoreapi.com/products')
        .then(resp => resp.json())
        .then(data => data);
}

export { catalogGetData }