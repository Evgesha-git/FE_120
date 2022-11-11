import { Routes, Route } from "react-router";
import React from "react";
import Admin from "../Admin/imdex";
import Shop from "../Shop";

const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Shop/>}/>
            <Route path="admin" element={<Admin/>}/>
        </Routes>
    )
}

export default AppRouter;