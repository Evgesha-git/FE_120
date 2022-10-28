import React from "react";
import { useNavigate } from "react-router";
import { TBadg } from "./types";

const Badge: TBadg = (props) => {
    const {
        data: {
            id,
            title,
            price,
            type,
            date
        }
    } = props;

    const navigate = useNavigate();

    const badgHandler = () => {
        navigate(`/transaction/${id.toString()}`);
    }

    return (
        <div className="badge_container" onClick={badgHandler}>
            <h2 className="title">{title}</h2>
            <p className="date">{date}</p>
            <div className="price">
                {type ? '+' : '-'} $ {price}
            </div>
        </div>
    )
}

export default Badge