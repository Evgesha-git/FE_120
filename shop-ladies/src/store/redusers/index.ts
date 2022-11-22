import { combineReducers } from "redux";
import { adminReduser } from "./adminReduser";
import { authReduser } from "./authReduset";

export const rootReducer = combineReducers({
    admin: adminReduser,
    auth: authReduser,
});

export type RootState = ReturnType<typeof rootReducer>;