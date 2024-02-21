import { combineReducers, configureStore } from "@reduxjs/toolkit";
import IndicatorsSlice from "./IndicatorsSlice";

const rootReducer = combineReducers({
  indicator: IndicatorsSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
