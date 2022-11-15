import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { app } from "./utils/db";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

export const Context = createContext<any>(null);

export const database = getDatabase(app);
export const auth = getAuth(app);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Context.Provider value={{database, auth}}>
        <App />
      </Context.Provider>
    </Provider>
  </React.StrictMode>
);
