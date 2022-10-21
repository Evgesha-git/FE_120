import { Link } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "../../App";
import { useState } from "react";
import { useEffect } from "react";

const Widget = () => {
    const {cart} = useContext(CartContext);
    const [price, setPrice] = useState(0);
    const [count, setCount] = useState(0);
    
    const getWidgetData = () => {
        if (cart.length < 1) return;
        let p = cart.reduce((price, item) => price + (item.price * item.count), 0);
        p = Number.parseFloat(p.toFixed(2));
        let c = cart.length;
        setCount(c);
        setPrice(p);
    }

    useEffect(() => {
        getWidgetData();
    }, [cart, count, price]);

    return (
        <div className="widget">
            <Link to={'cart'}>
                <span className="count">{count}</span>
                <span>|</span>
                <span className="price">{price}</span>
            </Link>
        </div>
    )
}

export default Widget;