import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../App";
import Button from "../Button";

const Product = () => {
    const { cart, setCart } = useContext(CartContext);
    const [product, setProduct] = useState({});
    const [load, setLoad] = useState(false);
    let { productId } = useParams();
    console.log(productId);

    const getProduct = async () => {
        if (product.title) return;
        let resp = await fetch(`https://fakestoreapi.com/products/${productId}`);
        let data = await resp.json();
        setProduct(data);
        setLoad(!load);
    }

    const addCart = () => {
        let data = {
            title: product.title,
            price: product.price,
            id: product.id,
            image: product.image,
            count: 1
        };
        
        setCart([...cart, data]);
    }

    useEffect(() => {
        getProduct();
    });

    return (
        <div className="product-page">
            {load ?
                <>
                    <div className="image">
                        <img src={product.image} alt="" />
                    </div>
                    <div className="description">
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                        <span>{product.rating.rate}</span>
                        <span>{product.price}</span>
                    </div>
                    <Button data={product} onAddCart={addCart}/>
                </> :
                <p>Loading...</p>
            }
        </div>
    )
}

export default Product;