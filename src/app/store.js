import { configureStore } from "@reduxjs/toolkit";

import counterReducer from '../modules/task/redux/index'

const store = configureStore({
    reducer:{
      counter:  counterReducer
    }
})

export default store;