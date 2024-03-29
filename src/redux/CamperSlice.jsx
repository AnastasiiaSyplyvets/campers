import { createSlice } from '@reduxjs/toolkit';
import { fetchCamperList, addFavorite } from './operations';
// import storage from 'redux-persist/lib/storage';

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
        const newCampers = action.payload.filter(
          (item) =>
            !state.campers.some((currentItem) => currentItem._id === item._id)
        );

        state.campers = [...state.campers, ...newCampers];
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
        state.favorites = [...state.favorites, action.payload];
      })
      .addCase(addFavorite.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addFavorite.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const CamperReducer = CamperSlice.reducer;
