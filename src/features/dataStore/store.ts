import { configureStore } from "@reduxjs/toolkit";
import { localReducer } from "./localSlice";

export const store = configureStore({
  reducer: {
    localSlice: localReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
