import { FunctionComponent } from "react";
import { T } from "../Transactions/types";

export type TTransactionMoreProps = {
    data: Array<T>,
    setTransaction: any,
}

export type TTransactionMore = FunctionComponent<TTransactionMoreProps>;