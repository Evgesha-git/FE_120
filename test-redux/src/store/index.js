import { createStore, combineReducers } from "redux";
import { cashReducer } from "./cashReducer";
import { customersReducer } from "./customersReducer";

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customersReducer
})

export const store = createStore(rootReducer);