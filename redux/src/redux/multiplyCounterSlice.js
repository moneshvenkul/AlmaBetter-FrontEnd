import { createSlice } from "@reduxjs/toolkit";

const multiplyCounterSlice = createSlice({
    name: "multiplyCounter",
    initialState: 1,
    reducers: {
        multiplyByThree: (state) => state * 3,
        resetMultiply: () => 1,
    },
});

export const { multiplyByThree, resetMultiply } = multiplyCounterSlice.actions;
export default multiplyCounterSlice.reducer;
