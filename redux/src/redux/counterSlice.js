import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increment: (state, action) => state + action.payload,
        decrement: (state, action) => state - action.payload,    
        reset: () => 0,
    },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;