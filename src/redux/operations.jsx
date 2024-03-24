import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65fb28d214650eb2100989b0.mockapi.io/api/';

export const fetchCamperList = createAsyncThunk(
  'campers/list',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/campers');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFavorite = createAsyncThunk(
  'campers/favorite',

  async (id, thunkAPI) => {
    try {
      const campers = await thunkAPI.getState().campers.campers;

      const res = campers.find((camper) => camper._id === id);

      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
