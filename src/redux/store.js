import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./todoReducer";

const store = configureStore ({
    reducer:reducer
})

export default store;