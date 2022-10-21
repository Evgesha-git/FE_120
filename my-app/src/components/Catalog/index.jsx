import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import './style.css';

const Catalog = () => {
    const [data, setData] = useState([]);

    const getApiData = async () => {
        if (data.length > 0) return;
        let resp = await fetch('https://fakestoreapi.com/products');
        let apiData = await resp.json();
        setData(apiData);
    }

    useEffect(() => {
        console.log(data);
        getApiData();
    }, [data]);

    return (
        <div className="main-catalog">
            {data.map((item, i) => {
                return (
                    <ProductItem
                        key={i.toString()}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                    />
                )
            })}
        </div>
    )
}

export default Catalog;