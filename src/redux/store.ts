import { configureStore } from "@reduxjs/toolkit";
import chartConfigReducer from "./chartConfigSlice";

export const store = configureStore({
  reducer: {
    chartConfig: chartConfigReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
