import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlices.redux";
import userReducer from  "./userSlices.redux";

export function makeStore() {
    return configureStore({
      reducer: {
        login: loginReducer,
        user: userReducer,
    },
    });
  }
  
  export const store = makeStore();
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;