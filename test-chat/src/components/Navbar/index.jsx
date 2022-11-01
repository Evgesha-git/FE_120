import { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth"
import { Context } from "../..";
import style from "./Navbar.module.css";
import { LOGIN_ROUTE } from "../../utils/constants";
import { signOut } from "firebase/auth";

const Navbar = () => {
    const { auth } = useContext(Context);
    const [user] = useAuthState(auth);

    return (
        <div className={style.navbar}>
            <div className={style.nav}>
                {user ?
                    <button onClick={() => signOut(auth)} className={style.button}>Выйти</button> :
                    <Link to={LOGIN_ROUTE}>
                        <button className={style.button}>Логин</button>
                    </Link>
                }
            </div>
        </div>
    )
}

export default Navbar;