import { User } from "firebase/auth";
import { type } from "os";

export interface IAuth {
  user: User | null;
  loading: boolean;
  error: null | string;
}

export enum AuthActionTypes {
  FETCH_USER = "FETCH_USER",
  SUCCESS_USER = "SUCCESS_USER",
  LOGOUT_USER = "LOGOUT_USER",
  ERROR_USER = "ERROR_USER",
}

interface FetchAuthAction {
  type: AuthActionTypes.FETCH_USER;
}

interface SuccessAuthAction {
  type: AuthActionTypes.SUCCESS_USER;
  payload: User;
}

interface LogoutAuthAction {
  type: AuthActionTypes.LOGOUT_USER;
}

interface ErrorAuthAction {
  type: AuthActionTypes.ERROR_USER;
  payload: string;
}

export type AuthAction =
  | FetchAuthAction
  | SuccessAuthAction
  | LogoutAuthAction
  | ErrorAuthAction;
