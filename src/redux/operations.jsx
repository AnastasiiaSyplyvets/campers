import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65fb28d214650eb2100989b0.mockapi.io/api/';

export const fetchCamperList = createAsyncThunk(
  'campers/list',
  async (_, thunkAPI) => {
    console.log('fetch in fetchCamperList');

    try {
      const response = await axios.get('/campers');
      //   console.log(response);
      return response.data;
    } catch (error) {
      //   console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFavorite = createAsyncThunk(
  'campers/favorite',

  async (id, thunkAPI) => {
    try {
      //   const res = await axios.get(`/campers/${id}`);
      //   const campers = useSelector((state) => state.campers);
      const campers = await thunkAPI.getState().campers.campers;
      console.log(campers);
      //   const allCampers = await fetchCamperList();
      const res = campers.find((camper) => camper.id === id);
      console.log('res in fetch by id', res);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
