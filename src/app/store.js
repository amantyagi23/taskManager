import { configureStore } from "@reduxjs/toolkit";

import counterReducer from '../modules/task/redux/index';
import userReducer from "../modules/user/redux/index"

const store = configureStore({
    reducer:{
      counter:  counterReducer,
      user:userReducer
    }
})

export default store;