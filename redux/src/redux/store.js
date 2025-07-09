import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import multiplyCounterReducer from "./multiplyCounterSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        multiplyCounter: multiplyCounterReducer,
    },
});

export default store;