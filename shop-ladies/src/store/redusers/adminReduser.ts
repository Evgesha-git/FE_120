import { AdminAction, AdminActionTypes, AdminState } from "../../types/admin";

const initialValue: AdminState = {
  admin: {
    id: "",
    name: "",
  },
  loading: false,
  error: null,
  login: false,
  message: '',
};

export const adminReduser = (
  state = initialValue,
  action: AdminAction
): AdminState => {
  switch (action.type) {
    case AdminActionTypes.FETCH_ADMIN:
      return {
        loading: true,
        error: null,
        admin: { id: "", name: "" },
        login: false,
        message: ''
      };
    case AdminActionTypes.FETCH_ADMIN_SUCCESS:
      return {
        loading: false,
        error: null,
        admin: action.payload,
        login: true,
        message: ''
      };
    case AdminActionTypes.FETCH_ADMIN_ERROR:
      return {
        loading: false,
        error: action.payload,
        admin: { id: "", name: "" },
        login: false,
        message: ''
      };
    case AdminActionTypes.DEFAULT:
      return {
        loading: false,
        error: null,
        admin: { name: "", id: "" },
        login: true,
        message: action.payload,
      };
    default:
      return state;
  }
};
