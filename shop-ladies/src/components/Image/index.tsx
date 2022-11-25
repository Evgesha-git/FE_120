import React from "react";
import { TImageComponent } from "./type";
import {useDownloadURL} from "react-firebase-hooks/storage";
import {ref} from "firebase/storage";
import { storageRef } from "../..";

const Image: TImageComponent = (props) => {
    const {img} = props;
    const [image, loading, error] = useDownloadURL(img);

    return loading ? (
        <div>Loading...</div>
    ) : (
        <div className="img">
            <img src={image} alt="img" />
        </div>
    )
}

export default Image;