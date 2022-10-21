import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../../App";

// class CartItem extends React.Component {
//     constructor(props) {
//         super();
//         this.state = {
//             totalPrice: 0,
//             elem: {},
//         };
//         this.handlerMin = this.handlerMin.bind(this);
//     }

//     // static contextType = CartContext;

//     handlerMin() {
//         let cart = this.context.cart.filter(item => {
//             if (item.id === this.state.elem.id) {
//                 item.count -= 1;
//                 if (item.count < 1) {
//                     if (window.confirm('Вы действыительно хотите удалить товаар?')) {
//                         return null;
//                     }
//                 }
//                 return item
//             } else {
//                 return item;
//             }
//         });

//         this.context.setCart(cart);
//         this.setState({
//             elem: cart.find(item => item.id === this.props.id) || {}
//         });
//     }

//     componentDidMount() {
//         console.log(this.context);
//         this.setState({
//             elem: this.context.cart.find(item => item.id === this.props.id)
//         });
//     }

//     render() {
//         return (
//             <>
//                 {this.state.elem ?
//                     <div className="cat-elem">
//                         <div className="img">
//                             <img src={this.state.elem.image} alt="" />
//                         </div>
//                         <div className="info">
//                             <h2 className="title">{this.state.elem.title}</h2>
//                             <p className="price">{this.totalProce}</p>
//                         </div>
//                         <div className="buttons">
//                             <div className="button min" onClick={this.handlerMin}>-</div>
//                             <div className="count">{this.state.elem.count}</div>
//                             <div className="button pl">+</div>
//                         </div>
//                     </div> :
//                     <></>
//                 }
//             </>
//         )
//     }
// }

// CartItem.contextType = CartContext;

const CartItem = (props) => {
    const { cart, setCart } = useContext(CartContext);
    const [elem, setElem] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);

    const handlerMin = () => {
        let c = cart.filter(item => {
            if (item.id === elem.id) {
                item.count -= 1;
                let price = (elem.price * elem.count);
                price = Number.parseFloat(price.toFixed(2));
                item.totalPrice = price;
                if (item.count < 1) {
                    if (window.confirm('Вы действыительно хотите удалить товаар?')) {
                        return null;
                    }
                }
                return item
            } else {
                return item;
            }
        });

        setCart(c);
        setElem(c.find(item => item.id === props.id) || {});

    }

    const handlerMas = () => {
        let c = cart.map(item => {
            item.count += 1;
            let price = (elem.price * elem.count);
            price = Number.parseFloat(price.toFixed(2));
            item.totalPrice = price;
            return item;
        });

        setCart(c);
    }

    useEffect(() => {
        setElem(cart.find(item => item.id === props.id));
        let price = (elem.price * elem.count);
        price = Number.parseFloat(price.toFixed(2));
        setTotalPrice(price);
    });

    return (
        <>
            {elem ?
                <div className="cat-elem">
                    <div className="img">
                        <img src={elem.image} alt="" />
                    </div>
                    <div className="info">
                        <h2 className="title">{elem.title}</h2>
                        <p className="price">{totalPrice}</p>
                    </div>
                    <div className="buttons">
                        <div className="button min" onClick={handlerMin}>-</div>
                        <div className="count">{elem.count}</div>
                        <div className="button pl" onClick={handlerMas}>+</div>
                    </div>
                </div> :
                <></>
            }
        </>
    )
}

export default CartItem;