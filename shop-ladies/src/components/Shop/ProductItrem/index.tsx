import React from "react";
import { TItemComponent } from "./type";
import Image from "../../Image";

const ProductItem: TItemComponent = (props) => {
    const {item} = props;

    return (
        <div>
            <h2>{item?.title}</h2>
            <p>{item?.description}</p>
            <div className="img">
                {/* {item?.image.map((img, i) => <Image key={i.toString()}  img={img}/>)} */}
                <Image img={item?.image[0]}/>
            </div>
            <p className="price">{item?.price}</p>
        </div>
    )
}

export default ProductItem;