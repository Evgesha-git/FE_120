import React, { useState, useContext } from "react";
import { useAction } from "../../hooks/useAction";
import { adminTypeSelector } from "../../hooks/adminTypeSelector";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Context, database } from "../..";
import { ref, set } from "firebase/database";

const Admin: React.FC = () => {
  const { auth } = useContext(Context);
  const { loginAdmin, addAdmin } = useAction();
  const { admin, loading, error, login, message } = adminTypeSelector(
    (state) => state.admin
  );

  const loginHandler = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    // console.log(user);
    // set(ref(database, "admin/" + user?.uid), {
    //   name: user?.displayName,
    //   photoUrl: user?.photoURL,
    // });
    // add new admin
    loginAdmin(user?.uid);
  };

  return login ? (
    <div>
      <h1>Adminka</h1>
      <p>{admin.name}</p>
    </div>
  ) : (
    <div>
      <button onClick={loginHandler}>Войти в учетную запись</button>
    </div>
  );
};

export default Admin;
