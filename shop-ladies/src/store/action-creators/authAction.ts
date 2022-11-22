import { auth } from "../..";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { Dispatch } from "redux";
import { AuthAction, AuthActionTypes } from "../../types/authType";

export const loginAuth = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    dispatch({ type: AuthActionTypes.FETCH_USER });
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);
      if (user) {
        dispatch({ type: AuthActionTypes.SUCCESS_USER, payload: user });
      } else {
        throw new Error();
      }
    } catch (error) {
      dispatch({
        type: AuthActionTypes.ERROR_USER,
        payload: "Данные авторизации не верны",
      });
    }
  };
};

export const logOutAuth = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    dispatch({ type: AuthActionTypes.FETCH_USER });
    try {
        await signOut(auth);
        dispatch({type: AuthActionTypes.LOGOUT_USER});
    } catch (error) {
      dispatch({
        type: AuthActionTypes.ERROR_USER,
        payload: "Данные авторизации не верны",
      });
    }
  };
};
