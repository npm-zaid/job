import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from '../Redux/CounterSlice'
// import { logger } from './Middleware'



export const store = configureStore({
    reducer: {
        Counter : CounterReducer
    },
    // middleware: [logger]
})