import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';



axios.defaults.baseURL = 'https://6368ef0828cd16bba7104b38.mockapi.io';

export const getContatcts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('/contacts')
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContatct',
  async (contactId, { rejectWithValue }) => {
    try {
      const {data} = await axios.delete(
        `/contacts/${contactId}`,
      );
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContatct',
  async (body, { rejectWithValue }) => {
    try {
      const {data} = await axios.post(
        `/contacts`,
        {
          body: JSON.stringify(body),
        }
      );
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
