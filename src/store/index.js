import { configureStore } from '@reduxjs/toolkit';
import api from './api';

import rootReducer from './reducer';

const appStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export default appStore;
