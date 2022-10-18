import { Link } from "react-router-dom";
import './style.css';

const ProductItem = (props) => {
    const { title, price, id, image } = props;
    return (
        <div className="product-item">
            <div className="image">
                <Link to={`${id}`}>
                    <img src={image} alt="" />
                </Link>
            </div>
            <Link to={`${id}`}><h2>{title}</h2></Link>
            <p>{price}</p>

        </div>
    );
}

export default ProductItem;