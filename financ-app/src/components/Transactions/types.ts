import { FunctionComponent } from "react";

export type T = {
    title: string,
    price: number,
    type: boolean,
    date: string,
    id: number,
    description: string,
    categoty: Array<string>,
}

export type TTransactionProps = {
    data: Array<T>,
    setTransaction: any,
}

export type TTransaction = FunctionComponent<TTransactionProps>;