import {FunctionComponent} from "react";
import {StorageReference} from "firebase/storage";

export type TImage = {
    img: StorageReference | undefined,
}

export type TImageComponent = FunctionComponent<TImage>;