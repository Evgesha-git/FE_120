import { AdminAction, AdminActionTypes } from "../../types/admin";
import { Dispatch } from "redux";
import { ref, child, get, set } from "firebase/database";
import { database } from "../../";

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

export const addAdmin = (user: any | null) => {
  return async(dispatch: Dispatch<AdminAction>) => {
    // const {auth, database} = useContext(Context);
    try{
      dispatch({type:AdminActionTypes.FETCH_ADMIN});
      if (!user) throw new Error();
      console.log(database);
      set(ref(database, 'admin/' + user?.uid), {
        name: user?.displayName,
        photoUrl: user?.photoURL
      });
      dispatch({type: AdminActionTypes.DEFAULT, payload: 'Данные успешно записаны!'})
    }catch (e){
      dispatch({type: AdminActionTypes.FETCH_ADMIN_ERROR, payload: 'Произошла ошибка'})
    }
  }
}