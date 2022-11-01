import { useContext } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Context } from "../..";

const Login = () => {
    const { auth } = useContext(Context);

    const login = async () => {
        const provider = new GoogleAuthProvider();
        const { user } = await signInWithPopup(auth, provider);
        console.log(user);
    }

    return (
        <div className="container">
            <button onClick={login}>Войти с помощью Google</button>
        </div>
    )
}

export default Login;