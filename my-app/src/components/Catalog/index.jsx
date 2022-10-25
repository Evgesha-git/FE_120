import { useEffect, useState } from "react";
import { usePagination } from "../../hooks/pagination";
import ProductItem from "./ProductItem";
import './style.css';

const Catalog = () => {
    const [data, setData] = useState([]);
    const {
        totalPage,
        nextPage,
        prevPage,
        setPage,
        firstIndex,
        lastIndex,
        page
    } = usePagination({contentPerPage: 4, count: data.length});

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
            <div className="pagination">
                <p className="text">{page}/{totalPage}</p>
                <button onClick={prevPage} disabled={page === 1}>&larr;</button>
                {[...Array(totalPage).keys()].map(el => (
                    <button 
                        onClick={() => setPage(el + 1)}
                        key={el.toString()}
                        className={`page ${page === el + 1 ? 'active': ''}`}
                        disabled={page === el + 1}
                    >
                        {el + 1}
                    </button>
                ))}
                <button onClick={nextPage} disabled={page === totalPage}>&rarr;</button>
            </div>
            {data.slice(firstIndex, lastIndex).map((item, i) => {
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