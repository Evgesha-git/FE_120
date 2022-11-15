import { combineReducers } from "redux";
import { adminReduser } from "./adminReduser";

export const rootReducer = combineReducers({
    admin: adminReduser,
});

export type RootState = ReturnType<typeof rootReducer>;