import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65fb28d214650eb2100989b0.mockapi.io/api/';

export const fetchCamperList = createAsyncThunk(
  'campers/list',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/campers?limit=4&page=${page}`);

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

export const filterCampers = createAsyncThunk(
  'campers/filtered',
  async (value, thunkAPI) => {
    try {
      // const campers = await axios.get('/campers');
      // console.log(value);

      // работает по типу траспорта
      const campers = await axios.get(`/campers?form=${value}`);
      console.log(campers.data);
      return campers.data;

      // console.log(campers.data);
      // let filteredCampers = [];

      // for (const item of campers.data) {
      //   if (item.details[value] !== 0) {
      //     filteredCampers.push(item);

      // item.details.airConditioner !== 0
      //item.transmission === "automatic"
      // item.details.kitchen !==0
      // item.details.TV !== 0
      // item.details.shower !==0 || item.details.toilet !== 0
      //   }
      // }
      // console.log(filteredCampers);
      // return filteredCampers;
      // return campers.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
