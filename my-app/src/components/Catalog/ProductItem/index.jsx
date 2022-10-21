import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../App";
import './style.css';

const ProductItem = (props) => {
    const { title, price, id, image } = props;
    const {cart, setCart} = useContext(CartContext);

    const addCart = () => {
        let data = {
            title,
            price,
            id,
            image,
            count: 1
        };
        
        setCart([...cart, data]);
    } 

    return (
        <div className="product-item">
            <div className="image">
                <Link to={`${id}`}>
                    <img src={image} alt="" />
                </Link>
            </div>
            <Link to={`${id}`}><h2>{title}</h2></Link>
            <p>{price}</p>
            <button onClick={addCart}>Add cart</button>
        </div>
    );
}

export default ProductItem;