import React from "react";
import { PMainComponent } from "./types";
import { Link } from "react-router-dom";
 
const Main: PMainComponent = (props) => {
    const {balance} = props;

    return (
        <div className="main_page">
            <div className="balance">
                <p>Your balance</p>
                <h2>{balance}</h2>
            </div>
            <div className="button">
                <Link to={'transactions'}>All transactions</Link>
            </div>
        </div>
    )
}

export default Main;