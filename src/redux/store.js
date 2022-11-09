import { configureStore } from '@reduxjs/toolkit';
import  contactSlice   from './phoneSlice';
import filterSlice from './filterSlice';

const store = configureStore({
  reducer: {
    contacts: contactSlice,
    filter: filterSlice,
  },
});

export default store;
