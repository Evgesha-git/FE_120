import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAction } from "../../../hooks/useAction";

const AdminPage: React.FC = () => {
    const { logOutAuth } = useAction()

    return (
        <main>
            <button onClick={() => logOutAuth()}>Log out</button>
            <nav>
                <ul>
                    <li>
                        <Link to={'setAdmin'}>Добавить нового админа</Link>
                    </li>
                    <li>
                        <Link to={'setitem'}>Добавить новый элемент</Link>
                    </li>
                    <li>
                        <Link to={'removeitem'}>Удалить элемент</Link>
                    </li>
                    <li>
                        <Link to={'/admin'}>Назад</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </main>
    )
}

export default AdminPage;