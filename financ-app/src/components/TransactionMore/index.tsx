import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { T } from "../Transactions/types";
import { TTransactionMore } from "./types";

const TransectionMore: TTransactionMore = (props) => {
    const id: number = +useParams();
    const [elem, setElem] = useState<T>();
    const { data , setTransaction} = props;

    useEffect(() => {
        setElem(data.find(tr => tr.id === id));
    });

    return (
        <div className="transaction_container">
            <p className="date">{elem?.date}</p>
            <h2 className="title">{elem?.title}</h2>
            <div className="category">
                {elem?.categoty.map(cat => (<span>{cat}</span>))}
            </div>
            <div className="price">
                {elem?.type ? '+' : '-'} $ {elem?.price}
            </div>
            <p className="description">{elem?.description}</p>
        </div>
    )
}

export default TransectionMore;