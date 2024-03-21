import { createSlice } from '@reduxjs/toolkit';
import { fetchCamperList, addFavorite } from './operations';
// import storage from 'redux-persist/lib/storage';
import { nanoid } from 'nanoid';

export const CamperSlice = createSlice({
  name: 'camper',
  initialState: {
    campers: [],
    filter: '',
    favorites: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCamperList.fulfilled, (state, action) => {
        // const objectId = nanoid();
        // state.campers = action.payload.map((item) => {
        //   return { ...item, id: objectId };
        state.campers = action.payload;
        // });
      })
      .addCase(fetchCamperList.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCamperList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.favorites = action.payload;
      });
  },
});

export const CamperReducer = CamperSlice.reducer;
