import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './dataSlice';

const store = configureStore({
  reducer: {
    detaildata: dataSlice.reducer,
  },
});
export default store;
