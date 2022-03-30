import { baseApi } from '../services/base/baseApi';
import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../services/counter/counterSlice';

export const rootReducer = combineReducers({
  counter: counterReducer,
  [baseApi.reducerPath]: baseApi.reducer,
})