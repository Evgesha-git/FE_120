import { FunctionComponent } from "react";
import {TData} from "../index";

export type PItem = {
    item: TData | null,
}

export type TItemComponent = FunctionComponent<PItem>;