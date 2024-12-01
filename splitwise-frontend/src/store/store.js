import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../slices/userSlice';
import groupSlice from "../slices/groupSlice"

const store = configureStore({
  reducer: {
    user: userSlice,
    group : groupSlice
  },
});

export default store;
