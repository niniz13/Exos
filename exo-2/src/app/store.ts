import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

// Création du store typé
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Types pour RootState et AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
