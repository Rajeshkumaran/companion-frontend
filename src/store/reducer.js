import { combineReducers } from '@reduxjs/toolkit';
import api from './api';
import authReducer from './auth';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authReducer,
});

export default rootReducer;
