import React, { useState } from "react";

function Header(props){
    const [counter, setCounter] = useState(0);
    let [text, setText] = useState('');
    //onClick
    //onChange
    //onKeyUp

    const likeHandler = () => {
        let value = counter;
        setCounter(++value);
    }

    const disLikeHandler = () => {
        let value = counter;
        setCounter(--value);
    }

    const textHandler = (e) => {
        let value = e.target.value;
        setText(value);
    }

    return (
        <header className="header">
            Header content {props.content}, {props.a + props.b}
            <button onClick={likeHandler}>like</button>
            {counter}
            <button onClick={disLikeHandler}>dislike</button>
            <input type="text" name="" id="" onChange={textHandler} />
            {text}
        </header>
    )
}

export default Header;