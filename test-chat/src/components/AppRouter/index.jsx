import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Context } from "../..";
import { privateRoutes, publickRoutes } from "../../routes";
import Chat from "../Chat";
import Login from "../Login";
import { useAuthState } from "react-firebase-hooks/auth"

const AppRouter = () => {
    const { auth } = useContext(Context);
    const [user] = useAuthState(auth);

    console.log(user);

    return user ?
        (
            <Routes>
                {privateRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={<Component/>} exact={true} />
                )}
                <Route path="*" element={<Chat />} />
            </Routes>
        ) :
        (
            <Routes>
                {publickRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={<Component/>} exact={true} />
                )}
                <Route path="*" element={<Login />} />
            </Routes>
        )
}

export default AppRouter;