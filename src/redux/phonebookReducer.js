import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  getContatcts,
  setFilterTerm,
} from './phonebookActions';


const initialState = {
  contacts: [],
  filterTerm: '',
  isFetching: false,
  error: null,
};

export default createReducer(
  initialState, {
  [setFilterTerm]: (state, action) => {
    state.filterTerm = action.payload;
  },//getContatcts
  [getContatcts.pending]: state => {
    state.isFetching = true;
  },
  [getContatcts.fulfilled]: (state, action) => {
    state.contacts = action.payload;
    state.isFetching = false;
  },
  [getContatcts.rejected]: (state, action) => {
    state.error = action.payload;
    state.isFetching = false;
  }, //deleteContact
  [deleteContact.pending]: state => {
    state.isFetching = true;
  },
  [deleteContact.fulfilled]: (state, action) => {
    state.contacts = state.contacts = state.contacts.filter(
      contact => contact.id !== action.payload.id
    );
    state.isFetching = false;
  },
  [deleteContact.rejected]: (state, action) => {
    state.error = action.payload;
    state.isFetching = false;
  }, //addContact
  [addContact.pending]: state => {
    state.isFetching = true;
  },
  [addContact.fulfilled]: (state, action) => {
    state.contacts = [...state.contacts, action.payload];
    state.isFetching = false;
  },
  [addContact.rejected]: (state, action) => {
    state.error = action.payload;
    state.isFetching = false;
  },
});
