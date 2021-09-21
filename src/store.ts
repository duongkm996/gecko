import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "../src/slices/globalSlice";
import web3Reducer from "../src/slices/web3";

const store = configureStore({
  reducer: {
    global: globalReducer,
    web3: web3Reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
