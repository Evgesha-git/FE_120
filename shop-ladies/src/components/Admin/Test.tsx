import React, { useEffect } from "react";
import { adminTypeSelector } from "../../hooks/adminTypeSelector";
import { useAction } from "../../hooks/useAction";
import { useAdmin } from "../../hooks/useAdmin";

const Test: React.FC = () => {
    const { admin, login } = adminTypeSelector(state => state.admin);
    const redirect = useAdmin(login);
    const { loginAdmin } = useAction()

    // const errorPath = () => {
    //     console.log(admin);

    //     if (!login) {
    //         navigate('/')
    //     }
    // }

    useEffect(() => {
        const id = redirect();
        if (id) {
            loginAdmin(id);
        }
    }, [login])

    return (<h2>Test</h2>)
}

export default Test;