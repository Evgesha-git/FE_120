import { useEffect } from "react";
import { useContext, useState } from "react"
import { CartContext } from "../../App"

const Button = (props) => {
    const { cart, setCart } = useContext(CartContext);
    const [added, setAdded] = useState(false);
    const [item, setItem] = useState(cart.find(item => item.id === props.data.id));

    const changeCart = (direction) => {
        if (direction){
            setCart(cart.map(product => {
                if (product.id === item.id){
                    product.count += 1;
                    return product
                }
                return product;
            }));
        }else{
            setCart(cart.map(product => {
                if (product.id === item.id){
                    product.count -= 1;
                    if (product.count < 1){
                        setAdded(false);
                        return null;
                    }
                    return product
                }
                return product;
            }));
        }
    }

    useEffect(() => {
        setItem(cart.find(item => item.id === props.data.id));
        if (item){
            setAdded(true);
        }
    }, [cart, item]);

    return (
        <>
            {!added ?
                <div className="add-button">
                    <button onClick={() => {
                        props.onAddCart();
                        setAdded(true);
                        }}>Add cart</button>
                </div> :
                <div className="counter-buttons">
                    <button onClick={() => changeCart(false)}>-</button>
                    {item ? item.count : 0}
                    <button onClick={() => changeCart(true)}>+</button>
                </div>
            }
        </>
    )
}

export default  Button;