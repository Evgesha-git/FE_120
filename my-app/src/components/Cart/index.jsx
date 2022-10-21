import { useContext } from "react";
import { CartContext } from "../../App";
import CartItem from "./CartItem";

const Cart = () => {
    const { cart, setCart } = useContext(CartContext);

    return (
        <>
            <h1>Cart</h1>
            <div className="cart-container">
                {/* {cart.map((item, i) => <CartItem
                    id={item.id}
                    key={i.toString()}
                />)} */}
            </div>
        </>
    )
}

export default Cart;