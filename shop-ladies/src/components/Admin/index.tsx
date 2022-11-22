import React, { useState, useContext, useRef, useEffect } from "react";
import { useAction } from "../../hooks/useAction";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { database } from "../..";
import { ref, set } from "firebase/database";
import { Link } from "react-router-dom";
import AdminPage from "./AdminPage";
import { useAdmin } from "../../hooks/useAdmin";

const Admin: React.FC = () => {
  const { loginAdmin, addAdmin, loginAuth, logOutAuth } = useAction();
  const { admin, loading, error, login, message } = useTypeSelector(
    (state) => state.admin
  );
  const {user, loading: loadAuth, error: errorAuth} = useTypeSelector((state) => state.auth);
  const input = useRef<HTMLInputElement | null>(null);
  const redirect = useAdmin(login)

  const loginHandler = async () => {
    // const provider = new GoogleAuthProvider();
    // const { user } = await signInWithPopup(auth, provider);
    // console.log(user);
    // set(ref(database, "admin/" + user?.uid), {
    //   name: user?.displayName,
    //   photoUrl: user?.photoURL,
    // });
    // add new admin
    loginAuth()
    console.log(input.current?.checked);

    if (input.current?.checked) {
      localStorage.setItem('admin', JSON.stringify({ id: user?.uid }));
    } else {
      sessionStorage.setItem('admin', JSON.stringify({ id: user?.uid }));
    }

    // loginAdmin(user?.uid);
  };

  useEffect(() => {
    loginAdmin(user?.uid);
  }, [user]);

  return login ? (
    <div>
      <AdminPage />
      <Link to={'test'}>Перейти в тест</Link>

    </div>
  ) : (
    <div>
      <input ref={input} type="checkbox" name="" id="" />
      <button onClick={loginHandler}>Войти в учетную запись</button>
      <Link to={'test'}>Перейти в тест</Link>
    </div>
  );
};

export default Admin;
