import { TRouters } from "../types/routesType";
import Admin from "../components/Admin";
import Shop from "../components/Shop";
import Test from "../components/Admin/Test";
import SetItemPage from "../components/Admin/AdminPage/SetItemPage";
import RemoveItemPage from "../components/Admin/AdminPage/RemoveItemPage";
import MainAdmin from "../components/Admin/AdminPage/MainAdmin";
import SetNewAdmin from "../components/Admin/AdminPage/SetNewAdmin";

export const routes: TRouters = [
    {
        path: '/',
        Component: Shop,
    },
    {
        path: '/admin',
        Component: Admin,
        childrenRoute: [
            {
                index: true,
                path: '',
                Component: MainAdmin,
            },
            {
                path: 'setitem',
                Component: SetItemPage,
            },
            {
                path: 'removeitem',
                Component: RemoveItemPage,
            },
            {
                path: 'setAdmin',
                Component: SetNewAdmin
            },
        ]
    },
    {
        path: 'admin/test',
        Component: Test,
    }
]