import React, { useState, useContext, useRef, useEffect } from "react";
import { useAction } from "../../hooks/useAction";
import { adminTypeSelector } from "../../hooks/adminTypeSelector";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Context, database } from "../..";
import { ref, set } from "firebase/database";
import { Link } from "react-router-dom";
import AdminPage from "./AdminPage";
import { useAdmin } from "../../hooks/useAdmin";

const Admin: React.FC = () => {
  const { auth } = useContext(Context);
  const { loginAdmin, addAdmin } = useAction();
  const { admin, loading, error, login, message } = adminTypeSelector(
    (state) => state.admin
  );
  const input = useRef<HTMLInputElement | null>(null);
  const redirect = useAdmin(login)

  const loginHandler = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    // console.log(user);
    // set(ref(database, "admin/" + user?.uid), {
    //   name: user?.displayName,
    //   photoUrl: user?.photoURL,
    // });
    // add new admin
    console.log(input.current?.checked);

    if (input.current?.checked) {
      localStorage.setItem('admin', JSON.stringify({ id: user?.uid }));
    } else {
      sessionStorage.setItem('admin', JSON.stringify({ id: user?.uid }));
    }

    loginAdmin(user?.uid);
  };

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
