import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../../App";
import CartItem from "./CartItem";

const Cart = () => {
    const { cart, setCart } = useContext(CartContext);
    const [price, setPrice] = useState(0);

    const formHandler = e => {
        e.preventDefault();
        alert('Заказ оформлен');
    }

    useEffect(() => {
        let price = cart.reduce((p, item) => p + (item.count * item.price), 0);
        price = Number.parseFloat(price.toFixed(2));
        setPrice(price);
    }, [cart])

    return (
        <>
            <h1>Cart</h1>
            <div className="cart-container">
                {cart.map((item, i) => <CartItem
                    id={item.id}
                    key={i.toString()}
                />)}
            </div>
            <form onSubmit={formHandler} className="total-conteinre-price">
                {price}
                <button type="submit">Send</button>
            </form>
        </>
    )
}

export default Cart;