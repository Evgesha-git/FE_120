import { AdminAction, AdminActionTypes, AdminState } from "../../types/admin";


const initialValue: AdminState = {
  admin: {
    id: "",
    name: "",
  },
  loading: false,
  error: null,
};



export const adminReduser = (state = initialValue, action: AdminAction): AdminState => {
  switch (action.type) {
    case AdminActionTypes.FETCH_ADMIN:
      return { loading: true, error: null, admin: { id: "", name: "" } };
    case AdminActionTypes.FETCH_ADMIN_SUCCESS:
      return { loading: false, error: null, admin: action.payload };
    case AdminActionTypes.FETCH_ADMIN_ERROR:
      return {
        loading: false,
        error: action.payload,
        admin: { id: "", name: "" },
      };
    default:
      return state;
  }
};
