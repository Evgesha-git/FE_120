import { AdminAction, AdminActionTypes } from "../../types/admin";
import { Dispatch } from "redux";
import { ref, child, get } from "firebase/database";
import { database } from "../../utils/db";

export const loginAdmin = (uId: string) => {
  return async (dispatch: Dispatch<AdminAction>) => {
    try {
      dispatch({ type: AdminActionTypes.FETCH_ADMIN });
      const response = await get(child(ref(database), `admin/${uId}`));
      if (response.exists()) {
        dispatch({
          type: AdminActionTypes.FETCH_ADMIN_SUCCESS,
          payload: response.val(),
        });
      } else {
        throw Error("Not data");
      }
    } catch (e) {
      dispatch({
        type: AdminActionTypes.FETCH_ADMIN_ERROR,
        payload: "Несуществующий пользователь",
      });
    }
  };
};
