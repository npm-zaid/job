import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from '../Redux/CounterSlice'

 const store = configureStore({
  reducer: {
    Counter : CounterReducer
  },
});

export default store
