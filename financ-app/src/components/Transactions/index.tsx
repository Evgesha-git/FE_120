import React from "react";
import Badge from "./Badge";
import { TTransaction } from "./types";

const Trasactions: TTransaction = (props) => {
    const { data, setTransaction } = props;

    return (
        <div className="transactions_container">
            <div className="transactions">
                {data.length > 0 ?
                    data.map(tr => <Badge data={tr} />) :
                    <p>Здесь пока нет расходов</p>
                }
            </div>
            <div className="button">+</div>
        </div>
    )
}

export default Trasactions;