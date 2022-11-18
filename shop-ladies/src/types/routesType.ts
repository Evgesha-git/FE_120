import React from "react";

export type TRouter = {
    index?: boolean
    path: string,
    Component: React.FC,
    childrenRoute?: Array<TRouter> | undefined
}

export type TRouters = Array<TRouter>