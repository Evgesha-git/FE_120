import React, { useEffect, useState } from "react";
import { database } from "../..";
import { storageRef } from "../..";
import { useList } from "react-firebase-hooks/database";
import {ref as refStor, StorageReference} from "firebase/storage";
import { ref, remove, child } from "firebase/database";
import ProductItem from "./ProductItrem";
// @ts-ignore
import {ReactComponent as Dog } from "./Group.svg";

export type TData = {
    description: string,
    title: string,
    price: string,
    image: Array<StorageReference>
}

const Shop: React.FC = () => {
    const [snapshot, loading, error] = useList(ref(database, "products"));
    const [data, setData] = useState<Array<TData | null>>([])

    useEffect(() => {
        let value: Array<TData> = []
        snapshot?.forEach(v => {
            const d = v.val()
            const image: StorageReference[] = d.image.map((el: string) => {
                const refImg = refStor(storageRef, `images/${el}`);
                return refImg;
            });
            value.push({...d, image})
        });
        setData(value);
        console.log(data);
    }, [snapshot]);

    console.log(loading);
    

    return loading ? (
        <div>Loading...</div>
    ) : (
        <div>
            <Dog clasName={'dog'}/>
            {data.map((item, i) => 
                <ProductItem key={i.toString()} item={item}/>
            )}
        </div>
    )
}

export default Shop;