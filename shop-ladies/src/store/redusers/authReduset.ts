import { AuthAction, IAuth, AuthActionTypes } from "../../types/authType";

const initialState: IAuth = {
  user: null,
  loading: false,
  error: null,
};

export const authReduser = (
  state = initialState,
  action: AuthAction
): IAuth => {
  switch (action.type) {
    case AuthActionTypes.FETCH_USER:
      return { user: null, loading: true, error: null };
    case AuthActionTypes.SUCCESS_USER:
      return { user: action.payload, loading: false, error: null };
    case AuthActionTypes.LOGOUT_USER:
      return { user: null, loading: false, error: null };
    case AuthActionTypes.ERROR_USER:
      return { user: null, loading: false, error: action.payload };
    default:
      return state;
  }
};
