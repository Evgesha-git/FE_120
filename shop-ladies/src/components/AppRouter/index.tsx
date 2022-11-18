import { Routes, Route } from "react-router";
import React from "react";
import { routes } from "../../utils/router"

const AppRouter: React.FC = () => {

    return (
        <Routes>
            {routes.map(({ path, Component, childrenRoute }) => {
                return childrenRoute ?
                    <Route key={path} path={path} element={<Component />} >
                        {childrenRoute?.map(({ path, Component, index }) =>
                            index ? 
                            <Route key={path} index element={<Component />} /> :
                            <Route key={path} path={path} element={<Component />} />
                        )}
                </Route> :
                    <Route key={path} path={path} element={<Component />} />
            }
            )}
        </Routes>
    )
}

export default AppRouter;