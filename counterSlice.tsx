import { createSlice } from "@reduxjs/toolkit";

export type couterState = {
  value: number;
};

const countInit: couterState = { value: 0 };

export const counterSlice = createSlice({
  name: "counter",
  initialState: countInit,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value += 2;
    },
  },
});

export const counterSelect = (state: couterState) => state.value;

export default counterSlice.reducer;
